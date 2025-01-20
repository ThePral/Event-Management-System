namespace IAMService.Services
{
    public interface IOTPExpiryService
    {
        Task CleanExpiredOTP(string email);
    }
}
