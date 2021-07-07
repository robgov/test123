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
  public class LookupController : ControllerBase
  {
    private readonly ILogger<LookupController> _logger;

    private AEDigital_SYSTContext _context;
    private IMapper _mapper;

    public LookupController(ILogger<LookupController> logger, AEDigital_SYSTContext context, IMapper mapper)
    {
      _logger = logger;
      _context = context;
      _mapper = mapper;
    }

    [HttpGet("GetLookups")]
    [SwaggerOperation("GetLookups")]
    [SwaggerResponse((int)HttpStatusCode.OK)]
    [SwaggerResponse((int)HttpStatusCode.NotFound)]
    public IEnumerable<LookupDto> GetLookups([FromQuery] LookupRequest request)
    {
      var results = _context.VwPmpLookups.Where(lk => string.IsNullOrEmpty(request.Code) || lk.Code.Equals(request.Code) &&
                                               string.IsNullOrEmpty(request.Name) || lk.Name.Equals(request.Name) &&
                                               string.IsNullOrEmpty(request.Type) || lk.Type.Equals(request.Type))
        .OrderBy(l=>l.Type).ThenBy(l=>l.DisplayOrder).ToList();

      return _mapper.Map<List<VwPmpLookup>,List<LookupDto>>(results);
    }
  }
}
