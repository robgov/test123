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
  public class InstitutionsController : ControllerBase
  {
    private readonly ILogger<InstitutionsController> _logger;

    private AEDMContext _context;

    public InstitutionsController(ILogger<InstitutionsController> logger, AEDMContext context)
    {
      _logger = logger;
      _context = context;
    }

    ///<Summary>
    /// Gets Institution by InstitutionID 
    ///</Summary>
    [HttpGet("{id}")]
    [SwaggerOperation("GetInstitution")]
    [SwaggerResponse((int)HttpStatusCode.OK)]
    [SwaggerResponse((int)HttpStatusCode.NotFound)]
    public IEnumerable<VwInstitutionSummary> Get(int id)
    {
      return _context.VwInstitutionSummaries.Where(inst => inst.InstitutionId.Equals(id));
    }

    ///<Summary>
    /// Gets Institution by Provincial Institution Number 
    ///</Summary>
    [HttpGet("GetInstitutionByProvincialInstitutionNumber/{pin}")]
    [SwaggerOperation("GetInstitution")]
    [SwaggerResponse((int)HttpStatusCode.OK)]
    [SwaggerResponse((int)HttpStatusCode.NotFound)]
    public IEnumerable<VwInstitutionSummary> GetInstitution(int pin)
    {
      return _context.VwInstitutionSummaries.Where(inst => inst.ProvincialInstitutionNumber.Equals(pin));
    }

    ///<Summary>
    /// Gets Institution by InstitutionID 
    ///</Summary>
    [HttpGet()]
    [SwaggerOperation("GetInstitutions")]
    [SwaggerResponse((int)HttpStatusCode.OK)]
    [SwaggerResponse((int)HttpStatusCode.NotFound)]
    public IEnumerable<VwInstitutionSummary> Get([FromQuery] InstitutionsParameters institutionsParameters)
    {
      List<VwInstitutionSummary> institutions = _context.VwInstitutionSummaries.ToList();

      // Filtering
      var predicate = PredicateBuilder.New<VwInstitutionSummary>();
      var originalPredicate = predicate;
      predicate = InstitutionsEnricher.InstitutionFilter(institutionsParameters, predicate);
      if (predicate != originalPredicate)
      {
        institutions = institutions.Where(predicate).ToList();
      }

      // Pagination
      var pagedInstitutions = institutions.Skip((institutionsParameters.PageNumber - 1) * institutionsParameters.PageSize)
          .Take(institutionsParameters.PageSize)
          .ToList();

      return pagedInstitutions;
    }

    #region "Not implemented yet"
    /*
    ///<Summary>
    /// Gets ProviderExtended by ProviderID 
    ///</Summary>
    [HttpGet("GetProviderExtendedByProviderID/{providerid}")]
    [SwaggerOperation("GetProviderExtended")]
    [SwaggerResponse((int)HttpStatusCode.OK)]
    [SwaggerResponse((int)HttpStatusCode.NotFound)]
    public IEnumerable<ProvidersExtendedModel> GetProviderExtended(string providerid)
    {
      throw new NotImplementedException();
      var jsonString = System.IO.File.ReadAllText("Data\\albertapublicprovidersextended.json");
      var providerextended = JsonSerializer.Deserialize<IEnumerable<ProvidersExtendedModel>>(jsonString);
      var filteredProviderExtended = providerextended.Where(providerextended => providerextended.ProviderID.Equals(providerid));
      return filteredProviderExtended;
    }


    ///<Summary>
    /// Gets ProviderMetrics by ProviderID 
    ///</Summary>
    [HttpGet("GetProviderMetricsByProviderID/{providerid}")]
    [SwaggerOperation("GetProviderMetrics")]
    [SwaggerResponse((int)HttpStatusCode.OK)]
    [SwaggerResponse((int)HttpStatusCode.NotFound)]
    public IEnumerable<ProvidersMetricsModel> GetProviderMetrics(string providerid)
    {
      var jsonString = System.IO.File.ReadAllText("Data\\albertapublicprovidersmetrics.json");
      var providermetrics = JsonSerializer.Deserialize<IEnumerable<ProvidersMetricsModel>>(jsonString);
      var filteredProviderMetrics = providermetrics.Where(providermetrics => providermetrics.ProviderID.Equals(providerid));
      return filteredProviderMetrics;
    }
    */
    #endregion
  }
}
