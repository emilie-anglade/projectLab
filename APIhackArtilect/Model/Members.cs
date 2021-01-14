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
        public ICollection<DomainType> Skills { get; set; }
        public ICollection<DomainType> Interests { get; set; }
        public List<Projects> ProjectsList { get; set; }
        public string DreamProject { get; set; }
    }
}
