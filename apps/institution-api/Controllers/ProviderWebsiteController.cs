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
  public class ProviderWebsiteController : ControllerBase
  {
    private readonly ILogger<ProviderWebsiteController> _logger;

    private AEDigital_SYSTContext _context;

    public ProviderWebsiteController(ILogger<ProviderWebsiteController> logger, AEDigital_SYSTContext context)
    {
      _logger = logger;
      _context = context;
    }

    [HttpGet("{id}")]
    [SwaggerOperation("GetProviderType")]
    [SwaggerResponse((int)HttpStatusCode.OK)]
    [SwaggerResponse((int)HttpStatusCode.NotFound)]
    public IEnumerable<VwProviderWebsite> GetProviderWebsite(int id)
    {
      return _context.VwProviderWebsites.Where(x => x.LocationWebsiteId.Equals(id));
    }

  }
}
