using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APIhackArtilect
{
    public class Projects
    {
        public int Id { get; set; }
        public string Category { get; set; }
        public Dictionary<string, bool> Domain { get; set; }
        public List<Members> MembersList { get; set; }
        public string Description { get; set; }
        public string DateBegin { get; set; }
        public string DateEnd { get; set; }
    
    }
}
