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
  public class ProviderEmailController : ControllerBase
  {
    private readonly ILogger<ProviderEmailController> _logger;

    private AEDigital_SYSTContext _context;

    public ProviderEmailController(ILogger<ProviderEmailController> logger, AEDigital_SYSTContext context)
    {
      _logger = logger;
      _context = context;
    }

    [HttpGet("{id}")]
    [SwaggerOperation("GetProviderEmail")]
    [SwaggerResponse((int)HttpStatusCode.OK)]
    [SwaggerResponse((int)HttpStatusCode.NotFound)]
    public IEnumerable<VwProviderEmail> GetProviderEmail(int id)
    {
      return _context.VwProviderEmails.Where(x => x.ProviderEmailId.Equals(id));
    }

  }
}
