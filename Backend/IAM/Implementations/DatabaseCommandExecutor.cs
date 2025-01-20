using System;
using IAMService.Interfaces;
using MySql.Data.MySqlClient;

namespace IAMService.Implementations
{
    public class DatabaseCommandExecutor : IDatabaseCommandExecutor
    {
        public int ExecuteNonQuery(MySqlCommand command)
        {
            return command.ExecuteNonQuery();
        }

        public object ExecuteScalar(MySqlCommand command)
        {
            return command.ExecuteScalar();
        }

        public MySqlDataReader ExecuteReader(MySqlCommand command)
        {
            return command.ExecuteReader();
        }
    }
}
