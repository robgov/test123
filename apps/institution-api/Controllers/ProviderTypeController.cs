using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Linq;
using Swashbuckle.AspNetCore.Annotations;
using System.Net;
using ProviderApi.Models.EntityFramework;

namespace ProviderApi.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class ProviderTypeController : ControllerBase
  {
    private readonly ILogger<ProviderTypeController> _logger;

    private AEDigital_SYSTContext _context;

    public ProviderTypeController(ILogger<ProviderTypeController> logger, AEDigital_SYSTContext context)
    {
      _logger = logger;
      _context = context;
    }

    [HttpGet("{id}")]
    [SwaggerOperation("GetProviderType")]
    [SwaggerResponse((int)HttpStatusCode.OK)]
    [SwaggerResponse((int)HttpStatusCode.NotFound)]
    public IEnumerable<VwProviderType> GetProviderType(int id)
    {
      return _context.VwProviderTypes.Where(x => x.ProviderTypeId.Equals(id));
    }

  }
}
