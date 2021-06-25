using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProviderApi.Models.DtoModels
{
  public class ProgramDto
  {
    public int ProgramId { get; set; }
    public string ProgramGovernor { get; set; }
    public int? ProgramNumber { get; set; }
    public string ProgramName { get; set; }
    public string ProgramCode { get; set; }
    public string ProgramLength { get; set; }
    public int? ProgramCredentialId { get; set; }
    public int? ProgramTypeId { get; set; }
    public string ProgramStatus { get; set; }
    public int? ProviderId { get; set; }
    public DateTime? BusinessStartDate { get; set; }
    public DateTime? BusinessEndDate { get; set; }

  }
}
