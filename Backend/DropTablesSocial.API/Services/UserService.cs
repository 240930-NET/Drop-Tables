using DropTablesSocial.Data;
using DropTablesSocial.Models;

namespace DropTablesSocial.API;

public class UserService : IUserService {
    private readonly IUserRepo _userRepo;

    public UserService(IUserRepo userRepo) {
        _userRepo = userRepo;
    }

    public async Task<IEnumerable<User>> GetAllUsers() {
        return await _userRepo.GetAllUsers();
    }

    public async Task<User> GetUserById(int id) {
        return await _userRepo.GetUserById(id) ?? throw new NullReferenceException("No user found");
    }

    public async Task AddUser(User user) {
        await _userRepo.AddUser(user);
    }

    public async void UpdateUser(User user) {
        if(await GetUserById(user.UserId) is not null) _userRepo.UpdateUser(user);
    }

    public async void DeleteUser(int id) {
        _userRepo.DeleteUser(await GetUserById(id));
    }
}