namespace ProviderApi.Models.ModelParameters
{
  public class SpecializationCostRequest
  {
    public int? ProgramId { get; set; }
    public int? SpecializationId { get; set; }

    public int? ProviderId { get; set; }
  }
}
