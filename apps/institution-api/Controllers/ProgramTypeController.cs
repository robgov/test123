using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Linq;
using Swashbuckle.AspNetCore.Annotations;
using System.Net;
using ProviderApi.Models.EntityFramework;
using AutoMapper;
using ProviderApi.Models.Dto;

namespace ProviderApi.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class ProgramTypeController : ControllerBase
  {
    private readonly ILogger<ProgramTypeController> _logger;

    private AEDigital_SYSTContext _context;
    private IMapper _mapper;

    public ProgramTypeController(ILogger<ProgramTypeController> logger, AEDigital_SYSTContext context, IMapper mapper)
    {
      _logger = logger;
      _context = context;
      _mapper = mapper;
    }

    [HttpGet("")]
    [SwaggerOperation("GetProgramTypes")]
    [SwaggerResponse((int)HttpStatusCode.OK)]
    [SwaggerResponse((int)HttpStatusCode.NotFound)]
    public IEnumerable<ProgramTypeDto> GetProgramTypes()
    {
      return _mapper.Map<List<VwProgramType>,List<ProgramTypeDto>>(_context.VwProgramTypes.ToList());
    }
  }
}
