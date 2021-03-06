using AutoMapper;
using Ng4Core1Auth.Models.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Ng4Core1Auth.ViewModels.Mappings
{
    public class ViewModelToEntityMappingProfile : Profile
    {
      public ViewModelToEntityMappingProfile()
      {
        CreateMap<RegistrationViewModel, AppUser>()
          .ForMember(au => au.UserName, map => map.MapFrom(vm => vm.Email));
      }
    }
}
