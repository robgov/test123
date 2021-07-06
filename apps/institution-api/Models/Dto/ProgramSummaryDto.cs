namespace ProviderApi.Models.Dto
{
  public class ProgramSummaryDto
  {
    public int ProviderId { get; set; }
    public string ProviderGovernor { get; set; }
    public string OperatingName { get; set; }
    public string ProviderName { get; set; }
    public string ProviderLegalName { get; set; }
    public int? ProviderTypeId { get; set; }
    public string ProviderType { get; set; }
    public string OperatingType { get; set; }
    public string HomeJurisdiction { get; set; }
    public int? ProviderNumber { get; set; }
    public string ProviderStatus { get; set; }
    public string ProviderPspstatus { get; set; }
    public string ProviderPspcode { get; set; }
    public string ProviderPspcategory { get; set; }
    public string ProviderPspshortName { get; set; }
    public int? ProvincialProviderNumber { get; set; }
    public string FederalProviderNumber { get; set; }
    public int ProgramId { get; set; }
    public string ProgramGovernor { get; set; }
    public int? ProgramNumber { get; set; }
    public string ProgramName { get; set; }
    public string ProgramCode { get; set; }
    public string ProgramLength { get; set; }
    public int? ProgramCredentialId { get; set; }
    public int? ProgramTypeId { get; set; }
    public string ProgramStatus { get; set; }
    public int ProviderAddressId { get; set; }
    public string AddressUsage { get; set; }
    public string AddressType { get; set; }
    public int? ListSequence { get; set; }
    public string AddressLine1 { get; set; }
    public string AddressLine2 { get; set; }
    public string AddressLine3 { get; set; }
    public string AddressLine4 { get; set; }
    public string City { get; set; }
    public string ProvinceState { get; set; }
    public string PostalZipCode { get; set; }
    public string Country { get; set; }
    public string PostalCode { get; set; }
    public decimal? Latitude { get; set; }
    public decimal? Longitude { get; set; }
    public string ProgramType { get; set; }
    public int ProviderWebsiteId { get; set; }
    public string WebsiteUrl { get; set; }
    public string ProgramCredential { get; set; }

    public double ProviderDistance { get; set; }

    public double MedianIncome { get; set; }

    public double EmploymentRate { get; set; }

    public double EstimatedTotalCost { get; set; }

    public double FirstYearCost { get; set; }
  }
}
