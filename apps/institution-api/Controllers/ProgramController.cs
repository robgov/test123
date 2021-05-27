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
  public class ProgramController : ControllerBase
  {
    private readonly ILogger<InstitutionSummaryController> _logger;

    private AEDMContext _context;

    public ProgramController(ILogger<InstitutionSummaryController> logger, AEDMContext context)
    {
      _logger = logger;
      _context = context;
    }

    ///<Summary>
    /// Gets ProviderType by ID 
    ///</Summary>
    [HttpGet("{code}")]
    [SwaggerOperation("GetProgramTypeByCode")]
    [SwaggerResponse((int)HttpStatusCode.OK)]
    [SwaggerResponse((int)HttpStatusCode.NotFound)]
    public IEnumerable<VwAllProgram> Get(string code)
    {
      var programs = _context.VwAllPrograms.Where(progType => progType.ProgramCode.Equals(code));
      return programs;

    }

  }
}
