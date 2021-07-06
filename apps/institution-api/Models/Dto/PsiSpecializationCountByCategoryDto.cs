namespace ProviderApi.Models.Dto
{
  public class PsiSpecializationCountByCategoryDto
  {
    public string CipSubSeriesCode { get; set; }
    public string CipSubSeries { get; set; }
    public int? ProgramCount { get; set; }
    public int? SpecailizationCount { get; set; }
    public int? SessionCount { get; set; }
    public int? ProviderCount { get; set; }
  }
}
