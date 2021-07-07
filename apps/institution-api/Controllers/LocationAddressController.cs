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
using ProviderApi.Models.Dto;
using AutoMapper;

namespace ProviderApi.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class LocationAddressController : ControllerBase
  {
    private readonly ILogger<LocationAddressController> _logger;

    private AEDigital_SYSTContext _context;
    private IMapper _mapper;

    public LocationAddressController(ILogger<LocationAddressController> logger, AEDigital_SYSTContext context, IMapper mapper)
    {
      _logger = logger;
      _context = context;
      _mapper = mapper;
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

      return _mapper.Map<List<VwLocationAddress>,List<LocationAddressDto>>(pagedLocationAddresses);
    }
  }
}
