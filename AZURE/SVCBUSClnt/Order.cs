using System;
using System.Collections.Generic;
using System.Text;

namespace SVCBUSClnt
{
    public class Order
    {
        public int OrderCode { get; set; }
        public string Title { get; set; }
        public int price { get; set; }
        public string Comments { get; set; }
    }
}
