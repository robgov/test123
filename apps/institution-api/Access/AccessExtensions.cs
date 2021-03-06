using System;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.DependencyInjection;

namespace ProviderApi.Access
{
  public static class AccessExtensions {
    internal static IServiceCollection AddAccessJwtAuthentication(
      this IServiceCollection services,
      AccessConfiguration configuration
    ) {

      services
        .AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
        .AddJwtBearer(jwt => {
          jwt.Authority = new Uri(
              configuration.Url, 
              $"/auth/realms/{configuration.Realm}"
            ).AbsoluteUri;
          jwt.Audience = "institution-api";
        });

      return services;
    } 
  }
}
