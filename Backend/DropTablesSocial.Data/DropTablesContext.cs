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
            .HasMany(u => u.Likes)
            .WithMany(p => p.Likes)
            .UsingEntity<Dictionary<string, object>>(
                "UserLikes",
                ul => ul.HasOne<Post>().WithMany().HasForeignKey("PostId").OnDelete(DeleteBehavior.Restrict),
                ul => ul.HasOne<User>().WithMany().HasForeignKey("UserId").OnDelete(DeleteBehavior.Restrict));
        
        modelBuilder.Entity<Post>()
            .HasOne(p => p.User)
            .WithMany(u => u.Posts)
            .HasForeignKey(p => p.UserId)
            .OnDelete(DeleteBehavior.Cascade);

        modelBuilder.Entity<Follow>()
            .HasOne(f => f.Follower)
            .WithMany(u => u.Following)
            .HasForeignKey(f => f.FollowerId)
            .OnDelete(DeleteBehavior.Restrict);

        modelBuilder.Entity<Follow>()
            .HasOne(f => f.User)
            .WithMany(u => u.Followers)
            .HasForeignKey(f => f.UserId)
            .OnDelete(DeleteBehavior.Restrict);
    }
}