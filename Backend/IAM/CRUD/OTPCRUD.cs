using IAMService.Data;
using IAMService.Models;
using IAMService.Services;
using IAMService.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace IAMService.CRUD
{
    public class OTPCRUD(AppDbContext context, IEmailService emailService, IOTPExpiryService OTPExpiryService) : IOTPCRUD
    {
        private readonly AppDbContext _context = context ?? throw new ArgumentNullException(nameof(context));
        private readonly IEmailService _emailService = emailService ?? throw new ArgumentNullException(nameof(emailService));
        private readonly IOTPExpiryService _OTPExpirayService = OTPExpiryService ?? throw new ArgumentNullException(nameof(OTPExpiryService));

        public async Task<bool> ValidateCreditentials(string email, string password)
        {
            var otp = await _context.UserOTP.Where(o => o.Email == email).FirstOrDefaultAsync();

            if (otp == null || !BCrypt.Net.BCrypt.Verify(password, otp.OTP))
            {
                return false;
            }

            return true;
        }

        public string GenerateStringOTP(int length)
        {
            const string characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            var random = new Random();
            return new string(Enumerable.Repeat(characters, length)
                .Select(s => s[random.Next(s.Length)]).ToArray());
        }

        public async Task CreateOTP(string email)
        {
            var otpCode = GenerateStringOTP(6);

            var expirationTime = DateTime.UtcNow.AddMinutes(2);

            var otp = new UserOTP
            {
                Email = email,
                OTP = otpCode,
                ExpirationTime = expirationTime,
                IsUsed = false
            };

            var validationResults = new List<ValidationResult>();
            var validationContext = new ValidationContext(otp, null, null);

            if (!Validator.TryValidateObject(otp, validationContext, validationResults, true))
            {
                var errors = string.Join(", ", validationResults.Select(vr => vr.ErrorMessage));
                throw new ValidationException($"Model validation failed: {errors}");
            }

            _context.UserOTP.Add(otp);
            await _context.SaveChangesAsync();

            await _emailService.SendEmailAsync(email, "Your OTP Code", $"Your OTP is: {otpCode}");
            _ = _OTPExpirayService.CleanExpiredOTP(email);
        }
    }
}
