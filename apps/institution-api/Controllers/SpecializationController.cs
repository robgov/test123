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
  public class SpecializationController : ControllerBase
  {
    private readonly ILogger<SpecializationController> _logger;

    private AEDigital_SYSTContext _context;

    public SpecializationController(ILogger<SpecializationController> logger, AEDigital_SYSTContext context)
    {
      _logger = logger;
      _context = context;
    }

    [HttpGet("{id}")]
    [SwaggerOperation("GetSpecialization")]
    [SwaggerResponse((int)HttpStatusCode.OK)]
    [SwaggerResponse((int)HttpStatusCode.NotFound)]
    public IEnumerable<VwSpecialization> GetSpecialization(int id)
    {
      return _context.VwSpecializations.Where(x => x.SpecializationId.Equals(id));
    }

    [HttpGet("")]
    [SwaggerOperation("GetSpecializations")]
    [SwaggerResponse((int)HttpStatusCode.OK)]
    [SwaggerResponse((int)HttpStatusCode.NotFound)]
    public IEnumerable<VwSpecialization> GetSpecializations()
    {
      return _context.VwSpecializations.ToList();
    }

    [HttpGet("GetSpecializationByProgramId")]
    [SwaggerOperation("GetSpecializationByProgramId")]
    [SwaggerResponse((int)HttpStatusCode.OK)]
    [SwaggerResponse((int)HttpStatusCode.NotFound)]
    public VwSpecialization GetSpecializationByProgramId([FromQuery] SpecializationRequest request)
    {
      return _context.VwSpecializations.FirstOrDefault(x => x.ProgramId.Equals(request.ProgramId));
    }

    [HttpGet("GetSpecializationYearlyCosts")]
    [SwaggerOperation("GetSpecializationYearlyCosts")]
    [SwaggerResponse((int)HttpStatusCode.OK)]
    [SwaggerResponse((int)HttpStatusCode.NotFound)]
    public IEnumerable<VwPmpPsipspecializationYearlyCost> GetSpecializationYearlyCosts()
    {
      return _context.VwPmpPsipspecializationYearlyCosts.ToList();
    }
  }
}
