using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using Swashbuckle.AspNetCore.Annotations;
using System.Net;
using ProviderApi.Models;
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

    [HttpGet("GetProgramsByProviderId")]
    [SwaggerOperation("GetProgramsByProviderId")]
    [SwaggerResponse((int)HttpStatusCode.OK)]
    [SwaggerResponse((int)HttpStatusCode.NotFound)]
    public IEnumerable<VwProgram> GetProgramsByProviderId([FromQuery] ProviderProgramRequest request)
    {
      return _context.VwPrograms.Where(x => x.ProviderId.Equals(request.ProviderId));
    }

    //[HttpGet("")]
    //[SwaggerOperation("GetProgramCategories")]
    //[SwaggerResponse((int)HttpStatusCode.OK)]
    //[SwaggerResponse((int)HttpStatusCode.NotFound)]
    //public IEnumerable<string> GetProgramCategories()
    //{
    //  var programCategories = _context.VwPrograms.Select(x => x.ProgramName).Distinct().ToList();
    //  return programCategories.OrderBy(x => x);
    //}

    //[HttpGet("{category}")]
    //[SwaggerOperation("GetProgramCountByCategory")]
    //[SwaggerResponse((int)HttpStatusCode.OK)]
    //[SwaggerResponse((int)HttpStatusCode.NotFound)]
    //public int GetProgramCountByCategory(string category)
    //{
    //  var programCategoryCount = _context.VwPrograms.Count(x => x.ProgramName == category);
    //  return programCategoryCount;
    //}
  }
}
