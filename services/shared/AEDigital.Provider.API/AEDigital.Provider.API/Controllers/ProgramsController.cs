using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.IO;
using Swashbuckle.AspNetCore.Annotations;
using System.Net;
using AEDigital.Provider.API.Models;

namespace AEDigital.Provider.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProgramsController : ControllerBase
    {
        private readonly ILogger<ProgramsController> _logger;

        public ProgramsController(ILogger<ProgramsController> logger)
        {
            _logger = logger;
        }

        ///<Summary>
        /// Gets Programs by ProgramID 
        ///</Summary>
        [HttpGet("{id}")]
        [SwaggerOperation("GetProgram")]
        [SwaggerResponse((int)HttpStatusCode.OK)]
        [SwaggerResponse((int)HttpStatusCode.NotFound)]
        public IEnumerable<ProgramsModel> Get(string id)
        {
            var jsonString = System.IO.File.ReadAllText("Data\\albertapublicprograms.json");
            var program = JsonSerializer.Deserialize<IEnumerable<ProgramsModel>>(jsonString);
            var filteredProgram = program.Where(program => program.ProgramID.Equals(id));

            return filteredProgram;
        }

        ///<Summary>
        /// Gets Programs by ProviderID 
        ///</Summary>
        [HttpGet("GetProgramsByProviderID/{id}")]
        [SwaggerOperation("GetPrograms")]
        [SwaggerResponse((int)HttpStatusCode.OK)]
        [SwaggerResponse((int)HttpStatusCode.NotFound)]
        public IEnumerable<ProgramsModel> GetPrograms (string id)
        {
            var jsonString = System.IO.File.ReadAllText("Data\\albertapublicprograms.json");
            var program = JsonSerializer.Deserialize<IEnumerable<ProgramsModel>>(jsonString);
            var filteredProgram = program.Where(program => program.ProviderID.Equals(id));
            return filteredProgram;
        }

    }
}
