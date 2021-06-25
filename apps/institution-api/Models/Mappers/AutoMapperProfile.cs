using AutoMapper;
using ProviderApi.Models.Dto;
using ProviderApi.Models.EntityFramework;

namespace ProviderApi.Models.Mappers
{
  public class AutoMapperProfile: Profile
  {
    public AutoMapperProfile()
    {
      CreateMap<VwPmpPsiprogramSummary, ProgramSummaryDto>();
    }
  }
}
