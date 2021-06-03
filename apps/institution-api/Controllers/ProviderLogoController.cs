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
  public class ProviderLogoController : ControllerBase
  {
    private readonly ILogger<ProviderLogoController> _logger;

    private AEDigital_SYSTContext _context;

    public ProviderLogoController(ILogger<ProviderLogoController> logger, AEDigital_SYSTContext context)
    {
      _logger = logger;
      _context = context;
    }

    [HttpGet("")]
    [SwaggerOperation("GetProviderLogoByProviderId")]
    [SwaggerResponse((int)HttpStatusCode.OK)]
    [SwaggerResponse((int)HttpStatusCode.NotFound)]
    public VwProviderLogo GetProviderLogoByProviderId([FromQuery] ProviderLogoRequest request)
    {
      return _context.VwProviderLogos.FirstOrDefault(x => x.ProviderId.Equals(request.ProviderId));
    }
  }
}
