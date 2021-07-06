using System;

namespace ProviderApi.Models.Dto
{
  public class SpecializationYearlyCostDto
  {
    public int SpecializationId { get; set; }
    public int SessionOfStudyId { get; set; }
    public DateTime? SessionStartDate { get; set; }
    public DateTime? SessionEndDate { get; set; }
    public decimal? Cost { get; set; }
  }
}
