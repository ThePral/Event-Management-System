namespace IAMService.Models
{
    public class UserOTP
    {
        public int Id { get; set; }
        public string Email { get; set; } = null!;
        public string OTP { get; set; } = null!;
        public DateTime ExpirationTime { get; set; }
        public bool IsUsed { get; set; }
    }
}
