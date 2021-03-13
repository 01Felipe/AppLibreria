using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AppLibreria.Models
{
    public class Libro
    {
        [Key]
        public string Titulo { get; set; }
        public int Ano { get; set; }
        public string Genero { get; set; }
        public int numeroPaginas { get; set; }
        public string Editorial { get; set; }
        public string Autor { get; set; }
    }
}
