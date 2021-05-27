using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ProviderTypeApi.Models;
using Swashbuckle.AspNetCore.Annotations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace ProviderTypeApi.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class ProviderTypeController : ControllerBase
  {
    private readonly ILogger<ProviderTypeController> _logger;

    private AEDMContext _context;

    public ProviderTypeController(ILogger<ProviderTypeController> logger, AEDMContext context)
    {
      _logger = logger;
      _context = context;
    }

    ///<Summary>
    /// Gets Provider Type by ID
    ///</Summary>
    [HttpGet("{id}")]
    [SwaggerOperation("GetProviderTypeById")]
    [SwaggerResponse((int)HttpStatusCode.OK)]
    [SwaggerResponse((int)HttpStatusCode.NotFound)]
    public IEnumerable<VwProviderType> Get(int id)
    {
      return _context.VwProviderTypes.Where(ptype => ptype.ProviderTypeId.Equals(id));
    }

  }
}
