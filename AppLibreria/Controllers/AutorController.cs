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
    public class AutorController : ControllerBase
    {
        private readonly AppDbContext context;
        public AutorController(AppDbContext context)
        {
            this.context = context;
        }

        // GET: api/<AutorController>
        [HttpGet]
        public IEnumerable<Autor> GetAu()
        {
            var au = context.Autor.ToList();
            return au;

        }

        // GET api/<AutorController>/5
        [HttpGet("{id}", Name = "GetAutor")]
        public ActionResult Get(string id)
        {
            try
            {
                var libro = context.Autor.FirstOrDefault(a => a.Correo == id);
                return Ok(libro);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }

        // POST api/<AutorController>
        [HttpPost]
        public void Post([FromBody] Autor autor)
        {
          
                context.Autor.Add(autor);
                context.SaveChanges();
           
        }

        // PUT api/<AutorController>/5
        [HttpPut("{id}")]
        public ActionResult Put(string id, [FromBody] Autor autor)
        {
            try
            {
                if (autor.Correo.Equals(id))
                {
                    context.Entry(autor).State = EntityState.Modified;
                    context.SaveChanges();
                    return CreatedAtRoute("GetLibro", new { id = autor.Correo, autor });

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

        // DELETE api/<AutorController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(string id)
        {
            try
            {
                var autor = context.Autor.FirstOrDefault(a => a.Correo == id);
                if (autor != null)
                {
                    context.Autor.Remove(autor);
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
