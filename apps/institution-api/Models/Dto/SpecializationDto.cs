using System;

namespace ProviderApi.Models.Dto
{
  public class SpecializationDto
  {
    public int SpecializationId { get; set; }
    public int? SpecializationNumber { get; set; }
    public string SpecializationName { get; set; }
    public string SpecializationCode { get; set; }
    public string SpecializationStatus { get; set; }
    public int CipCodeId { get; set; }
    public string CipSubSeriesCode { get; set; }
    public string CipSubSeries { get; set; }
    public string AdministrativeUnitCode { get; set; }
    public string AdministrativeUnit { get; set; }
    public string EntranceRequirementCode { get; set; }
    public string EntranceRequirement { get; set; }
    public string UnitOfLoad { get; set; }
    public string PrimaryFundingCode { get; set; }
    public int? ProgramId { get; set; }
    public DateTime? BusinessStartDate { get; set; }
    public DateTime? BusinessEndDate { get; set; }
  }
}
