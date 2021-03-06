using ProviderApi.Access;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;
using ProviderApi.Models.EntityFramework;
using Microsoft.EntityFrameworkCore;
using System;

namespace ProviderApi
{
  public class Startup
  {
    public IConfiguration Configuration { get; }
    
    public Startup(IConfiguration configuration)
    {
        Configuration = configuration;
    }

// Startup test 

    // This method gets called by the runtime. Use this method to add services to the container.
    // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
    public void ConfigureServices(IServiceCollection services)
    {
      services.AddAccessJwtAuthentication(
          Configuration
            .GetSection("Adsp:Access")
            .Get<AccessConfiguration>()
        )
        .AddAuthorization()
        .AddControllers();
      services.AddSwaggerGen(c =>
      {
        c.SwaggerDoc("v1", new OpenApiInfo { Title = "AEDigital.Provider.API", Version = "v1" });
      });

      services.AddCors(options => {
        options.AddPolicy("AllowSpecificOrigin", builder => builder.WithOrigins("http://localhost:5001"));
        options.AddPolicy("AllowAnyOrigin", builder => builder.AllowAnyOrigin());

      });

      services.AddDbContext<AEDigital_SYSTContext>(opt =>
              opt.UseSqlServer(Configuration.GetConnectionString("AEDIGITAL_SYST"))
           );
      services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
      if (env.IsDevelopment())
      {
        app.UseDeveloperExceptionPage();
        app.UseSwagger();
        app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "AEDigital.Provider.API v1"));

        app.UseCors(options => options.AllowAnyOrigin());
      }

      app.UseRouting()
        .UseAuthentication()
        .UseAuthorization()
        .UseEndpoints(endpoints => 
          endpoints.MapControllers()
        );
    }
  }
}
