using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MicroApiSql.Models
{
    public class Asset
    {
        public int Id { get; set; } 
        public string Title { get; set; }
        public int Cost { get; set; }
        public int EmployeeId { get; set; }

        public Employee Employee  { get; set; }
    }
}
