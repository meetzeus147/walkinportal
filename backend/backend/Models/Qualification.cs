using System;
using System.Collections.Generic;

namespace backend.Models
{
    public partial class Qualification
    {
        public Qualification()
        {
            Edqualifications = new HashSet<Edqualification>();
        }

        public int QualificationId { get; set; }
        public string QualificationName { get; set; }
        public DateTime? DtCreated { get; set; }
        public DateTime? DtModified { get; set; }

        public virtual ICollection<Edqualification> Edqualifications { get; set; }
    }
}
