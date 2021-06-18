using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Linq;
using Swashbuckle.AspNetCore.Annotations;
using System.Net;
using ProviderApi.Models.EntityFramework;
using ProviderApi.Models.ModelParameters;

namespace ProviderApi.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class ProviderLogoController : ControllerBase
  {
    private readonly ILogger<ProviderLogoController> _logger;

    private AEDigital_SYSTContext _context;

    public ProviderLogoController(ILogger<ProviderLogoController> logger, AEDigital_SYSTContext context)
    {
      _logger = logger;
      _context = context;
    }

    [HttpGet("GetProviderLogoByProviderId")]
    [SwaggerOperation("GetProviderLogoByProviderId")]
    [SwaggerResponse((int)HttpStatusCode.OK)]
    [SwaggerResponse((int)HttpStatusCode.NotFound)]
    public VwProviderLogo GetProviderLogoByProviderId([FromQuery] ProviderLogoRequest request)
    {
      return _context.VwProviderLogos.FirstOrDefault(x => x.ProviderId.Equals(request.ProviderId));
    }

    [HttpGet("")]
    [SwaggerOperation("GetProviderLogos")]
    [SwaggerResponse((int)HttpStatusCode.OK)]
    [SwaggerResponse((int)HttpStatusCode.NotFound)]
    public IEnumerable<VwProviderLogo> GetProviderLogos()
    {
      return _context.VwProviderLogos;
    }
  }
}
