using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Linq;
using Swashbuckle.AspNetCore.Annotations;
using System.Net;
using ProviderApi.Models.EntityFramework;
using ProviderApi.Models.ModelParameters;
using AutoMapper;
using ProviderApi.Models.Dto;

namespace ProviderApi.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class SpecializationCostController : ControllerBase
  {
    private readonly ILogger<SpecializationCostController> _logger;

    private AEDigital_SYSTContext _context;
    private IMapper _mapper;

    public SpecializationCostController(ILogger<SpecializationCostController> logger, AEDigital_SYSTContext context, IMapper mapper)
    {
      _logger = logger;
      _context = context;
      _mapper = mapper;
    }

    [HttpGet("GetSpecializationCosts")]
    [SwaggerOperation("GetSpecializationCosts")]
    [SwaggerResponse((int)HttpStatusCode.OK)]
    [SwaggerResponse((int)HttpStatusCode.NotFound)]
    public IEnumerable<SpecializationCostDto> GetSpecializationCosts([FromQuery] SpecializationCostRequest request)
    {
      return _mapper.Map<List<VwSpecializationCost>,List<SpecializationCostDto>>(_context.VwSpecializationCosts.Where(pc => (!request.ProgramId.HasValue || pc.ProgramId.Equals(request.ProgramId))
                                                    && (!request.SpecializationId.HasValue || pc.SpecializationId.Equals(request.SpecializationId))
                                                    && (!request.ProviderId.HasValue || pc.ProviderId.Equals(request.ProviderId))).ToList());
    }
  }
}
