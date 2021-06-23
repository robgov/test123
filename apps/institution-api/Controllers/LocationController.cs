using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Linq;
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
  public class LocationController : ControllerBase
  {
    private readonly ILogger<LocationController> _logger;

    private AEDigital_SYSTContext _context;

    public LocationController(ILogger<LocationController> logger, AEDigital_SYSTContext context)
    {
      _logger = logger;
      _context = context;
    }

    ///<Summary>
    /// Gets Institution Summary by InstitutionID 
    ///</Summary>
    [HttpGet("{id}")]
    [SwaggerOperation("GetLocation")]
    [SwaggerResponse((int)HttpStatusCode.OK)]
    [SwaggerResponse((int)HttpStatusCode.NotFound)]
    public IEnumerable<VwLocation> GetLocation(int id)
    {
      return _context.VwLocations.Where(x => x.LocationId.Equals(id));
    }


    ///<Summary>
    /// Gets Institution Summary by InstitutionID 
    ///</Summary>
    [HttpGet("GetLocations")]
    [SwaggerOperation("GetLocations")]
    [SwaggerResponse((int)HttpStatusCode.OK)]
    [SwaggerResponse((int)HttpStatusCode.NotFound)]
    public IEnumerable<VwLocation> GetLocations([FromQuery] PagedDataParameters locationParameters)
    {
      List<VwLocation> locations = _context.VwLocations.ToList();

      // Filtering
      var predicate = PredicateBuilder.New<VwLocation>();
      var originalPredicate = predicate;
      predicate = LocationEnricher.LocationFilter(locationParameters, predicate);
      if (predicate != originalPredicate)
      {
        locations = locations.Where(predicate).ToList();
      }

      // Pagination
      var pagedLocations = locations.Skip((locationParameters.PageNumber - 1) * locationParameters.PageSize)
          .Take(locationParameters.PageSize)
          .ToList();

      return pagedLocations;
    }
  }
}
