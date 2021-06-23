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
  public class ProviderAddressController : ControllerBase
  {
    private readonly ILogger<ProviderAddressController> _logger;

    private AEDigital_SYSTContext _context;

    public ProviderAddressController(ILogger<ProviderAddressController> logger, AEDigital_SYSTContext context)
    {
      _logger = logger;
      _context = context;
    }

    [HttpGet("{id}")]
    [SwaggerOperation("GetProviderAddress")]
    [SwaggerResponse((int)HttpStatusCode.OK)]
    [SwaggerResponse((int)HttpStatusCode.NotFound)]
    public IEnumerable<VwProviderAddress> GetProviderAddress(int id)
    {
      return _context.VwProviderAddresses.Where(x => x.ProviderAddressId.Equals(id));
    }

    [HttpGet("GetProviderAddresses")]
    [SwaggerOperation("GetProviderAddresses")]
    [SwaggerResponse((int)HttpStatusCode.OK)]
    [SwaggerResponse((int)HttpStatusCode.NotFound)]
    public IEnumerable<VwProviderAddress> GetProviderAddresses([FromQuery] ProviderAddressRequest request)
    {
      return _context.VwProviderAddresses.Where(pc => !request.ProviderId.HasValue || pc.ProviderId.Equals(request.ProviderId));
    }

  }
}
