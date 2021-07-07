using System;

namespace ProviderApi.Models.Dto
{
  public class ProgramCostDto
  {
    public int? ProgramId { get; set; }
    public decimal? Tuition { get; set; }
    public decimal? Books { get; set; }
    public decimal? Other { get; set; }
  }
}
