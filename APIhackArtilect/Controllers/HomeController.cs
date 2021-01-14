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
        [HttpPost]
        [Route("/NewProfile")]
        public void CreateProfile(IntermediateMember inputData)
        {
            Members newMember = new Members();
            newMember.UserName = inputData.UserName;
            newMember.Mail = inputData.Mail;
            newMember.DreamProject = inputData.DreamProject;

            int i = 0;
            newMember.Skills = new List<Skills>();
            foreach(int skillId in inputData.IdSkills)
            {
                Skills skill = new Skills();
                skill.Domain.Add(_context.Domains.FirstOrDefault(s => s.DomainId == skillId));
                newMember.Skills.Add(skill);
                i++;
            }
            //newMember.Skills = _context.Domains.Where(s => s.DomainId = inputData.IdSkills)

            _context.Members.Add(newMember);
            _context.SaveChanges();
        }

        //retourne les infos d'un membre
        [Route("/{idUser}")]
        public Members GetMember(int idUser)
        {
            return _context.Members.FirstOrDefault(m => m.Id == idUser);
        }

        //retourne les projets d'un membre
        [Route("/{idUser}/MyProjects")]
        public List<Projects> GetProjectsMember(int idUser)
        {
            Members member = GetMember(idUser);
            return member.ProjectsList;
        }
    }
}
