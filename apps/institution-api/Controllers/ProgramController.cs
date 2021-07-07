using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Linq;
using Swashbuckle.AspNetCore.Annotations;
using System.Net;
using ProviderApi.Models.EntityFramework;
using ProviderApi.Models.ModelParameters;
using ProviderApi.Models.Dto;
using AutoMapper;

namespace ProviderApi.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class ProgramController : ControllerBase
  {
    private readonly ILogger<ProgramController> _logger;

    private AEDigital_SYSTContext _context;
    private IMapper _mapper;

    public ProgramController(ILogger<ProgramController> logger, AEDigital_SYSTContext context, IMapper mapper)
    {
      _logger = logger;
      _context = context;
      _mapper = mapper;
    }

    [HttpGet("GetPrograms")]
    [SwaggerOperation("GetPrograms")]
    [SwaggerResponse((int)HttpStatusCode.OK)]
    [SwaggerResponse((int)HttpStatusCode.NotFound)]
    public IEnumerable<ProgramDto> GetPrograms([FromQuery] ProgramsRequest request)
    {
      IQueryable<VwProgram> programs;
      var albertaProvidersList = _context.VwAlbertaPsiproviders.Select(apsi => apsi.ProviderId).ToList();
      programs = _context.VwPrograms.Where(p=> p.ProviderId.HasValue && albertaProvidersList.Contains(p.ProviderId.Value)
                                           && (p.ProviderId == request.ProviderId || !request.ProviderId.HasValue)
                                           );

      return _mapper.Map<List<VwProgram>,List<ProgramDto>>(programs.OrderBy(x=>x.ProgramName).ToList());
    }

    [HttpGet("GetProgramCountByCategory")]
    [SwaggerOperation("GetProgramCountByCategory")]
    [SwaggerResponse((int)HttpStatusCode.OK)]
    [SwaggerResponse((int)HttpStatusCode.NotFound)]
    public IEnumerable<PsiSpecializationCountByCategoryDto> GetProgramCountByCategory()
    {
      return _mapper.Map<List<VwPmpPsispecializationCountByCategory>,List<PsiSpecializationCountByCategoryDto>>(_context.VwPmpPsispecializationCountByCategories.OrderBy(x=>x.CipSubSeries).ToList());
    }
  }
}
