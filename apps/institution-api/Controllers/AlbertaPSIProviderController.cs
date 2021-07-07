using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Linq;
using Swashbuckle.AspNetCore.Annotations;
using System.Net;
using ProviderApi.Models.EntityFramework;
using ProviderApi.Models.Dto;
using AutoMapper;

namespace ProviderApi.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class AlbertaPSIProviderController : ControllerBase
  {
    private readonly ILogger<AlbertaPSIProviderController> _logger;

    private AEDigital_SYSTContext _context;
    private IMapper _mapper;

    public AlbertaPSIProviderController(ILogger<AlbertaPSIProviderController> logger, AEDigital_SYSTContext context, IMapper mapper)
    {
      _logger = logger;
      _context = context;
      _mapper = mapper;
    }

    [HttpGet("GetAlbertaPsiProviders")]
    [SwaggerOperation("GetAlbertaPsiProviders")]
    [SwaggerResponse((int)HttpStatusCode.OK)]
    [SwaggerResponse((int)HttpStatusCode.NotFound)]
    public IEnumerable<ProviderDto> GetAlbertaPsiProviders()
    {
      return _mapper.Map<List<VwAlbertaPsiprovider>,List<ProviderDto>>(_context.VwAlbertaPsiproviders.ToList()).OrderBy(x=>x.ProviderName);
    }
  }
}
