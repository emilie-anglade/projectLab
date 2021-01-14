using APIhackArtilect;
using APIhackArtilect.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace APIhackArtilect
{ 
    public class ArtilectDbContext : DbContext
    {
        public ArtilectDbContext(DbContextOptions<ArtilectDbContext> options)
           : base(options)
        {
        }

        public DbSet<Projects> Projects { get; set; }
        public DbSet<Members> Members { get; set; }
        public DbSet<Invitation> Invitations { get; set; }
        public DbSet<Subscribe> Subcriptions { get; set; }
        public DbSet<Friends> Friends { get; set; }

        public DbSet<Domain> Domains { get; set; }


    }

}
