using MySql.Data.MySqlClient;
using IAMService.Interfaces;

namespace IAMService.Services
{
    public class UserService
    {
        private readonly IDatabaseConnection _databaseConnection;
        private readonly IDatabaseCommandExecutor _commandExecutor;

        public UserService(IDatabaseConnection databaseConnection, IDatabaseCommandExecutor commandExecutor)
        {
            _databaseConnection = databaseConnection;
            _commandExecutor = commandExecutor;
        }

        public bool IsEmailExists(string email)
        {
            using var connection = _databaseConnection.GetConnection();
            using var command = new MySqlCommand("SELECT COUNT(*) FROM user WHERE email = @Email", connection);
            command.Parameters.AddWithValue("@Email", email);
            connection.Open();

            int count = Convert.ToInt32(_commandExecutor.ExecuteScalar(command));
            return count > 0;
        }

        public bool CreateUser(string fname, string lname, string email, string hashedPassword, string PhoneNumber)
        {
            using var connection = _databaseConnection.GetConnection();
            using var command = new MySqlCommand(
                "INSERT INTO user (fname, lname, email, passwordhash, PhoneNumber) VALUES (@Fname, @Lname, @Email, @PasswordHash, @PhoneNumber)", connection);
            command.Parameters.AddWithValue("@Fname", fname);
            command.Parameters.AddWithValue("@Lname", lname);
            command.Parameters.AddWithValue("@Email", email);
            command.Parameters.AddWithValue("@PasswordHash", hashedPassword);
            command.Parameters.AddWithValue("@PhoneNumber", PhoneNumber);
            connection.Open();

            int result = _commandExecutor.ExecuteNonQuery(command);
            return result > 0;
        }
    }
}
