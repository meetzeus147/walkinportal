using System;
using System.Collections.Generic;

namespace backend.Models
{
    public partial class Proqualification
    {
        public Proqualification()
        {
            ProqualificationExpertteches = new HashSet<ProqualificationExperttech>();
            ProqualificationFamiliarteches = new HashSet<ProqualificationFamiliartech>();
        }

        public int ProqualificationId { get; set; }
        public int? ExpYear { get; set; }
        public decimal? CurrentCtc { get; set; }
        public decimal? ExpectedCtc { get; set; }
        public sbyte? CurrentlyOnNoticePeriod { get; set; }
        public DateTime? NoticeEnd { get; set; }
        public int? NoticePeriodLength { get; set; }
        public sbyte? AppearedZeusTest { get; set; }
        public string ZeusTestRole { get; set; }
        public int ApplicationTypeId { get; set; }
        public int UserId { get; set; }
        public DateTime? DtCreated { get; set; }
        public DateTime? DtModified { get; set; }

        public virtual ApplicationType ApplicationType { get; set; }
        public virtual User User { get; set; }
        public virtual ICollection<ProqualificationExperttech> ProqualificationExpertteches { get; set; }
        public virtual ICollection<ProqualificationFamiliartech> ProqualificationFamiliarteches { get; set; }
    }
}
