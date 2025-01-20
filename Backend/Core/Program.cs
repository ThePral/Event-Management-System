using System.Net;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using Core.Data;
using Core.Services;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
//     .AddJwtBearer(options =>
//     {
//         options.RequireHttpsMetadata = false;
//         options.Authority = "http://localhost:5020"; // URL of your IAMService (Authentication Server)
//         options.Audience = "core_microservice";  // This should match the audience in the JWT
//         options.TokenValidationParameters = new TokenValidationParameters
//         {
//             ValidateIssuer = true,
//             ValidateAudience = true,
//             ValidateLifetime = true,
//             ValidateIssuerSigningKey = true,
//             IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("A_VERY_LONG_AND_RANDOM_SECRET_KEY")) // Use a secret key for signing
//         };
//     });

var connectionString = builder.Configuration.GetConnectionString("DefaultConnection") 
                       ?? "Server=localhost;Database=EMS;User ID=root;Password=2324LBJKB@pourya;";

builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString)));

builder.Services.AddSingleton<RabbitMQConsumer>();
builder.Services.AddControllers();

builder.Services.AddSwaggerGen(options =>
{
    options.SwaggerDoc("v1", new OpenApiInfo
    {
        Title = "Core Microservice",
        Version = "v1",
        Description = "An API for managing CoreService data"
    });
});

builder.Services.AddScoped<EventService>();

// Register RabbitMQConsumerHostedService
builder.Services.AddHostedService<RabbitMQConsumerHostedService>();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "Core API v1");
    });
}

// Middleware for authentication and authorization
app.UseAuthentication();
app.UseAuthorization();

// Map controllers
app.MapControllers();

// Run the application
app.Run();
