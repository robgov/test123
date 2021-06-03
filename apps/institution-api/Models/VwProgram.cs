using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

#nullable disable

namespace ProviderApi.Models
{
  public partial class VwProgram
  {
    public int ProgramId { get; set; }
    public string ProgramGovernor { get; set; }
    public int? ProgramNumber { get; set; }
    public string ProgramName { get; set; }
    public string ProgramCode { get; set; }
    public string ProgramLength { get; set; }
    public string CredentialType { get; set; }
    public string ProgramType { get; set; }
    public string ProgramStatus { get; set; }
    public int? ProviderId { get; set; }
    public DateTime? BusinessStartDate { get; set; }
    public DateTime? BusinessEndDate { get; set; }
    }
}
