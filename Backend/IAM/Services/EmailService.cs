using System;
using System.Net;
// using IAMService.Interfaces;
using MimeKit;
// using MailKit.Net.Smtp;
using System.Net.Mail;
using IAMService.Interfaces;

namespace IAMService.Services
{
    public class EmailService(IConfiguration configuration) : IEmailService
    {
        private readonly IConfiguration _configuration = configuration;

        public async Task<bool> SendEmailAsync(string to, string subject, string body)
        {
            try
            {
                var smtpServer = _configuration["EmailInfo:SmtpServer"];
                var smtpPort = int.Parse(_configuration["EmailInfo:SmtpPort"]!);
                var emailAddress = _configuration["EmailInfo:EmailAddress"];
                var emailPassword = _configuration["EmailInfo:Password"];

                using var smtpClient = new SmtpClient(smtpServer)
                {
                    Port = smtpPort,
                    Credentials = new NetworkCredential(emailAddress, emailPassword),
                    EnableSsl = true,
                };

                var mailMessage = new MailMessage
                {
                    From = new MailAddress(emailAddress!),
                    Subject = subject,
                    Body = body,
                    IsBodyHtml = false,
                };

                mailMessage.To.Add(to);

                await smtpClient.SendMailAsync(mailMessage);
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
    }
}
