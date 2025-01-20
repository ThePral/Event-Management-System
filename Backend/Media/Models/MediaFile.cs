using System;

namespace Media.Models
{
    public class MediaFile
    {
        public string Id { get; set; } = null!;
        public string FileName { get; set; } = null!;
        public string ContentType { get; set; } = null!;
        public long FileSize { get; set; }
        public DateTime UploadedAt { get; set; }
    }
}