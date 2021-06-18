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
  public class ProviderPhoneController : ControllerBase
  {
    private readonly ILogger<ProviderPhoneController> _logger;

    private AEDigital_SYSTContext _context;

    public ProviderPhoneController(ILogger<ProviderPhoneController> logger, AEDigital_SYSTContext context)
    {
      _logger = logger;
      _context = context;
    }

    [HttpGet("{id}")]
    [SwaggerOperation("GetProviderPhone")]
    [SwaggerResponse((int)HttpStatusCode.OK)]
    [SwaggerResponse((int)HttpStatusCode.NotFound)]
    public IEnumerable<VwProviderPhone> GetProviderPhone(int id)
    {
      return _context.VwProviderPhones.Where(x => x.ProviderPhoneId.Equals(id));
    }

  }
}
