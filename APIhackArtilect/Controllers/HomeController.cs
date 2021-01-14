using APIhackArtilect.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APIhackArtilect.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        private readonly ArtilectDbContext _context;
        public HomeController(ArtilectDbContext injectedDbContext)
        {
            _context = injectedDbContext;
        }

        //retourne tous les projets
        public IEnumerable<Projects> Index()
        {
            return _context.Projects;
        }

        //retourne tous les membres
        [Route("/Members")]
        public IEnumerable<Members> GetAllMembers()
        {
            return _context.Members;
        }

        //crée un nouveau profile
        /*[HttpPost]
        [Route("/NewProfile")]
        public void CreateProfile(Members inputData)
        {
            Members newMember = new Members();
            newMember.UserName = inputData.UserName;
            newMember.Mail = inputData.Mail;
            newMember.Skills = inputData.Skills;
            newMember.Interests = inputData.Interests;
            newMember.DreamProject = inputData.DreamProject;

            
            _context.Members.Add(newMember);
            _context.SaveChanges();
        }
*/
        //retourne les infos d'un membre
        [Route("/{idUser}")]
        public Members GetMember(int idUser)
        {
            return _context.Members.FirstOrDefault(m => m.Id == idUser);
        }

        //retourne les projets d'un membre
        //[Route("/{idUser}/MyProjects")]
        //public List<Projects> GetProjectsMember(int idUser)
        //{
        //    Members member = GetMember(idUser);
        //    return member.ProjectsList;
        //}
    }
}
