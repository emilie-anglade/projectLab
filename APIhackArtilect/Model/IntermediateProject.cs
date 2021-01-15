using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APIhackArtilect.Model
{
    public class IntermediateProject
    {
        public string ProjectName { get; set; }
        public bool Category { get; set; }
        public List<int> IdArea { get; set; }
        public List<int> IdMember { get; set; }
        public string Description { get; set; }
        public string DateBegin { get; set; }
        public string DateEnd { get; set; }

    }
}
