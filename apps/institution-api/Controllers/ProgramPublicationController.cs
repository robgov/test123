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
  public class ProgramPublicationController : ControllerBase
  {
    private readonly ILogger<ProgramPublicationController> _logger;

    private AEDigital_SYSTContext _context;

    public ProgramPublicationController(ILogger<ProgramPublicationController> logger, AEDigital_SYSTContext context)
    {
      _logger = logger;
      _context = context;
    }

    [HttpGet("{id}")]
    [SwaggerOperation("GetProgramPublication")]
    [SwaggerResponse((int)HttpStatusCode.OK)]
    [SwaggerResponse((int)HttpStatusCode.NotFound)]
    public IEnumerable<VwProgramPublication> GetProgramPublication(int id)
    {
      return _context.VwProgramPublications.Where(x => x.ProgramPublicationId.Equals(id));
    }

  }
}
