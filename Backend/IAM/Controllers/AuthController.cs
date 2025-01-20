using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MySql.Data.MySqlClient;
using IAMService.Data;
using IAMService.Services;
using IAMService.Models;
using IAMService.Interfaces;
using IAMService.DTO;
using IAMService.CRUD;
using Microsoft.AspNetCore.Authorization;

namespace IAMService.Controllers
{
    // File: Controllers/AuthController.cs
    [ApiController]
    [Route("api/auth")]
    public class AuthController : ControllerBase
    {
        private readonly AppDbContext _dbContext; // Your EF Core DbContext
        private readonly IEmailService _emailService; // Your email service interface
        private readonly IOTPCRUD _OTPCRUD;

        public AuthController(AppDbContext dbContext, IEmailService emailService, IOTPCRUD OTPCRUD)
        {
            _dbContext = dbContext;
            _emailService = emailService;
            _OTPCRUD = OTPCRUD ?? throw new ArgumentNullException(nameof(OTPCRUD));
        }

        [HttpPost("forgot-password")]
        public async Task<ActionResult<bool>> CreateOTP(OTPRequestDTO otpRequestDTO)
        {
            try
            {
                await _OTPCRUD.CreateOTP(otpRequestDTO.Email);

                return Ok(new 
                {
                    message = "Email Sent."
                });
            }
            catch (DbUpdateException)
            {
                return BadRequest(new { message = "OTP For This Email Is Still Valid"});
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.InnerException?.Message ?? ex.Message });
            }

            // Generate a 6-digit OTP
            // var otp = new Random().Next(100000, 999999).ToString();

            // // Save the OTP in the database
            // var expirationTime = DateTime.UtcNow.AddMinutes(10);

            // var otpCode = GenerateStringOTP(6);

            // var expirationTime = DateTime.UtcNow.AddMinutes(2);

            // var userOtp = new UserOTP
            // {
            //     Email = email,
            //     OTP = otpCode,
            //     ExpirationTime = expirationTime,
            //     IsUsed = false
            // };
            // _dbContext.UserOTP.Add(userOtp);
            // await _dbContext.SaveChangesAsync();

            // // Send the OTP via email (using an SMTP or third-party email service)
            // var subject = "Your OTP Code";
            // var body = $"Your OTP code is {otpCode}. It expires in 2 minutes.";
            // await _emailService.SendEmailAsync(email, subject, body); // Call the synchronous SendEmail method

            // return Ok("OTP sent to your email.");
        }

        [HttpPost("verify-otp")]
        public async Task<IActionResult> VerifyOtp(string email, string otp)
        {
            var userOtp = await _dbContext.UserOTP
                .Where(x => x.Email == email && x.OTP == otp && !x.IsUsed)
                .OrderByDescending(x => x.ExpirationTime)
                .FirstOrDefaultAsync();

            if (userOtp == null || userOtp.ExpirationTime < DateTime.UtcNow)
            {
                return BadRequest("Invalid or expired OTP.");
            }

            userOtp.IsUsed = true;
            await _dbContext.SaveChangesAsync();

            return Ok("OTP verified.");
        }

        [HttpPost("reset-password")]
        public async Task<IActionResult> ResetPassword(string email, string newPassword)
        {
            var user = await _dbContext.Users.FirstOrDefaultAsync(x => x.Email == email);
            if (user == null)
            {
                return BadRequest("User not found.");
            }

            user.PasswordHash = BCrypt.Net.BCrypt.HashPassword(newPassword);
            await _dbContext.SaveChangesAsync();

            return Ok("Password reset successfully.");
        }
    }

}
