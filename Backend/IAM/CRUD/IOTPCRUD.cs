namespace IAMService.CRUD
{
    public interface IOTPCRUD
    {
        Task<bool> ValidateCreditentials(string email, string password);
        Task CreateOTP(string email);
    }
}
