using System;
using System.Collections.Generic;

namespace backend.Models
{
    public partial class Userasset
    {
        public int UserassetId { get; set; }
        public byte[] Resume { get; set; }
        public byte[] ProfilePhoto { get; set; }
        public int UserId { get; set; }
        public DateTime? DtCreated { get; set; }
        public DateTime? DtModified { get; set; }

        public virtual User User { get; set; }
    }
}
