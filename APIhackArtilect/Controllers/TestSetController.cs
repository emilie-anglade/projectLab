using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using APIhackArtilect.Model;

namespace APIhackArtilect.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestSetController : ControllerBase
    {
        private ArtilectDbContext _context;
        public TestSetController(ArtilectDbContext injectedDbContext)
        {
            _context = injectedDbContext;
        }

        [Route("api/insertData"]
        public void InsertData()
        {

            var domain1 = new Domain();
            domain1.Name = "Biologie";
            _context.Domains.Add(domain1);

            var domain2 = new Domain();
            domain2.Name = "Drone";
            _context.Domains.Add(domain2);

            var domain3 = new Domain();
            domain3.Name = "Electronique";
            _context.Domains.Add(domain3);

            var domain4 = new Domain();
            domain4.Name = "Couture";
            _context.Domains.Add(domain4)

            var domain5 = new Domain();
            domain5.Name = "Design";

            var domain6 = new Domain();
            domain6.Name = "Machines";

            var domain7 = new Domain();
            domain7.Name = "Musique";

            var domain8 = new Domain();
            domain8.Name = "Robotique";

            var domain9 = new Domain();
            domain9.Name = "Architecture";

            var domain10 = new Domain();
            domain10.Name = "Media";

            var domain11 = new Domain();
            domain11.Name = "CosplayLab";

            _context.SaveChanges();
        }
    }
}
