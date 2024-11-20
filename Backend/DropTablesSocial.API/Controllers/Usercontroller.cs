using DropTablesSocial.Models;
using Microsoft.AspNetCore.Mvc;

namespace DropTablesSocial.API;

[ApiController]
[Route("api/[controller]")]
public class UserController : ControllerBase{
    private readonly IUserService _userService;
    public UserController(IUserService userService) {
        _userService = userService;
    }

    [HttpGet]
    public async Task<IActionResult> GetAllUsers() {
        try {
            return Ok(await _userService.GetAllUsers());
        }
        catch {
            return BadRequest();
        }
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetUserById(int id) {
        try {
            return Ok(await _userService.GetUserById(id));
        }
        catch {
            return BadRequest();
        }
    }

    [HttpPost]
    public async Task<IActionResult> AddUser([FromBody] User user) {
        try {
            await _userService.AddUser(user);
            return Created();
        }
        catch {
            return BadRequest();
        }
    }

    [HttpPut]
    public IActionResult UpdateUser([FromBody] User user)
    {
        try
        {
            _userService.UpdateUser(user);
            return NoContent();
        }
        catch
        {
            return BadRequest();
        }
    }

    [HttpDelete("{id}")]
    public IActionResult DeleteUser(int id) {
        try {
            _userService.DeleteUser(id);
            return NoContent();
        }
        catch {
            return BadRequest();
        }
    }
}