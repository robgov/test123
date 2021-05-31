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
  public class LocationPublicationController : ControllerBase
  {
    private readonly ILogger<LocationPublicationController> _logger;

    private AEDigital_SYSTContext _context;

    public LocationPublicationController(ILogger<LocationPublicationController> logger, AEDigital_SYSTContext context)
    {
      _logger = logger;
      _context = context;
    }

    [HttpGet("{id}")]
    [SwaggerOperation("GetLocationPublication")]
    [SwaggerResponse((int)HttpStatusCode.OK)]
    [SwaggerResponse((int)HttpStatusCode.NotFound)]
    public IEnumerable<VwLocationPublication> GetLocationPublication(int id)
    {
      return _context.VwLocationPublications.Where(x => x.LocationPublicationId.Equals(id));
    }

  }
}
