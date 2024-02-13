﻿using System;
using System.Collections.Generic;

namespace backend.Models
{
    public partial class JobRole
    {
        public JobRole()
        {
            JobRolesDescs = new HashSet<JobRolesDesc>();
        }

        public int Id { get; set; }
        public decimal? Package { get; set; }
        public int JobId { get; set; }
        public int RoleId { get; set; }
        public DateTime? DtCreated { get; set; }
        public DateTime? DtModified { get; set; }

        public virtual Job Job { get; set; }
        public virtual Role Role { get; set; }
        public virtual ICollection<JobRolesDesc> JobRolesDescs { get; set; }
    }
}
