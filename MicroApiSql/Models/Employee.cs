using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MicroApiSql.Models
{
    public class Employee
    {
        public int Id { get; set; }
        public string Ename { get; set; }
        public int Salary { get; set; }
        public string Remarks { get; set; }

        public List<Asset> Assets { get; set; }

    }
}
