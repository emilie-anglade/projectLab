using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APIhackArtilect.Model
{
    public class Interests
    {
        public int Id { get; set; }
        public ICollection<Domain> Domain {get; set;}
        public Members Member { get; set; }
    }
}
