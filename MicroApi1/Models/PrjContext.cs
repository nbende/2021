using Microsoft.EntityFrameworkCore; //
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MicroApi1.Models
{
    public class PrjContext : DbContext
    {
        public PrjContext(DbContextOptions<PrjContext> options) : base(options) { }

        public DbSet<Asset> Assets { get; set; }

        // other model classes required should be added here - for CRUD

        protected override void OnModelCreating(ModelBuilder modelbuilder)
        {
            modelbuilder.Entity<Asset>().HasData(
                new Asset
                {
                    Id = 101,
                    Price = 1000,
                    Title = "Mobile",
                    Remarks = "New"
                }
                );
        }
        
    }
}
