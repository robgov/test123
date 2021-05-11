using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace AedigitalProviderApi.Controllers
{
  public class ResourceResponse {
    public string Message { get; internal set; }
  }

  [ApiController]
  [Route("/aedigital.provider.api/v1")]
  public class ResourceController: ControllerBase {
    [HttpGet]
    [Route("public")]
    public ResourceResponse RetrievePublicResource() {
      return new ResourceResponse(){ 
        Message = "Welcome to public API resource!" 
      };
    }

    [HttpGet]
    [Authorize]
    [Route("private")]
    public ResourceResponse RetrievePrivateResource() {
      var name= this.User.FindFirst(c => c.Type == "name")?.Value ?? 
        this.User.FindFirst(c => c.Type == "preferred_username")?.Value;

      return new ResourceResponse(){ 
        Message = $"Welcome to private API resource! {name}" 
      };
    }
  }
}
