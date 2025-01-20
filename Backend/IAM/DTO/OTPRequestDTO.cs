using System.ComponentModel.DataAnnotations;

namespace IAMService.DTO
{
    public class OTPRequestDTO
    {
        [EmailAddress]
        public required string Email { set; get; }
    }
}
