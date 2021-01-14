using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APIhackArtilect.Model
{
    public class Invitation
    {
        public int Id { get; set; }

        public Members Sender { get; set; }

        public Members Receiver { get; set; }

        public Projects Project { get; set; }

        public string Date { get; set; }

    }
}
