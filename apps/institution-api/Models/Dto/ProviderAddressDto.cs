using System;

namespace ProviderApi.Models.Dto
{
  public class ProviderAddressDto
  {
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
    public bool? VerifiedFlag { get; set; }
    public int? ProviderId { get; set; }
    public DateTime? BusinessStartDate { get; set; }
    public DateTime? BusinessEndDate { get; set; }

    public double Distance { get; set; }
  }
}