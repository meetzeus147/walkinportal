﻿using System;
using System.Collections.Generic;

namespace backend.Models
{
    public partial class UserdetailsRole
    {
        public int RoleId { get; set; }
        public int UserdetailId { get; set; }
        public DateTime? DtCreated { get; set; }
        public DateTime? DtModified { get; set; }

        public virtual Role Role { get; set; }
        public virtual Userdetail Userdetail { get; set; }
    }
}
