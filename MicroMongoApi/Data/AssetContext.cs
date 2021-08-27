using MicroMongoApi.Models;
using Microsoft.Extensions.Configuration;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MicroMongoApi.Data
{
    public class AssetContext
    {
        public AssetContext(IConfiguration configuration)
        {
            var client = new MongoClient(configuration.GetValue<string>("MongoSettings:CN"));
            var database = client.GetDatabase("AssetsDB2");
            Assets = database.GetCollection<Asset>("Assets");
            AssetUtils.SeedData(Assets);

        }

        public IMongoCollection<Asset> Assets { get; set; }
    }

    public class AssetUtils
    {
        public static void SeedData(IMongoCollection<Asset> assetscollection)
        {
            bool found = assetscollection.Find(p => true).Any();
            if (!found)
            {
                assetscollection.InsertManyAsync(GetAssets());
            }
        }

        private static IEnumerable<Asset> GetAssets()
        {
            List<Asset> AssetsColln = new List<Asset>() { new Asset() { Id = "7df78ad8902c", Title = "Asset1", Price = 100, Remarks = "Good" } };
            return AssetsColln;
        }
    }
}
