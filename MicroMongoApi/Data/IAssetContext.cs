using MicroMongoApi.Models;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MicroMongoApi.Data
{
    public class IAssetContext
    {
        public IMongoCollection<Asset> Assets { get;  }
    }
}
