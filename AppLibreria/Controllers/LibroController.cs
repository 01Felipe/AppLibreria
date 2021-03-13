using AppLibreria.Context;
using AppLibreria.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AppLibreria.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LibroController : ControllerBase
    {
        private readonly AppDbContext context;
        public LibroController(AppDbContext context)
        {
            this.context = context;
        }

        // GET: api/<LibroController>
        [HttpGet]
        public IEnumerable<Libro> GetLib()
        {
            var lib = context.Libro.ToList();
                return lib;
            
        }

        // GET api/<LibroController>/5
        [HttpGet("{id}", Name = "GetLibro")]
        public ActionResult Get(string id)
        {
            try
            {
                var libro = context.Libro.FirstOrDefault(l => l.Titulo == id);
                return Ok(libro);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }

        // POST api/<LibroController>
        [HttpPost]
        public void Post([FromBody] Libro libro)
        {
           
                context.Libro.Add(libro);
                context.SaveChanges();
               
            
        }

        // PUT api/<LibroController>/5
        [HttpPut("{id}")]
        public ActionResult Put(string id, [FromBody] Libro libro)
        {
            try
            {
                if (libro.Titulo.Equals(id))
                {
                    context.Entry(libro).State = EntityState.Modified;
                    context.SaveChanges();
                    return CreatedAtRoute("GetLibro", new { id = libro.Titulo, libro });

                }
                else
                {
                    return BadRequest();
                }
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }

        // DELETE api/<LibroController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(string id)
        {
            try
            {
                var libro = context.Libro.FirstOrDefault(l => l.Titulo == id);
                if (libro != null)
                {
                    context.Libro.Remove(libro);
                    context.SaveChanges();
                    return Ok(id);

                }
                else
                {
                    return BadRequest();

                }
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }
    }
}
