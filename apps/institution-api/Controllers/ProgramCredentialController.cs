using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Linq;
using Swashbuckle.AspNetCore.Annotations;
using System.Net;
using ProviderApi.Models.EntityFramework;
using ProviderApi.Models.Dto;
using AutoMapper;

namespace ProviderApi.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class ProgramCredentialController : ControllerBase
  {
    private readonly ILogger<ProgramCredentialController> _logger;

    private AEDigital_SYSTContext _context;
    private IMapper _mapper;

    public ProgramCredentialController(ILogger<ProgramCredentialController> logger, AEDigital_SYSTContext context, IMapper mapper)
    {
      _logger = logger;
      _context = context;
      _mapper = mapper;
    }

    [HttpGet("GetProgramCredentials")]
    [SwaggerOperation("GetProgramCredentials")]
    [SwaggerResponse((int)HttpStatusCode.OK)]
    [SwaggerResponse((int)HttpStatusCode.NotFound)]
    public IEnumerable<ProgramCredentialDto> GetProgramCredentials()
    {
      return _mapper.Map<List<VwProgramCredential>, List<ProgramCredentialDto>>(_context.VwProgramCredentials.ToList());
    }
  }
}
