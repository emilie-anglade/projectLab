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
            _context.Domains.Add(domain4);

            var domain5 = new Domain();
            domain5.Name = "Design";
            _context.Domains.Add(domain5);

            var domain6 = new Domain();
            domain6.Name = "Machines";
            _context.Domains.Add(domain6);

            var domain7 = new Domain();
            domain7.Name = "Musique";
            _context.Domains.Add(domain7);

            var domain8 = new Domain();
            domain8.Name = "Robotique";
            _context.Domains.Add(domain8);

            var domain9 = new Domain();
            domain9.Name = "Architecture";
            _context.Domains.Add(domain9);

            var domain10 = new Domain();
            domain10.Name = "Media";
            _context.Domains.Add(domain10);

            var domain11 = new Domain();
            domain11.Name = "CosplayLab";
            _context.Domains.Add(domain11);

            var skills1 = new Skills();
            skills1.Domain = new List<Domain>() {domain6, domain8 };
            _context.Skills.Add(skills1);

            var interests1 = new Interests();
            interests1.Domain = new List<Domain>() {domain5, domain9 };
            _context.Interests.Add(interests1);

            var project1 = new Projects();
            project1.Name = "Velo Electrique";
            project1.Category = false;
            project1.Area = new List<Domain>() { domain3, };
            project1.MembersList = new List<Members>() { };
            project1.Description = "Pour faire comme Armstrong mais sans le doping";
            project1.DateBegin = "21/03/2019";
            project1.DateEnd = "21/09/2019";
            _context.Projects.Add(project1);

            var member1 = new Members();
            member1.UserName = "Richard";
            member1.Mail = "richard.didier@gmail.com";
            member1.Skills = new List<Skills>() { skills1 };
            member1.Interests = new List<Interests> { interests1 };
            member1.ProjectsList = new List<Projects> { project1 };
            member1.DreamProject = "Faire un site web pour le fablab qui tue";
            _context.Members.Add(member1);

            _context.SaveChanges();
        }
    }
}
