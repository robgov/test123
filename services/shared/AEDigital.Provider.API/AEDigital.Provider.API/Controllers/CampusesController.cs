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

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AEDigital.Provider.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CampusesController : ControllerBase
    {
        private readonly ILogger<CampusesController> _logger;

        public CampusesController(ILogger<CampusesController> logger)
        {
            _logger = logger;
        }

        ///<Summary>
        /// Gets Campus by CampusID 
        ///</Summary>
        [HttpGet("{id}")]
        [SwaggerOperation("GetCampus")]
        [SwaggerResponse((int)HttpStatusCode.OK)]
        [SwaggerResponse((int)HttpStatusCode.NotFound)]
        public IEnumerable<CampusesModel> Get(int id)
        {
            var jsonString = System.IO.File.ReadAllText("Data\\albertapubliccampuses.json");
            var campus = JsonSerializer.Deserialize<IEnumerable<CampusesModel>>(jsonString);

            var filteredCampus = campus.Where(campus => campus.CampusRowID.Equals(id));
            return filteredCampus;
        }

        ///<Summary>
        /// Gets Campus by CampusID 
        ///</Summary>
        [HttpGet("GetCampusesByProviderID/{id}")]
        [SwaggerOperation("GetCampuses")]
        [SwaggerResponse((int)HttpStatusCode.OK)]
        [SwaggerResponse((int)HttpStatusCode.NotFound)]
        public IEnumerable<CampusesModel> GetCampuses(string id)
        {
            var jsonString = System.IO.File.ReadAllText("Data\\albertapubliccampuses.json");
            var campus = JsonSerializer.Deserialize<IEnumerable<CampusesModel>>(jsonString);

            var filteredCampus = campus.Where(campus => campus.ProviderID.Equals(id));
            return filteredCampus;
        }


        /*
            replaced 
           " (quotation mark)
           ' (apostrophe)
           , (comma)
           ; (semicolon)
           : (colon)

            REGEX - 
                Removed quotes around integers
                Used VSCode CSV --> Json extension
                Find: 		"Verified": "(.*)"
                Replace: 	"Verified": $1
        */
    }
}
