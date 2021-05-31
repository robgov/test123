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
  public class LocationAddressController : ControllerBase
  {
    private readonly ILogger<LocationAddressController> _logger;

    private AEDigital_SYSTContext _context;

    public LocationAddressController(ILogger<LocationAddressController> logger, AEDigital_SYSTContext context)
    {
      _logger = logger;
      _context = context;
    }

    ///<Summary>
    /// Gets Institution Summary by InstitutionID 
    ///</Summary>
    [HttpGet("{id}")]
    [SwaggerOperation("GetLocationAddress")]
    [SwaggerResponse((int)HttpStatusCode.OK)]
    [SwaggerResponse((int)HttpStatusCode.NotFound)]
    public IEnumerable<VwLocationAddress> GetLocationAddress(int id)
    {
      return _context.VwLocationAddresses.Where(x => x.LocationId.Equals(id));
    }


    ///<Summary>
    /// Gets Institution Summary by InstitutionID 
    ///</Summary>
    [HttpGet("GetLocationAddresses")]
    [SwaggerOperation("GetLocationAddresses")]
    [SwaggerResponse((int)HttpStatusCode.OK)]
    [SwaggerResponse((int)HttpStatusCode.NotFound)]
    public IEnumerable<VwLocationAddress> GetLocationAddresses([FromQuery] PagedDataParameters locationAdressParameters)
    {
      List<VwLocationAddress> locationAddresses = _context.VwLocationAddresses.ToList();

      // Filtering
      var predicate = PredicateBuilder.New<VwLocationAddress>();
      var originalPredicate = predicate;
      predicate = LocationAddressEnricher.LocationAddressFilter(locationAdressParameters, predicate);
      if (predicate != originalPredicate)
      {
        locationAddresses = locationAddresses.Where(predicate).ToList();
      }

      // Pagination
      var pagedLocationAddresses = locationAddresses.Skip((locationAdressParameters.PageNumber - 1) * locationAdressParameters.PageSize)
          .Take(locationAdressParameters.PageSize)
          .ToList();

      return pagedLocationAddresses;
    }
  }
}
