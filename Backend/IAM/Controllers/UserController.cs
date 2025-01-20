using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using IAMService.Services;
using IAMService.Models;
using Microsoft.AspNetCore.Authorization;

namespace IAMService.Controllers
{
    [ApiController]
    [Route("api/users")]
    public class UserController : ControllerBase
    {
        private readonly string _connectionString = "Server=localhost;Database=EMS;User ID=root;Password=2324LBJKB@pourya;";
        private readonly AuthService _authService;
        private readonly DatabaseService _databaseService;
        private readonly UserService _userService;

        public UserController(AuthService authService, DatabaseService databaseService, UserService userService)
        {
            _authService = authService;
            _databaseService = databaseService;
            _userService = userService;
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginRequest request)
        {
            if (request == null || string.IsNullOrWhiteSpace(request.Email) || string.IsNullOrWhiteSpace(request.Password))
            {
                return BadRequest(new { message = "Email and password are required." });
            }

            var user = _databaseService.GetUserByEmail(request.Email);

            if (user == null)
            {
                return Unauthorized(new { message = "Invalid credentials." });
            }

            if (string.IsNullOrEmpty(user.PasswordHash) || !_authService.VerifyPassword(request.Password, user.PasswordHash))
            {
                return Unauthorized(new { message = "Invalid credentials." });
            }

            var token = _authService.GenerateJwtToken(user);

            return Ok(new { token });
        }

        [HttpPost("create")]
        // [Authorize]
        public IActionResult CreateUser([FromBody] CreateUserRequest request)
        {
            if (request == null || string.IsNullOrEmpty(request.Fname) || string.IsNullOrEmpty(request.Lname) || string.IsNullOrEmpty(request.Email) || string.IsNullOrEmpty(request.Password) || string.IsNullOrEmpty(request.PhoneNumber))
            {
                return BadRequest("All fields (fname, lname, email, password, PhoneNumber) are required.");
            }

            var hashedPassword = BCrypt.Net.BCrypt.HashPassword(request.Password);

            bool isUserCreated = _userService.CreateUser(request.Fname, request.Lname, request.Email, hashedPassword, request.PhoneNumber);

            if (isUserCreated)
            {
                return Ok("User created successfully.");
            }

            return StatusCode(500, "Failed to create user.");
        }

        [HttpGet("read{email}")]
        [Authorize]
        public User? GetUserByEmail(string email)
        {
            using (var connection = new MySqlConnection(_connectionString))
            {
                connection.Open();
                var command = new MySqlCommand("SELECT * FROM user WHERE email = @Email", connection);
                command.Parameters.AddWithValue("@Email", email);
                var reader = command.ExecuteReader();

                if (reader.Read())
                {
                    return new User
                    {
                        Id = reader.GetInt32("Id"),
                        Email = reader.GetString("Email"),
                        PasswordHash = reader.GetString("PasswordHash"),
                        Fname = reader.GetString("Fname"),
                        Lname = reader.GetString("Lname"),
                        PhoneNumber = reader.GetString("PhoneNumber")
                    };
                }
                return null;
            }
        }
    }

    public class LoginRequest
    {
        public string? Email { get; set; }
        public string? Password { get; set; }
    }
    public class CreateUserRequest
    {
        public string? Fname { get; set; }
        public string? Lname { get; set; }
        public string? Email { get; set; }
        public string? Password { get; set; }
        public string? PhoneNumber{ get; set; }
    }
}

