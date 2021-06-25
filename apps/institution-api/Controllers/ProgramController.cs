using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using Swashbuckle.AspNetCore.Annotations;
using System.Net;
using ProviderApi.Models.EntityFramework;
using ProviderApi.Models.ModelParameters;
using LinqKit;
using ProviderApi.Controllers.Enrichers;

namespace ProviderApi.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class ProgramController : ControllerBase
  {
    private readonly ILogger<ProgramController> _logger;

    private AEDigital_SYSTContext _context;

    public ProgramController(ILogger<ProgramController> logger, AEDigital_SYSTContext context)
    {
      _logger = logger;
      _context = context;
    }

    [HttpGet("{id}")]
    [SwaggerOperation("GetProgram")]
    [SwaggerResponse((int)HttpStatusCode.OK)]
    [SwaggerResponse((int)HttpStatusCode.NotFound)]
    public IEnumerable<VwProgram> GetProgram(int id)
    {
      return _context.VwPrograms.Where(x => x.ProgramId.Equals(id));
    }

    [HttpGet("GetPrograms")]
    [SwaggerOperation("GetPrograms")]
    [SwaggerResponse((int)HttpStatusCode.OK)]
    [SwaggerResponse((int)HttpStatusCode.NotFound)]
    public IEnumerable<VwProgram> GetPrograms([FromQuery] ProgramsRequest request)
    {
      IQueryable<VwProgram> programs;
      var albertaProvidersList = _context.VwAlbertaPsiproviders.Select(apsi => apsi.ProviderId).ToList();
      programs = _context.VwPrograms.Where(p=> p.ProviderId.HasValue && albertaProvidersList.Contains(p.ProviderId.Value));


      //TODO: Remove filling in information that's not available yet.



      //FOR EACH OF THESE ITEMS ADD A RANDOM EMPLOYMENT % AND MEDIAN INCOME

      foreach(var item in programs)
      {
        //ProgramEmploymentStat 
        //ProgramMedianIncome
        item.ProgramMedianIncome = -1;
        item.ProgramEmploymentStat = -1;
      }
      return programs.ToList().OrderBy(x=>x.ProgramName);
    }

    [HttpGet("GetProgramCountByCategory")]
    [SwaggerOperation("GetProgramCountByCategory")]
    [SwaggerResponse((int)HttpStatusCode.OK)]
    [SwaggerResponse((int)HttpStatusCode.NotFound)]
    public IEnumerable<VwPmpPsispecializationCountByCategory> GetProgramCountByCategory()
    {
      return _context.VwPmpPsispecializationCountByCategories.OrderBy(x=>x.CipSubSeries);
    }
  }
}
