using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APIhackArtilect
{
    public class Members
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Mail { get; set; }
        public Dictionary<string, bool> Skills { get; set; }
        public Dictionary<string, bool> Interests { get; set; }
        public List<Projects> ProjectsList { get; set; }
        public string DreamProject { get; set; }
    }
}
