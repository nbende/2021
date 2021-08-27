using MicroMongoApi.Models;
using MicroMongoApi.Repos;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MicroMongoApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AssetsController : ControllerBase
    {

        private IAssetRepository _repository;

        public AssetsController(IAssetRepository repository)
        {
            _repository = repository;
        }

        // GET: api/<AssetsController>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Asset>>> GetAssets()
        {
            var Assets = await _repository.GetAssets();
            return  Ok(Assets);
        }



        // GET api/<AssetsController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Asset>> GetAsset(string id)
        {
            var Asset = await _repository.GetAsset(id);
            if (Asset != null)
                return Ok(Asset);
            else
                return NotFound();
        }

        // POST api/<AssetsController>
        [HttpPost]
        public async Task<ActionResult<Asset>> PostAsset([FromBody] Asset asset)
        {
            await _repository.CreateAsset(asset);
            return CreatedAtRoute("GetAssets", new { Id = asset.Id });
        }   

        // PUT api/<AssetsController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<AssetsController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
