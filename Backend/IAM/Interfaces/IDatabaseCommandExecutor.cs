using System;
using MySql.Data.MySqlClient;

namespace IAMService.Interfaces
{
    public interface IDatabaseCommandExecutor
    {
        int ExecuteNonQuery(MySqlCommand command);
        object ExecuteScalar(MySqlCommand command);
        MySqlDataReader ExecuteReader(MySqlCommand command);
    }
}
