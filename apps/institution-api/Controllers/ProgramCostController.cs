using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using Swashbuckle.AspNetCore.Annotations;
using System.Net;
using ProviderApi.Models.EntityFramework;
using ProviderApi.Models.ModelParameters;
using LinqKit;
using ProviderApi.Controllers.Enrichers;
using AutoMapper;
using ProviderApi.Models.Dto;

namespace ProviderApi.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class ProgramCostController : ControllerBase
  {
    private readonly ILogger<ProgramCostController> _logger;

    private AEDigital_SYSTContext _context;
    private IMapper _mapper;

    public ProgramCostController(ILogger<ProgramCostController> logger, AEDigital_SYSTContext context, IMapper mapper)
    {
      _logger = logger;
      _context = context;
      _mapper = mapper;
    }

    [HttpGet("GetProgramCosts")]
    [SwaggerOperation("GetProgramCosts")]
    [SwaggerResponse((int)HttpStatusCode.OK)]
    [SwaggerResponse((int)HttpStatusCode.NotFound)]
    public IEnumerable<ProgramCostDto> GetProgramCosts([FromQuery] ProgramCostsRequest request)
    {
      return _mapper.Map<List<VwProgramCost>,List<ProgramCostDto>>(_context.VwProgramCosts.Where(pc => !request.ProgramId.HasValue || pc.ProgramId.Equals(request.ProgramId)).ToList());
    }
  }
}
