using FluentValidation.Attributes;
using Ng4Core1Auth.ViewModels.Validations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Ng4Core1Auth.ViewModels
{
    [Validator(typeof(RegistrationViewModelValidator))]
    public class RegistrationViewModel
    {
      public string Email { get; set; }
      public string Password { get; set; }
      public string FirstName { get; set; }
      public string LastName { get; set; }
      public string Location { get; set; }
    }
}
