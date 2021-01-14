using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APIhackArtilect.Model
{
    public class Subscribe
    {
        public int Id { get; set; }

        public Members Sender { get; set; }

        public Projects ProjectTarget { get; set; }

        public string Date { get; set; }
    }
}
