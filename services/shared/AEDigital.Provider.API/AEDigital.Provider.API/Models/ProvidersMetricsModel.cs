using System;

namespace AEDigital.Provider.API.Models
{
    public class ProvidersMetricsModel
    {

        public string ProviderMetricsID { get; set; }
        public string ProviderID { get; set; }

        public string GraduationRate { get; set; }
        public string EmploymentRate { get; set; }
        public string MedianSalary { get; set; }
        public string ReturningStudentRate { get; set; }
        public string CSLLoanRepaymentRate { get; set; }
        public string ASLLoanRepaymentRate { get; set; }
        public string AverageDebtPostGraduation { get; set; }
        public string NumberofStudentsEnrolled { get; set; }

        public string CreateDt { get; set; }
        public string CreateUsr { get; set; }
        public string DriverDt { get; set; }

    }
}
