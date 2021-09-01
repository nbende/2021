using BLOBS2021.BL;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace BLOBS2021.Controllers
{
    public class BLOBController : Controller
    {
        BLOBSService _blobservice;
        public BLOBController(BLOBSService blobsservice)
        {
            _blobservice = blobsservice;
        }
        public async Task<IActionResult> Index()
        {
            var files = await _blobservice.GetBlobs("images");
            return View(files);
        }

        public async Task<IActionResult> Add(IFormFile file)
        {
            if (file == null || file.Length < 1) return View();

            var fileName = Guid.NewGuid() + Path.GetExtension(file.FileName);

            var res = await _blobservice.UploadBlob(fileName, file, "images");

            if (res)
                return RedirectToAction("Index");

            return View();

            
        }

    }
}
