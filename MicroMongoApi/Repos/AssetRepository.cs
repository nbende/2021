using MicroMongoApi.Data;
using MicroMongoApi.Models;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MicroMongoApi.Repos
{
    public class AssetRepository : IAssetRepository
    {
        private AssetContext _assetcontext;

        public AssetRepository(AssetContext assetcontext)
        {
            _assetcontext = assetcontext;
        }

        public AssetRepository() { }
        public async Task CreateAsset(Asset asset)
        {
            await _assetcontext.Assets.InsertOneAsync(asset);

        }
        public async Task<Asset> GetAsset(string id)
        {
            return await _assetcontext.Assets.Find(r => r.Id == id).FirstOrDefaultAsync();
        }

        public async Task<IEnumerable<Asset>> GetAssets()
        {
            return await _assetcontext.Assets.Find(r => true).ToListAsync();
        }

    }
}
