using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APIhackArtilect.Model
{
    public class IntermediateMember
    {
        public string UserName { get; set; }
        public string Mail { get; set; }
        public List<int> IdSkills { get; set; }
        public List<int> IdInterests { get; set; }
        public string DreamProject { get; set; }
    }
}
