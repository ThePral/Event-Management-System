using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using System.Text;
using IAMService.Services;
using IAMService.Data;
using IAMService.Interfaces;
using IAMService.Implementations;
using IAMService.DTO;
using IAMService.CRUD;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container
builder.Services.AddControllers();

// Configure Swagger for API documentation
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo
    {
        Title = "IAMService API",
        Version = "v1",
        Description = "An API for managing IAMService data"
    });

    c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        Description = "Enter 'Bearer' followed by your token. Example: 'Bearer {token}'",
        Name = "Authorization",
        In = ParameterLocation.Header,
        Type = SecuritySchemeType.ApiKey,
        Scheme = "Bearer",
        BearerFormat = "JWT"
    });

    c.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        {
            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference
                {
                    Type = ReferenceType.SecurityScheme,
                    Id = "Bearer"
                },
                Scheme = "oauth2",
                Name = "Bearer",
                In = ParameterLocation.Header,
            },
            new List<string>()
        }
    });
});

// Logging configuration
builder.Logging.ClearProviders();
builder.Logging.AddConsole();

// Database connection string (from appsettings.json or directly here)
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection") 
                       ?? "Server=localhost;Database=EMS;User ID=root;Password=2324LBJKB@pourya;";

// Add DbContext for Entity Framework Core
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString)));

// JWT Configuration
var jwtSecret = builder.Configuration["JwtSettings:Secret"] ?? "A_VERY_LONG_AND_RANDOM_SECRET_KEY";
var key = Encoding.ASCII.GetBytes(jwtSecret);

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(key),
            ValidateIssuer = false,
            ValidateAudience = false,
            ValidateLifetime = true,
            ClockSkew = TimeSpan.Zero
        };

        options.Events = new JwtBearerEvents
        {
            OnAuthenticationFailed = context =>
            {
                Console.WriteLine($"Authentication failed: {context.Exception.Message}");
                return Task.CompletedTask;
            },
            OnTokenValidated = context =>
            {
                var claimsPrincipal = context.Principal;
                if (claimsPrincipal == null)
                {
                    Console.WriteLine("Token validated, but no principal was provided.");
                    return Task.CompletedTask;
                }

                var claims = claimsPrincipal.Claims
                    .Select(c => $"{c.Type}: {c.Value}")
                    .ToArray();
                Console.WriteLine($"Token validated. Claims: {string.Join(", ", claims)}");

                return Task.CompletedTask;
            }
        };
    });

// Register services for dependency injection
builder.Services.AddScoped<AuthService>(provider => new AuthService(jwtSecret));
builder.Services.AddScoped<UserService>();
builder.Services.AddScoped<DatabaseService>();

// Add singleton AuthService
builder.Services.AddSingleton<AuthService>(new AuthService(jwtSecret));
builder.Services.AddSingleton<IConfiguration>(builder.Configuration);

// Register services
builder.Services.AddScoped<IDatabaseConnection, DatabaseConnection>();
builder.Services.AddScoped<IDatabaseCommandExecutor, DatabaseCommandExecutor>();
builder.Services.AddScoped<IOTPCRUD, OTPCRUD>();
builder.Services.AddScoped<IEmailService, EmailService>();
builder.Services.AddTransient<IOTPExpiryService, OTPExpiryService>();

// Build and configure the application
var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "IAMService API v1");
    });
}

// Middleware for authentication and authorization
app.UseAuthentication();
app.UseAuthorization();

// Map controllers
app.MapControllers();

// Run the application
app.Run();
