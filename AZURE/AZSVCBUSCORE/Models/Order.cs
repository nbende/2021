using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AZSVCBUSCORE.Models
{
    public class Order
    {
        public int OrderCode { get; set; }
        public string Title { get; set; }
        public int price { get; set; }
        public string Comments { get; set; }
    }
}
