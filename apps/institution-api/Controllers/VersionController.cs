using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Swashbuckle.AspNetCore.Annotations;
using System.Net;
using Microsoft.Extensions.Configuration;
using System.Reflection;
using ProviderApi.Models.Dto;

namespace ProviderApi.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class VersionController : ControllerBase
  {
    private readonly ILogger<VersionController> _logger;

    public VersionController(ILogger<VersionController> logger)
    {
      _logger = logger;
    }

    [HttpGet("GetVersion")]
    [SwaggerOperation("GetVersion")]
    [SwaggerResponse((int)HttpStatusCode.OK)]
    [SwaggerResponse((int)HttpStatusCode.NotFound)]
    public VersionInfoDto GetVersion()
    {
      var version = Assembly.GetExecutingAssembly().GetName().Version;
      return new VersionInfoDto() { Version = version.ToString()};
    }
  }
}
