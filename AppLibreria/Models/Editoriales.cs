using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AppLibreria.Models
{
    public class Editoriales
    {
        public string Nombre { get; set; }
        public string Direccion { get; set; }
        public string Telefono { get; set; }
        [Key]
        public string Correo { get; set; }
        public int Maximo { get; set; }
    }
}
