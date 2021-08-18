using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AZSQLDemo.Models
{
    public class PrjContext : DbContext // entire context with DB
    {
        public PrjContext(DbContextOptions<PrjContext> options) : base(options)
        { }

        public DbSet<Material> Materials { get; set; } // crud operations

    }
}
