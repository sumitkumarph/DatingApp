using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class BuggyController : BaseApiController
    {
        [HttpGet("auth")]
        public IActionResult Getauth()
        {
            return Unauthorized();
        }

        [HttpGet("not-found")]
        public IActionResult GetNotfound()
        {
            return NotFound();
        }

        [HttpGet("server-error")]
        public IActionResult GetServerError()
        {
            throw new Exception("This is server error");
        }    
    }
}