using System;

namespace AEDigital.Provider.API.Models
{
    public class ProgramsModel
    {

        public string ProgramID { get; set; }
        public string ProviderID { get; set; }
        public string PRSProgramID { get; set; }
        public string FederalProgramID { get; set; }
        public string ProvincialProgramID { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public string ProgramLength { get; set; }
        public string Outcome { get; set; }
        public string DisplayableOutcome { get; set; }
        public string CredentialCode { get; set; }
        public string DisplayInLearnerEntry { get; set; }
        public string NumberOfWeeks { get; set; }
        public string NumberOfStandardWeeks { get; set; }
        public string ProcessID { get; set; }

    }
}
