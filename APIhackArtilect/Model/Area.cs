using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APIhackArtilect.Model
{
    public class Area
    {
        public int Id { get; set; }

        public ICollection<Domain> Domains { get; set; }

        public Projects Projects { get; set; }
    }
}
