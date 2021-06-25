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
  public class ProgramCredentialController : ControllerBase
  {
    private readonly ILogger<ProgramCredentialController> _logger;

    private AEDigital_SYSTContext _context;

    public ProgramCredentialController(ILogger<ProgramCredentialController> logger, AEDigital_SYSTContext context)
    {
      _logger = logger;
      _context = context;
    }

    [HttpGet("{id}")]
    [SwaggerOperation("GetProgramCredential")]
    [SwaggerResponse((int)HttpStatusCode.OK)]
    [SwaggerResponse((int)HttpStatusCode.NotFound)]
    public IEnumerable<VwProgramCredential> GetProgramCredential(int id)
    {
      return _context.VwProgramCredentials.Where(x => x.ProgramCredentialId.Equals(id));
    }



    [HttpGet("GetProgramCredentials")]
    [SwaggerOperation("GetProgramCredentials")]
    [SwaggerResponse((int)HttpStatusCode.OK)]
    [SwaggerResponse((int)HttpStatusCode.NotFound)]
    public IEnumerable<VwProgramCredential> GetProgramCredentials()
    {
      return _context.VwProgramCredentials.ToList();
    }
  }
}
