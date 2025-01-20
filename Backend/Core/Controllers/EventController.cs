using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Core.Services;
using Core.Models;
using Microsoft.AspNetCore.Authorization;
using IAMService.Models;
using System.Security.Claims;

namespace Core.Controllers
{
    [Route("api/events")]
    [ApiController]
    public class EventController : ControllerBase
    {
        private readonly EventService _eventService;

        public EventController(EventService eventService)
        {
            _eventService = eventService;
        }

        [HttpGet("get-all-events")]
        public async Task<IActionResult> GetAll()
        {
            var events = await _eventService.GetEventsAsync();
            return Ok(events);
        }

        [HttpGet("read{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var ev = await _eventService.GetEventByIdAsync(id);

            if (ev == null)
            {
                return NotFound(new { Message = "Event not found" });
            }

            return Ok(ev);
        }

        [HttpPost("create")]
        [Authorize]
        public async Task<IActionResult> Create([FromBody] Event ev)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            try
            {
                // Retrieve UserId from the JWT token (Claims)
                var userId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier)!); // Get the user ID from the claims

                ev.AdminId = userId; // Associate event with the admin (user who created it)

                var createdEvent = await _eventService.CreateEventAsync(ev, userId);
                return CreatedAtAction(nameof(GetById), new { id = createdEvent.Id }, createdEvent);
            }
            catch (ArgumentException ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        [HttpDelete("delete{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var result = await _eventService.DeleteEventAsync(id);
            if (!result) return NotFound();
            return NoContent();
        }
    }
}
