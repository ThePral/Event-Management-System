using Microsoft.EntityFrameworkCore;
using Core.Models;
using IAMService.Models;

namespace Core.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<Event> Events { get; set; }
        // public DbSet<User> Users { get; set; }
        
    }
}