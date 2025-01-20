using System;
using Core.Data;
using Core.Models;
using Microsoft.EntityFrameworkCore;

namespace Core.Services
{
    public class EventService
    {
        private readonly ApplicationDbContext _context;

        public EventService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<List<Event>> GetEventsAsync() => await _context.Events.ToListAsync();
        public async Task<Event?> GetEventByIdAsync(int id) => await _context.Events.FindAsync(id);
    

        public async Task<Event> CreateEventAsync(Event ev, int adminId)
        {
            // Validate ticket logic
            if (ev.RequiresTicket && ev.AvailableTickets <= 0)
            {
                throw new ArgumentException("AvailableTickets must be greater than zero if RequiresTicket is true.");
            }

            if (!ev.RequiresTicket)
            {
                ev.AvailableTickets = 0;
            }

            ev.AdminId = adminId; // Assign AdminId
            _context.Events.Add(ev); // Add the event to the database
            await _context.SaveChangesAsync(); // Save changes
            return ev; // Return the created event
        }

        public async Task<bool> DeleteEventAsync(int id)
        {
            var ev = await _context.Events.FindAsync(id);
            if (ev == null) return false;

            _context.Events.Remove(ev);
            await _context.SaveChangesAsync();
            return true;
        }
    }
}
