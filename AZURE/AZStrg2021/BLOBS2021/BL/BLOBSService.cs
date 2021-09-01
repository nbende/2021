using Azure.Storage.Blobs; //
using Azure.Storage.Blobs.Models; //
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BLOBS2021.BL
{
    public class BLOBSService
    {

        private readonly BlobServiceClient _blobClient;

        public BLOBSService(BlobServiceClient blobClient)
        {
            _blobClient = blobClient;
        }
        public async Task<IEnumerable<string>> GetBlobs(string containerName)
        {
            // allow us to access the data inside the container
            var containerClient = _blobClient.GetBlobContainerClient(containerName);

            var files = new List<string>();

            var blobs = containerClient.GetBlobsAsync();

            await foreach (var item in blobs)
            {
                var blobClient = containerClient.GetBlobClient(item.Name);
                files.Add(blobClient.Uri.AbsoluteUri);
            }

            return files;
        }

        public async Task<bool> UploadBlob(string name, IFormFile file, string containerName)
        {
            var containerClient = _blobClient.GetBlobContainerClient(containerName);

            // checking if the file exist 
            // if the file exist it will be replaced
            // if it doesn't exist it will create a temp space until its uploaded
            var blobClient = containerClient.GetBlobClient(name);

            var httpHeaders = new BlobHttpHeaders()
            {
                ContentType = file.ContentType
            };

            var res = await blobClient.UploadAsync(file.OpenReadStream(), httpHeaders);

            if (res != null)
                return true;

            return false;
        }
    }
}
