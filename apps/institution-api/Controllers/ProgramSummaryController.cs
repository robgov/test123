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
  public class ProgramSummaryController : ControllerBase
  {
    private readonly ILogger<ProgramSummaryController> _logger;

    private AEDigital_SYSTContext _context;
    private IMapper _mapper;

    public ProgramSummaryController(ILogger<ProgramSummaryController> logger, AEDigital_SYSTContext context, IMapper mapper)
    {
      _logger = logger;
      _context = context;
      _mapper = mapper;
    }
    
    [HttpGet("GetProgramSummaries")]
    [SwaggerOperation("GetProgramSummaries")]
    [SwaggerResponse((int)HttpStatusCode.OK)]
    [SwaggerResponse((int)HttpStatusCode.NotFound)]
    public IEnumerable<ProgramSummaryDto> GetProgramSummaries()
    {
      var result = _mapper.Map<List<VwPmpPsiprogramSummary>, List<ProgramSummaryDto>> (_context.VwPmpPsiprogramSummaries.ToList());

      return result;
    }
  }
}
