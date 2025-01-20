using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Media.Services;

namespace Media.Controllers
{
    [Route("api/media")]
    [ApiController]
    public class MediaController : ControllerBase
    {
        private readonly IMediaService _mediaService;

        public MediaController(IMediaService mediaService)
        {
            _mediaService = mediaService;
        }

        [HttpPost("upload")]
        public async Task<IActionResult> Upload(IFormFile file)
        {
            if (file == null) return BadRequest("File is required");
            try
            {
                var fileId = await _mediaService.UploadFileAsync(file);
                return Ok(new { FileId = fileId });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpGet("download/{id}")]
        public async Task<IActionResult> Download(string id)
        {
            try
            {
                var stream = await _mediaService.DownloadFileAsync(id);
                return File(stream, "application/octet-stream", "downloaded-file");
            }
            catch (ArgumentException ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("delete/{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            try
            {
                var result = await _mediaService.DeleteFileAsync(id);
                return Ok(new { Success = result });
            }
            catch (ArgumentException ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
