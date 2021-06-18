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
      ///TODO: Should be able to remove this, server shouldn't be doing the filtering
      //if (request.ProviderId > 0)
      //{
      //   programs = _context.VwPrograms.Where(x => x.ProviderId.Equals(request.ProviderId));
      //}
      //else
      //{
      programs = _context.VwPrograms;
      //}

      //if (!string.IsNullOrEmpty(request.CipSubSeriesCode))
      //{
      //  var categoryProgramIds = _context.VwPmpPsiprogramByCategoryLists.Where(c => c.CipSubSeriesCode == request.CipSubSeriesCode).Select(cp=>cp.ProgramId);
      //  programs = programs.Where(p => categoryProgramIds.Contains(p.ProgramId));
      //}

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


    //[HttpGet("GetProgramIdsByCategory")]
    //[SwaggerOperation("GetProgramIdsByCategory")]
    //[SwaggerResponse((int)HttpStatusCode.OK)]
    //[SwaggerResponse((int)HttpStatusCode.NotFound)]
    //public IEnumerable<VwPmpPsiprogramCountByCategory> GetProgramIdsByCategory()
    //{
    //  return _context.VwPmpPsispecializationCountByCategories.ToList();
    //}
  }
}
