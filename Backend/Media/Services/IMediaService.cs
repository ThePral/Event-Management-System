using System;

namespace Media.Services
{
    public interface IMediaService
    {
        Task<string> UploadFileAsync(IFormFile file);
        Task<Stream> DownloadFileAsync(string id);
        Task<bool> DeleteFileAsync(string id);
    }
}