using System;
using MySql.Data.MySqlClient;

namespace IAMService.Interfaces
{
    public interface IDatabaseConnection
    {
        MySqlConnection GetConnection();
    }
}
