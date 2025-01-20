using MySql.Data.MySqlClient;
using IAMService.Models;

namespace IAMService.Services
{
    public class DatabaseService
    {
        private readonly string _connectionString = "Server=localhost;Database=EMS;User ID=root;Password=2324LBJKB@pourya;";

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
}
