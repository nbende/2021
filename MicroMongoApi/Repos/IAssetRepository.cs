using MicroMongoApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MicroMongoApi.Repos
{
    public interface IAssetRepository
    {
        Task<IEnumerable<Asset>> GetAssets();
        Task<Asset> GetAsset(string id);

        Task CreateAsset(Asset asset);
    }
}
