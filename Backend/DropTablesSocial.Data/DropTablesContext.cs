using DropTablesSocial.Models;
using Microsoft.EntityFrameworkCore;

namespace DropTablesSocial.Data;

public class DropTablesContext : DbContext{
    public DropTablesContext() : base() {}
    public DropTablesContext(DbContextOptions<DropTablesContext> options) : base(options) {}
    public DbSet<User> Users { get; set; }
    public DbSet<Post> Posts { get; set; }
    public DbSet<Follow> Follows { get; set; }
    protected override void OnModelCreating(ModelBuilder modelBuilder) {

        modelBuilder.Entity<User>()
            .HasMany(p => p.Posts)
            .WithMany(l => l.Likes)
            .UsingEntity<Dictionary<string, object>>(
                "UserLikes", 
                ul => ul.HasOne<User>().WithMany().HasForeignKey("UserId").OnDelete(DeleteBehavior.Restrict),
                ul => ul.HasOne<Post>().WithMany().HasForeignKey("PostId").OnDelete(DeleteBehavior.Restrict));
        
        modelBuilder.Entity<Post>().HasOne<User>().WithMany().HasForeignKey("UserId");

        modelBuilder.Entity<Follow>().HasOne<User>().WithMany().HasForeignKey("UserId");
    }
}