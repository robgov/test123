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

namespace ProviderApi.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class ProgramCostController : ControllerBase
  {
    private readonly ILogger<ProgramCostController> _logger;

    private AEDigital_SYSTContext _context;

    public ProgramCostController(ILogger<ProgramCostController> logger, AEDigital_SYSTContext context)
    {
      _logger = logger;
      _context = context;
    }

    [HttpGet("{id}")]
    [SwaggerOperation("GetProgramCost")]
    [SwaggerResponse((int)HttpStatusCode.OK)]
    [SwaggerResponse((int)HttpStatusCode.NotFound)]
    public IEnumerable<VwProgram> GetProgramCost(int id)
    {
      return _context.VwPrograms.Where(x => x.ProgramId.Equals(id));
    }

    [HttpGet("GetProgramCosts")]
    [SwaggerOperation("GetProgramCosts")]
    [SwaggerResponse((int)HttpStatusCode.OK)]
    [SwaggerResponse((int)HttpStatusCode.NotFound)]
    public IEnumerable<VwProgramCost> GetProgramCosts([FromQuery] ProgramCostsRequest request)
    {
      return _context.VwProgramCosts.Where(pc=> !request.ProgramId.HasValue || pc.ProgramId.Equals(request.ProgramId));
    }
  }
}
