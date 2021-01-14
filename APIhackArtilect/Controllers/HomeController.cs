using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APIhackArtilect.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        private readonly ArtilectDbContext _context;
        public HomeController(ArtilectDbContext injectedDbContext)
        {
            _context = injectedDbContext;
        }

        public IEnumerable<Projects> Index()
        {
            return _context.Projects;
        }
    }
}
