using AutoMapper;
using ProviderApi.Models.Dto;
using ProviderApi.Models.EntityFramework;
using System.Collections.Generic;

namespace ProviderApi.Models.Mappers
{
  public class AutoMapperProfile : Profile
  {
    public AutoMapperProfile()
    {
      CreateMap<VwAbpostalCode, PostalCodeDto>();
      CreateMap<VwAlbertaPsiprovider, ProviderDto>();
      CreateMap<VwLocation, LocationDto>();
      CreateMap<VwLocationAddress, LocationAddressDto>();
      CreateMap<VwPmpLookup, LookupDto>();
      CreateMap<VwPmpPsiprogramSummary, ProgramSummaryDto>();
      CreateMap<VwPmpPsispecializationCountByCategory, PsiSpecializationCountByCategoryDto>();
      CreateMap<VwPmpPsipspecializationYearlyCost, SpecializationYearlyCostDto>();
      CreateMap<VwProgram, ProgramDto>();
      CreateMap<VwProgramCost, ProgramCostDto>();
      CreateMap<VwProgramCredential, ProgramCredentialDto>();
      CreateMap<VwProgramType, ProgramTypeDto>();
      CreateMap<VwProvider, ProviderDto>();
      CreateMap<VwProviderAddress, ProviderAddressDto>();
      CreateMap<VwProviderLogo, ProviderLogoDto>();
      CreateMap<VwProviderWebsite, ProviderWebsiteDto>();
      CreateMap<VwSpecialization, SpecializationDto>();
      CreateMap<VwSpecializationCost, SpecializationCostDto>();
    }
  }
}
