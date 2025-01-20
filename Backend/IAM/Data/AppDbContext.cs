using Microsoft.EntityFrameworkCore;
using IAMService.Models;

namespace IAMService.Data
{
    public class AppDbContext(DbContextOptions<AppDbContext> options) : DbContext(options)
    {
        public DbSet<User> Users { get; set; } = null!;
        public DbSet<UserOTP> UserOTP { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().ToTable("User");
            modelBuilder.Entity<UserOTP>().ToTable("UserOTP");
        }
    }
}
