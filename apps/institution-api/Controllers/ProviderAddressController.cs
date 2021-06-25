using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Linq;
using Swashbuckle.AspNetCore.Annotations;
using System.Net;
using ProviderApi.Models.EntityFramework;
using ProviderApi.Models.DtoModels;
using AutoMapper;

namespace ProviderApi.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class ProviderAddressController : ControllerBase
  {
    private readonly ILogger<ProviderAddressController> _logger;

    private AEDigital_SYSTContext _context;
    private IMapper _mapper;

    public ProviderAddressController(ILogger<ProviderAddressController> logger, AEDigital_SYSTContext context, IMapper mapper)
    {
      _logger = logger;
      _context = context;
      _mapper = mapper;
    }

    [HttpGet("GetProviderAddresses")]
    [SwaggerOperation("GetProviderAddresses")]
    [SwaggerResponse((int)HttpStatusCode.OK)]
    [SwaggerResponse((int)HttpStatusCode.NotFound)]
    public IEnumerable<ProviderAddressDto> GetProviderAddresses()
    {
      return _context.VwProviderAddresses.Select(pa=> _mapper.Map<VwProviderAddress,ProviderAddressDto>(pa));
    }
  }
}
