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
  public class ProgramTypeController : ControllerBase
  {
    private readonly ILogger<ProgramTypeController> _logger;

    private AEDigital_SYSTContext _context;

    public ProgramTypeController(ILogger<ProgramTypeController> logger, AEDigital_SYSTContext context)
    {
      _logger = logger;
      _context = context;
    }

    [HttpGet("")]
    [SwaggerOperation("GetProgramTypes")]
    [SwaggerResponse((int)HttpStatusCode.OK)]
    [SwaggerResponse((int)HttpStatusCode.NotFound)]
    public IEnumerable<VwProgramType> GetProgramTypes()
    {
      return _context.VwProgramTypes.ToList();
    }
  }
}
