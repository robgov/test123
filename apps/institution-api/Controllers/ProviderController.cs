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
  public class ProviderController : ControllerBase
  {
    private readonly ILogger<ProviderController> _logger;

    private AEDigital_SYSTContext _context;
    private IMapper _mapper;

    public ProviderController(ILogger<ProviderController> logger, AEDigital_SYSTContext context, IMapper mapper)
    {
      _logger = logger;
      _context = context;
      _mapper = mapper;
    }

    ///<Summary>
    /// Gets paged Providers
    ///</Summary>
    [HttpGet("GetProviders")]
    [SwaggerOperation("GetProviders")]
    [SwaggerResponse((int)HttpStatusCode.OK)]
    [SwaggerResponse((int)HttpStatusCode.NotFound)]
    public IEnumerable<ProviderDto> GetProviders([FromQuery] PagedDataParameters providerParameters)
    {
      List<VwProvider> providers = _context.VwProviders.ToList().OrderBy(p=>p.ProviderName).ToList();

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

      return _mapper.Map<List<VwProvider>,List<ProviderDto>>(pagedProviders);
    }
  }
}
