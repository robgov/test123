using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Linq;
using Swashbuckle.AspNetCore.Annotations;
using System.Net;
using ProviderApi.Models.EntityFramework;
using ProviderApi.Models.ModelParameters;
using AutoMapper;
using ProviderApi.Models.Dto;

namespace ProviderApi.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class SpecializationController : ControllerBase
  {
    private readonly ILogger<SpecializationController> _logger;
    private AEDigital_SYSTContext _context;
    private IMapper _mapper;

    public SpecializationController(ILogger<SpecializationController> logger, AEDigital_SYSTContext context, IMapper mapper)
    {
      _logger = logger;
      _context = context;
      _mapper = mapper;
    }

    [HttpGet("")]
    [SwaggerOperation("GetSpecializations")]
    [SwaggerResponse((int)HttpStatusCode.OK)]
    [SwaggerResponse((int)HttpStatusCode.NotFound)]
    public IEnumerable<SpecializationDto> GetSpecializations()
    {
      return _mapper.Map<List<VwSpecialization>,List<SpecializationDto>>(_context.VwSpecializations.ToList());
    }

    [HttpGet("GetSpecializationByProgramId")]
    [SwaggerOperation("GetSpecializationByProgramId")]
    [SwaggerResponse((int)HttpStatusCode.OK)]
    [SwaggerResponse((int)HttpStatusCode.NotFound)]
    public SpecializationDto GetSpecializationByProgramId([FromQuery] SpecializationRequest request)
    {
      return _mapper.Map<VwSpecialization, SpecializationDto>(_context.VwSpecializations.FirstOrDefault(x => x.ProgramId.Equals(request.ProgramId)));
    }

    [HttpGet("GetSpecializationYearlyCosts")]
    [SwaggerOperation("GetSpecializationYearlyCosts")]
    [SwaggerResponse((int)HttpStatusCode.OK)]
    [SwaggerResponse((int)HttpStatusCode.NotFound)]
    public IEnumerable<SpecializationYearlyCostDto> GetSpecializationYearlyCosts()
    {
      return _mapper.Map<List<VwPmpPsipspecializationYearlyCost>,List<SpecializationYearlyCostDto>>(_context.VwPmpPsipspecializationYearlyCosts.ToList());
    }
  }
}
