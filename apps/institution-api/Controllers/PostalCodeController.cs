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
  public class PostalCodeController : ControllerBase
  {
    private readonly ILogger<PostalCodeController> _logger;

    private AEDigital_SYSTContext _context;
    private readonly IMapper _mapper;

    public PostalCodeController(ILogger<PostalCodeController> logger, AEDigital_SYSTContext context, IMapper mapper)
    {
      _logger = logger;
      _context = context;
      _mapper = mapper;
    }

    [HttpGet("GetPostalCodes")]
    [SwaggerOperation("GetPostalCodes")]
    [SwaggerResponse((int)HttpStatusCode.OK)]
    [SwaggerResponse((int)HttpStatusCode.NotFound)]
    public IEnumerable<PostalCodeDto> GetPostalCodes([FromQuery] PostalCodeRequest request)
    {
      return _mapper.Map<List<VwAbpostalCode>, List<PostalCodeDto>>(_context.VwAbpostalCodes
        .Where(pc => string.IsNullOrEmpty(request.PostalCode) || pc.PostalCode == request.PostalCode)
        .OrderBy(x => x.PostalCode).ToList());
    }
  }
}
