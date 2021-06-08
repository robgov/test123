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
  public class AlbertaPSIProviderController : ControllerBase
  {
    private readonly ILogger<AlbertaPSIProviderController> _logger;

    private AEDigital_SYSTContext _context;

    public AlbertaPSIProviderController(ILogger<AlbertaPSIProviderController> logger, AEDigital_SYSTContext context)
    {
      _logger = logger;
      _context = context;
    }

    ///<Summary>
    /// Gets an Alberta PsiProvider by ProviderId
    ///</Summary>
    [HttpGet("{id}")]
    [SwaggerOperation("GetAlbertaPsiProvider")]
    [SwaggerResponse((int)HttpStatusCode.OK)]
    [SwaggerResponse((int)HttpStatusCode.NotFound)]
    public IEnumerable<VwAlbertaPsiprovider> GetAlbertaPsiProvider(int id)
    {
      return _context.VwAlbertaPsiproviders.Where(x => x.ProviderId.Equals(id));
    }

    ///<Summary>
    /// Gets an Alberta PsiProvider by ProviderId
    ///</Summary>
    [HttpGet("")]
    [SwaggerOperation("GetAlbertaPsiProviders")]
    [SwaggerResponse((int)HttpStatusCode.OK)]
    [SwaggerResponse((int)HttpStatusCode.NotFound)]
    public IEnumerable<VwAlbertaPsiprovider> GetAlbertaPsiProviders()
    {
      return _context.VwAlbertaPsiproviders.OrderBy(x=>x.ProviderName);
    }
  }
}
