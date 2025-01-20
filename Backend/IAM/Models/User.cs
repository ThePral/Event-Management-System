namespace IAMService.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Email { get; set; } = string.Empty;
        public string? PasswordHash { get; set; }
        public string? Fname { get; set; }
        public string? Lname { get; set; }
        public string? PhoneNumber { get; set;}
    }
}
