using System;

namespace ProviderApi.Models.Dto
{
  public class ProviderWebsiteDto
  {
    public int ProviderWebsiteId { get; set; }
    public string WebsiteUsage { get; set; }
    public int? ListSequence { get; set; }
    public string WebsiteUrl { get; set; }
    public int? ProviderId { get; set; }
    public DateTime? BusinessStartDate { get; set; }
    public DateTime? BusinessEndDate { get; set; }
  }
}
