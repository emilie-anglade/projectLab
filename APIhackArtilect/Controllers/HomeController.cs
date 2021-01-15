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

            newMember.Skills = new List<Skills>();
            foreach(int skillId in inputData.IdSkills)
            {
                Skills skill = new Skills();
                skill.Domain.Add(_context.Domains.FirstOrDefault(s => s.DomainId == skillId));
                newMember.Skills.Add(skill);
            }

            newMember.Interests = new List<Interests>();
            foreach (int InterestId in inputData.IdInterests)
            {
                Interests interests = new Interests();
                interests.Domain.Add(_context.Domains.FirstOrDefault(s => s.DomainId == InterestId));
                newMember.Interests.Add(interests);
            }
            //newMember.Skills = _context.Domains.Where(s => s.DomainId = inputData.IdSkills)

            _context.Members.Add(newMember);
            _context.SaveChanges();
        }

        [HttpPost]
        [Route("/{idUser}/NewProjects")]
        public void CreateProject(IntermediateProject inputData)
        {
            Projects newProject = new Projects();
            newProject.Name = inputData.ProjectName;
            newProject.Category = inputData.Category;
            newProject.Description = inputData.Description;
            newProject.DateBegin = inputData.DateBegin;
            newProject.DateEnd = inputData.DateEnd;

            newProject.Area = new List<Area>();
            foreach (int AreaId in inputData.IdArea)
            {
                Area area = new Area();
                area.Domains.Add(_context.Domains.FirstOrDefault(s => s.DomainId == AreaId));
                newProject.Area.Add(area);
            }

            newProject.MembersList = new List<Members>();
            foreach (int MembersId in inputData.IdMember)
            {
                Members member = new Members();
                member.Domain.Add(_context.Domains.FirstOrDefault(s => s.DomainId == MembersId));
                newMember.Interests.Add(interests);
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
