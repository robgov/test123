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
  public class LocationPhoneController : ControllerBase
  {
    private readonly ILogger<LocationPhoneController> _logger;

    private AEDigital_SYSTContext _context;

    public LocationPhoneController(ILogger<LocationPhoneController> logger, AEDigital_SYSTContext context)
    {
      _logger = logger;
      _context = context;
    }

    [HttpGet("{id}")]
    [SwaggerOperation("GetLocationPhone")]
    [SwaggerResponse((int)HttpStatusCode.OK)]
    [SwaggerResponse((int)HttpStatusCode.NotFound)]
    public IEnumerable<VwLocationPhone> GetLocationPhone(int id)
    {
      return _context.VwLocationPhones.Where(x => x.LocationPhoneId.Equals(id));
    }

  }
}
