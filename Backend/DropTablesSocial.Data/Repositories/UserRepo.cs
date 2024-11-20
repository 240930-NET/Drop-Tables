using DropTablesSocial.Models;
using Microsoft.EntityFrameworkCore;

namespace DropTablesSocial.Data;

public class UserRepo : IUserRepo {
    private readonly DropTablesContext _context;

    public UserRepo(DropTablesContext dropTablesContext) {
        _context = dropTablesContext;
    }

    public async Task<IEnumerable<User>> GetAllUsers() {
        return await _context.Users
            .Include(u => u.Posts)
            .Include(u => u.Followers)
            .Include(u => u.Following)
            .Include(u => u.Likes)
            .ToListAsync();
    }

    public async Task<User> GetUserById(int id) {
        return await _context.Users
            .Include(u => u.Posts)
            .Include(u => u.Followers)
            .Include(u => u.Following)
            .Include(u => u.Likes)
            .FirstOrDefaultAsync(u => u.UserId == id);
    }

    public async Task AddUser(User user) {
        await _context.Users.AddAsync(user);
    }

    public void UpdateUser(User user) {
        _context.Users.Update(user);
    }

    public void DeleteUser(User user) {
        _context.Users.Remove(user);
    }

}