using System;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using Microsoft.IdentityModel.Tokens;

namespace IAMService.Services
{
    public static class Authorization
    {
        private static string secretKey = "A_VERY_LONG_AND_RANDOM_SECRET_KEY_AT_LEAST_32_BYTES_LONG";

        public static bool IsAuthorized(string token)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(secretKey);

            try
            {
                tokenHandler.ValidateToken(token, new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(key),
                    ValidateIssuer = false,
                    ValidateAudience = false
                }, out _);

                return true;
            }
            catch
            {
                return false;
            }
        }
    }
}
