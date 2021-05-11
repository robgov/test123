using System;
using Xunit;

namespace AedigitalProviderApi.Controllers {
  public class ResourceControllerTests
  {
    [Fact]
    public void CanRetrievePublicResource()
    {
      var controller = new ResourceController();
      var result = controller.RetrievePublicResource();

      Assert.Equal("Welcome to public API resource!", result.Message);
    }
  }
}
