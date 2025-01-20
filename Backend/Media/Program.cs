using Media.Services;
using Media.Models;
using Media.Filters;
using MongoDB.Driver;
using Microsoft.OpenApi.Models;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();

// Register MediaService
builder.Services.AddScoped<IMediaService, MediaService>();

builder.Services.AddSwaggerGen(options =>
{
    options.OperationFilter<FileUploadOperationFilter>();
    options.SwaggerDoc("v1", new OpenApiInfo
    {
        Title = "Media Microservice",
        Version = "v1",
        Description = "API documentation for the Media Microservice"
    });
});

// Configure MongoDB settings
builder.Services.Configure<MongoSettings>( // line 43
    builder.Configuration.GetSection("MongoSettings"));
builder.Services.AddSingleton<IMongoClient, MongoClient>(
    _ => new MongoClient(builder.Configuration["MongoSettings:ConnectionString"]));

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "Media Microservice v1");
    });
}

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthorization();
app.MapControllers();
app.Run();
