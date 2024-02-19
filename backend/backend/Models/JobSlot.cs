using System;
using System.Collections.Generic;

namespace backend.Models
{
    public partial class JobSlot
    {
        public int SlotId { get; set; }
        public int JobId { get; set; }
        public DateTime? DtCreated { get; set; }
        public DateTime? DtModified { get; set; }

        public virtual Job Job { get; set; }
        public virtual Slot Slot { get; set; }
    }
}
