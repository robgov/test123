using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using Swashbuckle.AspNetCore.Annotations;
using System.Net;
using AEDigital.Provider.API.Models;
using LinqKit;
using AEDigital.Provider.API.Controllers.Enrichers;

namespace AEDigital.Provider.API.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class ProvidersController : ControllerBase
    {
        private readonly ILogger<ProvidersController> _logger;

        public ProvidersController(ILogger<ProvidersController> logger)
        {
            _logger = logger;
        }

        ///<Summary>
        /// Gets Provider by ProviderID 
        ///</Summary>
        [HttpGet("{id}")]
        [SwaggerOperation("GetProvider")]
        [SwaggerResponse((int)HttpStatusCode.OK)]
        [SwaggerResponse((int)HttpStatusCode.NotFound)]
        public IEnumerable<ProvidersModel> Get(string id)
        {
            var jsonString = System.IO.File.ReadAllText("Data\\albertapublicproviders.json");
            var provider = JsonSerializer.Deserialize<IEnumerable<ProvidersModel>>(jsonString);

            var filteredProvider = provider.Where(provider => provider.ProviderID.Equals(id));
            return filteredProvider;
        }

        ///<Summary>
        /// Gets Provider by Provider Number 
        ///</Summary>
        [HttpGet("GetProviderByProviderNumber/{providernumber}")]
        [SwaggerOperation("GetProvider")]
        [SwaggerResponse((int)HttpStatusCode.OK)]
        [SwaggerResponse((int)HttpStatusCode.NotFound)]
        public IEnumerable<ProvidersModel> GetProvider(int providernumber)
        {
            var jsonString = System.IO.File.ReadAllText("Data\\albertapublicproviders.json");
            var provider = JsonSerializer.Deserialize<IEnumerable<ProvidersModel>>(jsonString);
            var filteredProvider = provider.Where(provider => provider.ProviderNumber.Equals(providernumber));
            return filteredProvider;
        }


        ///<Summary>
        /// Gets Providers 
        ///</Summary>
        [HttpGet()]
        [SwaggerOperation("GetProviders")]
        [SwaggerResponse((int)HttpStatusCode.OK)]
        [SwaggerResponse((int)HttpStatusCode.NotFound)]
        public IEnumerable<ProvidersModel> Get([FromQuery] ProvidersParameters providerParameters)
        {
            if (providerParameters is null)
            {
                throw new ArgumentNullException(nameof(providerParameters));
            }

            var jsonString = System.IO.File.ReadAllText("Data\\albertapublicproviders.json");
            var provider = JsonSerializer.Deserialize<IEnumerable<ProvidersModel>>(jsonString);

            // Filtering
            var predicate = PredicateBuilder.New<ProvidersModel>();
            var originalPredicate = predicate;
            predicate = ProvidersEnricher.ProviderFilter(providerParameters, predicate);
            if (predicate != originalPredicate)
            {
                provider = provider.Where(predicate).ToList();
            }

            // Pagination
            var pagedProvider = provider.Skip((providerParameters.PageNumber - 1) * providerParameters.PageSize)
                .Take(providerParameters.PageSize)
                .ToList();

            return pagedProvider;
        }


        ///<Summary>
        /// Gets ProviderExtended by ProviderID 
        ///</Summary>
        [HttpGet("GetProviderExtendedByProviderID/{providerid}")]
        [SwaggerOperation("GetProviderExtended")]
        [SwaggerResponse((int)HttpStatusCode.OK)]
        [SwaggerResponse((int)HttpStatusCode.NotFound)]
        public IEnumerable<ProvidersExtendedModel> GetProviderExtended(string providerid)
        {
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

    }
}
