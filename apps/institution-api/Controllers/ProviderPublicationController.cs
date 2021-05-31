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
  public class ProviderPublicationController : ControllerBase
  {
    private readonly ILogger<ProviderPublicationController> _logger;

    private AEDigital_SYSTContext _context;

    public ProviderPublicationController(ILogger<ProviderPublicationController> logger, AEDigital_SYSTContext context)
    {
      _logger = logger;
      _context = context;
    }

    [HttpGet("{id}")]
    [SwaggerOperation("GetProviderPublication")]
    [SwaggerResponse((int)HttpStatusCode.OK)]
    [SwaggerResponse((int)HttpStatusCode.NotFound)]
    public IEnumerable<VwProviderPublication> GetProviderPublication(int id)
    {
      return _context.VwProviderPublications.Where(x => x.ProviderPublicationId.Equals(id));
    }

  }
}
