using MySql.Data.MySqlClient;
using IAMService.Interfaces;

namespace IAMService.Implementations
{
    public class DatabaseConnection : IDatabaseConnection
    {
        private readonly string _connectionString;

        public DatabaseConnection()
        {
            // Use your actual connection string here
            _connectionString = "Server=localhost;Database=EMS;User ID=root;Password=2324LBJKB@pourya;";
        }

        public MySqlConnection GetConnection()
        {
            return new MySqlConnection(_connectionString);
        }
    }
}
