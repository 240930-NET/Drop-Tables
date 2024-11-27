using DropTablesSocial.Models;
using Microsoft.EntityFrameworkCore;

namespace DropTablesSocial.Data;

public class DropTablesContext : DbContext
{
    public DropTablesContext() : base() { }
    public DropTablesContext(DbContextOptions<DropTablesContext> options) : base(options) { }

    public DbSet<User> Users { get; set; }
    public DbSet<Post> Posts { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        // Seed Users with SpongeBob characters
        modelBuilder.Entity<User>().HasData(
            new User { UserId = 1, Username = "SpongeBob", Email = "spongebob@example.com", ProfileImageUrl = "https://cloudfront-us-east-1.images.arcpublishing.com/opb/UODRDCE3KTLWUWUHHRETSAXL7U.jpg" },
            new User { UserId = 2, Username = "Patrick", Email = "patrick@example.com", ProfileImageUrl = "https://easydrawingguides.com/wp-content/uploads/2021/09/how-to-draw-patrick-star-from-spongebob-squarepants-featured-image-1200.png" },
            new User { UserId = 3, Username = "Squidward", Email = "squidward@example.com", ProfileImageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgVKlScrVht-sfwBsSrP_4CzTabcB8Y-sipA&s" },
            new User { UserId = 4, Username = "MrKrabs", Email = "", ProfileImageUrl = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/405610ed-0ed8-404b-b733-b0bc5ad9d340/dcwvhem-bf8b69ae-ee59-4bb0-9aa1-e00e7ab64c4b.png/v1/fill/w_331,h_324/mr__krabs_png_by_thelivingbluejay_dcwvhem-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzI0IiwicGF0aCI6IlwvZlwvNDA1NjEwZWQtMGVkOC00MDRiLWI3MzMtYjBiYzVhZDlkMzQwXC9kY3d2aGVtLWJmOGI2OWFlLWVlNTktNGJiMC05YWExLWUwMGU3YWI2NGM0Yi5wbmciLCJ3aWR0aCI6Ijw9MzMxIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.z27jGqYPCzv2pCCILdxcSC2GVVQ09ggzR7gC_ohlV7s" }

        );

        modelBuilder.Entity<User>()
            .HasMany(u => u.Likes)
            .WithMany(p => p.Likes)
            .UsingEntity<Dictionary<string, object>>(
                "UserLikes",
                ul => ul.HasOne<Post>().WithMany().HasForeignKey("PostId").OnDelete(DeleteBehavior.Restrict),
                ul => ul.HasOne<User>().WithMany().HasForeignKey("UserId").OnDelete(DeleteBehavior.Cascade))
                .HasKey("UserId", "PostId");

        modelBuilder.Entity<User>()
            .HasMany(u => u.Followers)
            .WithMany(u => u.Following)
            .UsingEntity<Dictionary<string, object>>(
                "Follows",
                f => f.HasOne<User>().WithMany().HasForeignKey("FollowerId").OnDelete(DeleteBehavior.Restrict),
                f => f.HasOne<User>().WithMany().HasForeignKey("FolloweeId").OnDelete(DeleteBehavior.Cascade))
                .HasKey("FollowerId", "FolloweeId");

        modelBuilder.Entity<Post>()
            .HasOne(p => p.User)
            .WithMany(u => u.Posts)
            .HasForeignKey(p => p.UserId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}