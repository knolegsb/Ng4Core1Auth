using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Ng4Core1Auth.Auth
{
    public interface IJwtFactory
    {
      Task<string> GenerateEncodedToken(string userName, ClaimsIdentity identity);
      ClaimsIdentity GenerateClaimsIdentity(string userName, string id);
    }
}
