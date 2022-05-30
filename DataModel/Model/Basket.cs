using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PharmaSystem.DataModel.Model
{
    public class Basket
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid ID { get; set; }
        public double? Discount { get; set; }
        public double TotalValue { get; set; }

        public Costumer Costumer { get; set; }
        public ICollection<Medicine> Medicine { get; set; }
        public Employee Employee { get; set; }

    }
}
