using System;
using System.Collections.Generic;

namespace backend.Models
{
    public partial class ApplicationRole
    {
        public int ApplicationId { get; set; }
        public int RoleId { get; set; }
        public DateTime? DtCreated { get; set; }
        public DateTime? DtModified { get; set; }

        public virtual Application Application { get; set; }
        public virtual Role Role { get; set; }
    }
}
