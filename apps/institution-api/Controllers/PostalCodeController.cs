using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Linq;
using Swashbuckle.AspNetCore.Annotations;
using System.Net;
using ProviderApi.Models.EntityFramework;
using ProviderApi.Models.ModelParameters;

namespace ProviderApi.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class PostalCodeController : ControllerBase
  {
    private readonly ILogger<PostalCodeController> _logger;

    private AEDigital_SYSTContext _context;

    public PostalCodeController(ILogger<PostalCodeController> logger, AEDigital_SYSTContext context)
    {
      _logger = logger;
      _context = context;
    }

    ///<Summary>
    /// Gets Postal Codes
    ///</Summary>
    [HttpGet("GetPostalCodes")]
    [SwaggerOperation("GetPostalCodes")]
    [SwaggerResponse((int)HttpStatusCode.OK)]
    [SwaggerResponse((int)HttpStatusCode.NotFound)]
    public IEnumerable<VwAbpostalCode> GetPostalCodes([FromQuery] PostalCodeRequest request)
    {
      return _context.VwAbpostalCodes.Where(pc=> string.IsNullOrEmpty(request.PostalCode) || pc.PostalCode==request.PostalCode).OrderBy(x=>x.PostalCode);
    }
  }
}
