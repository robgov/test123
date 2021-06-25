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
      //CreateMap<VwAlbertaPsiprovider, ProgramSummaryDto>();
      //CreateMap<VwProviderAddress, ProgramSummaryDto>();
      //CreateMap<VwAbpostalCode, ProgramSummaryDto>();
      //CreateMap<VwSpecialization, ProgramSummaryDto>();
      //CreateMap<VwProgramCredential, ProgramSummaryDto>();
      //CreateMap<VwProgramType, ProgramSummaryDto>();
      //CreateMap<VwProviderWebsite, ProgramSummaryDto>();
    }
  }
}
