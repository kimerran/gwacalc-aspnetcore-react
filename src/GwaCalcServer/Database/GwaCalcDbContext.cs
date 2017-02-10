using GwaCalcServer.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GwaCalcServer.Database
{
    public class GwaCalcDbContext : DbContext
    {
        public GwaCalcDbContext(DbContextOptions<GwaCalcDbContext> options)
            : base(options)
        {
        }

        public DbSet<Grade> Grades { get; set; }
        public DbSet<GradeSet> GradeSets { get; set; }
    }
}
