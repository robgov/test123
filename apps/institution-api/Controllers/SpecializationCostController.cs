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
  public class SpecializationCostController : ControllerBase
  {
    private readonly ILogger<SpecializationCostController> _logger;

    private AEDigital_SYSTContext _context;

    public SpecializationCostController(ILogger<SpecializationCostController> logger, AEDigital_SYSTContext context)
    {
      _logger = logger;
      _context = context;
    }

    [HttpGet("GetSpecializationCosts")]
    [SwaggerOperation("GetSpecializationCosts")]
    [SwaggerResponse((int)HttpStatusCode.OK)]
    [SwaggerResponse((int)HttpStatusCode.NotFound)]
    public IEnumerable<VwSpecializationCost> GetSpecializationCosts([FromQuery] SpecializationCostRequest request)
    {
      return _context.VwSpecializationCosts.Where(pc => (!request.ProgramId.HasValue || pc.ProgramId.Equals(request.ProgramId))
                                                    && (!request.SpecializationId.HasValue || pc.SpecializationId.Equals(request.SpecializationId))
                                                    && (!request.ProviderId.HasValue || pc.ProviderId.Equals(request.ProviderId)));
    }
  }
}
