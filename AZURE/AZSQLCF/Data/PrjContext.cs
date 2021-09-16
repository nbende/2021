using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AZSQLCF.Models; //
using Microsoft.EntityFrameworkCore; //

namespace AZSQLCF.Data
{
    public class PrjContext : DbContext
    {
        public PrjContext(DbContextOptions<PrjContext> options) : base(options)
        { }

        public DbSet<Employee> Employees { get; set; }
    }
}
