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
  public class ProviderWebsiteController : ControllerBase
  {
    private readonly ILogger<ProviderWebsiteController> _logger;

    private AEDigital_SYSTContext _context;
    private IMapper _mapper;

    public ProviderWebsiteController(ILogger<ProviderWebsiteController> logger, AEDigital_SYSTContext context, IMapper mapper)
    {
      _logger = logger;
      _context = context;
      _mapper = mapper;
    }

    [HttpGet("GetProviderWebsites")]
    [SwaggerOperation("GetProviderWebsites")]
    [SwaggerResponse((int)HttpStatusCode.OK)]
    [SwaggerResponse((int)HttpStatusCode.NotFound)]
    public IEnumerable<ProviderWebsiteDto> GetProviderWebsites([FromQuery] ProviderWebsiteRequest request)
    {
      return _mapper.Map<List<VwProviderWebsite>,List<ProviderWebsiteDto>>(_context.VwProviderWebsites
        .Where(pc => !request.ProviderId.HasValue || pc.ProviderId.Equals(request.ProviderId)).ToList());
    }
  }
}
