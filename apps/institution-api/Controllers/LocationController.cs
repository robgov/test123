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
using AutoMapper;
using ProviderApi.Models.Dto;

namespace ProviderApi.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class LocationController : ControllerBase
  {
    private readonly ILogger<LocationController> _logger;

    private AEDigital_SYSTContext _context;
    private IMapper _mapper;

    public LocationController(ILogger<LocationController> logger, AEDigital_SYSTContext context, IMapper mapper)
    {
      _logger = logger;
      _context = context;
      _mapper = mapper;
    }

    [HttpGet("GetLocations")]
    [SwaggerOperation("GetLocations")]
    [SwaggerResponse((int)HttpStatusCode.OK)]
    [SwaggerResponse((int)HttpStatusCode.NotFound)]
    public IEnumerable<LocationDto> GetLocations([FromQuery] PagedDataParameters locationParameters)
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

      return _mapper.Map<List<VwLocation>,List<LocationDto>>(pagedLocations);
    }

    [HttpGet("GetLocationAddresses")]
    [SwaggerOperation("GetLocationAddresses")]
    [SwaggerResponse((int)HttpStatusCode.OK)]
    [SwaggerResponse((int)HttpStatusCode.NotFound)]
    public IEnumerable<LocationAddressDto> GetLocationAddresses([FromQuery] PagedDataParameters locationAdressParameters)
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

      return _mapper.Map<List<VwLocationAddress>, List<LocationAddressDto>>(pagedLocationAddresses);
    }
  }
}
