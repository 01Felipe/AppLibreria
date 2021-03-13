using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AppLibreria.Models
{
    public class Autor
    {
        public string Nombre { get; set; }
        public string Fecha { get; set; }
        public string Ciudad_Procedencia { get; set; }
        [Key]
        public string Correo { get; set; }
    }
}
