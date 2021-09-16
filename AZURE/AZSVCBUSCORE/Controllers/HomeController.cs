using AZSVCBUSCORE.Models;
using AZSVCBUSCORE.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace AZSVCBUSCORE.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        public SvcBusService _svcbusservice;

        public HomeController(ILogger<HomeController> logger,SvcBusService svcBusService)
        {
            _logger = logger;
            _svcbusservice = svcBusService;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Index(Order order)
        {
            await _svcbusservice.PostMessageAsync(order, "Ordersq");
            return RedirectToAction("Privacy");
        }



        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
