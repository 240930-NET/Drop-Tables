namespace DropTablesSocial.Models;
public class Follow
{
    public int FollowId { get; set; } // Primary Key
    
    // Foreign Keys
    public int FollowerId { get; set; } // The follower
    public User Follower { get; set; }
    
    // Navigation properties
    public int UserId { get; set; } // The user being followed
    public User User { get; set; }
}