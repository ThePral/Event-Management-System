using System;

namespace Core.Models
{
    public class Event
    {
        public int Id { get; set; }
        public string Title { get; set; } = null!;
        public string? MeetingLink { get; set; }
        public string? Location { get; set; }
        public string? Description { get; set; }
        public string ParticipationMethod { get; set; } = null!;
        public string EventType { get; set; } = null!;
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public TimeSpan StartHour { get; set; }
        public bool RequiresTicket { get; set; }
        public int AvailableTickets { get; set; }
        public int AdminId { get; set; }

        public Event()
        {
            if (!RequiresTicket)
            {
                AvailableTickets = 0;
            }

            if (ParticipationMethod == "online")
            {
                Location = null;
            }

            if (Location == null! )
            {
                ParticipationMethod = "in-person";
            }
        }
    }
}
