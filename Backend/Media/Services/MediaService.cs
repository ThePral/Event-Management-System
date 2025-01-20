using MongoDB.Driver;
using MongoDB.Bson;
using MongoDB.Driver.GridFS;

namespace Media.Services
{
    public class MediaService : IMediaService
    {
        private readonly GridFSBucket _gridFS;

        public MediaService(IMongoClient mongoClient, IConfiguration configuration)
        {
            var database = mongoClient.GetDatabase(configuration["MongoSettings:DatabaseName"]);
            _gridFS = new GridFSBucket(database);
        }

        public async Task<string> UploadFileAsync(IFormFile file)
        {
            if (file.Length == 0) throw new ArgumentException("File is empty");

            using var stream = file.OpenReadStream();
            var fileId = await _gridFS.UploadFromStreamAsync(file.FileName, stream, new GridFSUploadOptions
            {
                Metadata = new BsonDocument
                {
                    { "ContentType", file.ContentType },
                    { "FileSize", file.Length }
                }
            });

            return fileId.ToString();
        }

        public async Task<Stream> DownloadFileAsync(string id)
        {
            if (!ObjectId.TryParse(id, out var objectId))
                throw new ArgumentException("Invalid file ID");

            return await _gridFS.OpenDownloadStreamAsync(objectId);
        }

        public async Task<bool> DeleteFileAsync(string id)
        {
            if (!ObjectId.TryParse(id, out var objectId))
                throw new ArgumentException("Invalid file ID");

            await _gridFS.DeleteAsync(objectId);
            return true;
        }
    }
}