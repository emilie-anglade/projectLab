using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APIhackArtilect.Model
{
    public class Friends
    {
        public int Id { get; set; }

        public Members FriendFirst { get; set; }

        public Members FriendsSecond { get; set; }
    }
}
