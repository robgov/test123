using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProviderApi.Models.ModelParameters
{
  public class InstitutionsParameters
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
    public string InstitutionName { get; set; }
    
  }
}
