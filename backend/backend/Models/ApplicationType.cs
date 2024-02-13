using System;
using System.Collections.Generic;

namespace backend.Models
{
    public partial class ApplicationType
    {
        public ApplicationType()
        {
            Proqualifications = new HashSet<Proqualification>();
        }

        public int ApplicationTypeId { get; set; }
        public string ApplicationTypeName { get; set; }
        public DateTime? DtCreated { get; set; }
        public DateTime? DtModified { get; set; }

        public virtual ICollection<Proqualification> Proqualifications { get; set; }
    }
}
