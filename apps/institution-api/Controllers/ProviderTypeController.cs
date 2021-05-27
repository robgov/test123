using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

using System.Collections.Generic;
using System.Linq;

using Swashbuckle.AspNetCore.Annotations;
using System.Net;
using ProviderApi.Models;


namespace ProviderApi.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class ProviderTypeController : ControllerBase
  {
    private readonly ILogger<InstitutionSummaryController> _logger;

    private AEDMContext _context;

    public ProviderTypeController(ILogger<InstitutionSummaryController> logger, AEDMContext context)
    {
      _logger = logger;
      _context = context;
    }

    ///<Summary>
    /// Gets ProviderType by ID 
    ///</Summary>
    [HttpGet("{id}")]
    [SwaggerOperation("GetProviderTypebyID")]
    [SwaggerResponse((int)HttpStatusCode.OK)]
    [SwaggerResponse((int)HttpStatusCode.NotFound)]
    public IEnumerable<VwProviderType> Get(int id)
    {
      return _context.VwProviderTypes.Where(providerType => providerType.ProviderTypeId.Equals(id));
    }

  }
}
