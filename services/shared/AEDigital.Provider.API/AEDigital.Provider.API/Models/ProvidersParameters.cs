using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
namespace AEDigital.Provider.API.Models
{

    public class ProvidersParameters
    {
        // Pagination
        const int maxPageSize = 60;
        public int PageNumber { get; set; } = 1;

        private int _pageSize = 30;
        public int PageSize
        {
            get => _pageSize;
            set => _pageSize = (value > maxPageSize) ? maxPageSize : value;
        }

        // Filtering
        public string JurisdictionType { get; set; }
        public string OperatingType { get; set; }
        public string ProviderType { get; set; }
        public string ProviderCategory { get; set; }
        public string City { get; set; }
        public string ProvinceCode { get; set; }
        public string CountryCode { get; set; }
        public string CountryName { get; set; }
        public string PostalCode { get; set; }

    }



}
