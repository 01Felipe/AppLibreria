using AppLibreria.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AppLibreria.Context
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }

        public DbSet<Libro> Libro { get; set; }
        public DbSet<Autor> Autor { get; set; }
        public DbSet<Editoriales> Editoriales { get; set; }
    }
}
