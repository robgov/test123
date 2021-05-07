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
using AEDigital.Provider.API.Models;

namespace AEDigital.Provider.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SpecializationController : ControllerBase
    {
        private readonly ILogger<SpecializationController> _logger;

        public SpecializationController(ILogger<SpecializationController> logger)
        {
            _logger = logger;
        }

        ///<Summary>
        /// Gets Specializations by ProgramID
        ///</Summary>
        [HttpGet("GetAlbertaSpecializationsByProgramID/{id}")]
        public IEnumerable<SpecializationModel> GetAlbertaSpecializationsByProgramID(string id)
        {
            var jsonString = System.IO.File.ReadAllText("Data\\albertapublicspecialization.json");
            var specialization = JsonSerializer.Deserialize<IEnumerable<SpecializationModel>>(jsonString);
            var filteredSpecialization = specialization.Where(specialization => specialization.ProgramID.Equals(id));
            return filteredSpecialization;
        }

    }
}
