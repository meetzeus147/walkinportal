using System;
using System.Collections.Generic;

namespace backend.Models
{
    public partial class College
    {
        public College()
        {
            Edqualifications = new HashSet<Edqualification>();
        }

        public int CollegeId { get; set; }
        public string CollegeName { get; set; }
        public int LocationId { get; set; }
        public DateTime? DtCreated { get; set; }
        public DateTime? DtModified { get; set; }

        public virtual Location Location { get; set; }
        public virtual ICollection<Edqualification> Edqualifications { get; set; }
    }
}
