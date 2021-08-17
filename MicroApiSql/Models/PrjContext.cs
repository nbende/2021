using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MicroApiSql.Models
{
    public class PrjContext : DbContext
    {
        public PrjContext(DbContextOptions<PrjContext> options) : base(options)
        { }

        public DbSet<Asset> Assets { get; set; }
        public DbSet<Employee> Employees { get; set; }


    }
}
