using DropTablesSocial.Models;

namespace DropTablesSocial.API;

public interface IUserService {
    public Task<IEnumerable<User>> GetAllUsers();
    public Task<User> GetUserById(int id);
    public Task AddUser(User user);
    public void UpdateUser(User user);
    public void DeleteUser(int id);
}