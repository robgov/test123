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
  public class ProviderWebsiteController : ControllerBase
  {
    private readonly ILogger<ProviderWebsiteController> _logger;

    private AEDigital_SYSTContext _context;

    public ProviderWebsiteController(ILogger<ProviderWebsiteController> logger, AEDigital_SYSTContext context)
    {
      _logger = logger;
      _context = context;
    }

    [HttpGet("GetProviderWebsites")]
    [SwaggerOperation("GetProviderWebsites")]
    [SwaggerResponse((int)HttpStatusCode.OK)]
    [SwaggerResponse((int)HttpStatusCode.NotFound)]
    public IEnumerable<VwProviderWebsite> GetProviderWebsites([FromQuery] ProviderWebsiteRequest request)
    {
      return _context.VwProviderWebsites.Where(pc => !request.ProviderId.HasValue || pc.ProviderId.Equals(request.ProviderId));
    }

  }
}
