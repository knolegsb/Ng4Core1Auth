using FluentValidation.Attributes;
using Ng4Core1Auth.ViewModels.Validations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Ng4Core1Auth.ViewModels
{
    [Validator(typeof(CredentialsViewModelValidator))]
    public class CredentialsViewModel
    {
      public string UserName { get; set; }
      public string Password { get; set; }
    }
}
