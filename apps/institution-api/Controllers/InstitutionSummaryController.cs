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
  public class InstitutionSummaryController : ControllerBase
  {
    private readonly ILogger<InstitutionSummaryController> _logger;

    private AEDMContext _context;

    public InstitutionSummaryController(ILogger<InstitutionSummaryController> logger, AEDMContext context)
    {
      _logger = logger;
      _context = context;
    }

    ///<Summary>
    /// Gets Institution Summary by InstitutionID 
    ///</Summary>
    [HttpGet("{id}")]
    [SwaggerOperation("GetInstitution")]
    [SwaggerResponse((int)HttpStatusCode.OK)]
    [SwaggerResponse((int)HttpStatusCode.NotFound)]
    public IEnumerable<VwInstitutionSummary> GetInstitutionSummary(int id)
    {
      return _context.VwInstitutionSummaries.Where(inst => inst.InstitutionId.Equals(id));
    }

    ///<Summary>
    /// Gets Institution Summary by Provincial Institution Number 
    ///</Summary>
    [HttpGet("GetInstitutionByProvincialInstitutionNumber/{pin}")]
    [SwaggerOperation("GetInstitution")]
    [SwaggerResponse((int)HttpStatusCode.OK)]
    [SwaggerResponse((int)HttpStatusCode.NotFound)]
    public IEnumerable<VwInstitutionSummary> GetInstitutionSummaryByProvincialInstitutionNumber(int pin)
    {
      return _context.VwInstitutionSummaries.Where(inst => inst.ProvincialInstitutionNumber.Equals(pin));
    }

    ///<Summary>
    /// Gets Institution Summary by InstitutionID 
    ///</Summary>
    [HttpGet("GetInstitutions")]
    [SwaggerOperation("GetInstitutions")]
    [SwaggerResponse((int)HttpStatusCode.OK)]
    [SwaggerResponse((int)HttpStatusCode.NotFound)]
    public IEnumerable<VwInstitutionSummary> GetInstitutionSummarys([FromQuery] InstitutionsParameters institutionSummaryParameters)
    {
      List<VwInstitutionSummary> institutionSummaries = _context.VwInstitutionSummaries.ToList();

      // Filtering
      var predicate = PredicateBuilder.New<VwInstitutionSummary>();
      var originalPredicate = predicate;
      predicate = InstitutionSummaryEnricher.InstitutionFilter(institutionSummaryParameters, predicate);
      if (predicate != originalPredicate)
      {
        institutionSummaries = institutionSummaries.Where(predicate).ToList();
      }

      // Pagination
      var pagedInstitutions = institutionSummaries.Skip((institutionSummaryParameters.PageNumber - 1) * institutionSummaryParameters.PageSize)
          .Take(institutionSummaryParameters.PageSize)
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
