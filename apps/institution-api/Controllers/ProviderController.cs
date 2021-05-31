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
  public class ProviderController : ControllerBase
  {
    private readonly ILogger<ProviderController> _logger;

    private AEDigital_SYSTContext _context;

    public ProviderController(ILogger<ProviderController> logger, AEDigital_SYSTContext context)
    {
      _logger = logger;
      _context = context;
    }

    [HttpGet("{id}")]
    [SwaggerOperation("GetProvider")]
    [SwaggerResponse((int)HttpStatusCode.OK)]
    [SwaggerResponse((int)HttpStatusCode.NotFound)]
    public IEnumerable<VwProvider> GetProvider(int id)
    {
      return _context.VwProviders.Where(x => x.ProviderId.Equals(id));
    }

    ///<Summary>
    /// Gets paged Providers
    ///</Summary>
    [HttpGet("GetProviders")]
    [SwaggerOperation("GetProviders")]
    [SwaggerResponse((int)HttpStatusCode.OK)]
    [SwaggerResponse((int)HttpStatusCode.NotFound)]
    public IEnumerable<VwProvider> GetProviders([FromQuery] PagedDataParameters providerParameters)
    {
      List<VwProvider> providers = _context.VwProviders.ToList();

      // Filtering
      var predicate = PredicateBuilder.New<VwProvider>();
      var originalPredicate = predicate;
      predicate = ProviderEnricher.ProviderFilter(providerParameters, predicate);
      if (predicate != originalPredicate)
      {
        providers = providers.Where(predicate).ToList();
      }

      // Pagination
      var pagedProviders = providers.Skip((providerParameters.PageNumber - 1) * providerParameters.PageSize)
          .Take(providerParameters.PageSize)
          .ToList();

      return pagedProviders;
    }
  }
}
