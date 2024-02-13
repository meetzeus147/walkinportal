using System;
using System.Collections.Generic;

namespace backend.Models
{
    public partial class ProqualificationFamiliartech
    {
        public int ProqualificationId { get; set; }
        public int TechId { get; set; }
        public DateTime? DtCreated { get; set; }
        public DateTime? DtModified { get; set; }

        public virtual Proqualification Proqualification { get; set; }
        public virtual Tech Tech { get; set; }
    }
}
