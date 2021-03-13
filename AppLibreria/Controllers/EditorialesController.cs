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
    public class EditorialesController : ControllerBase
    {
        private readonly AppDbContext context;
        public EditorialesController(AppDbContext context)
        {
            this.context = context;
        }
        // GET: api/<EditorialesController>
        [HttpGet]
        public IEnumerable<Editoriales> GetEdi()
        {
            var edi =  context.Editoriales.ToList();

            return edi;
           
        }

        // GET api/<EditorialesController>/5
        [HttpGet("{id}", Name = "GetEditoriales")]
        public ActionResult Get(string id)
        {
            try
            {
                var editoriales = context.Editoriales.FirstOrDefault(e => e.Correo == id);
                return Ok(editoriales);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }

        // POST api/<EditorialesController>
        [HttpPost]
        public void Post([FromBody] Editoriales editoriales)
        {
            
                context.Editoriales.Add(editoriales);
                context.SaveChanges();
              

        }

        // PUT api/<EditorialesController>/5
        [HttpPut("{id}")]
        public ActionResult Put(string id, [FromBody] Editoriales editoriales)
        {
            try
            {
                if (editoriales.Correo.Equals(id))
                {
                    context.Entry(editoriales).State = EntityState.Modified;
                    context.SaveChanges();
                    return CreatedAtRoute("GetLibro", new { id = editoriales.Correo, editoriales });

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

        // DELETE api/<EditorialesController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(string id)
        {
            try
            {
                var editoriales = context.Editoriales.FirstOrDefault(e => e.Correo == id);
                if (editoriales != null)
                {
                    context.Editoriales.Remove(editoriales);
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
