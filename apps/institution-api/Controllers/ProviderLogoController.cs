using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Linq;
using Swashbuckle.AspNetCore.Annotations;
using System.Net;
using ProviderApi.Models.EntityFramework;
using ProviderApi.Models.ModelParameters;
using AutoMapper;
using ProviderApi.Models.Dto;

namespace ProviderApi.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class ProviderLogoController : ControllerBase
  {
    private readonly ILogger<ProviderLogoController> _logger;

    private AEDigital_SYSTContext _context;
    private IMapper _mapper;

    public ProviderLogoController(ILogger<ProviderLogoController> logger, AEDigital_SYSTContext context, IMapper mapper)
    {
      _logger = logger;
      _context = context;
      _mapper = mapper;
    }

    [HttpGet("GetProviderLogos")]
    [SwaggerOperation("GetProviderLogos")]
    [SwaggerResponse((int)HttpStatusCode.OK)]
    [SwaggerResponse((int)HttpStatusCode.NotFound)]
    public IEnumerable<ProviderLogoDto> GetProviderLogos()
    {
      return _mapper.Map<List<VwProviderLogo>,List<ProviderLogoDto>>(_context.VwProviderLogos.ToList());
    }
  }
}
