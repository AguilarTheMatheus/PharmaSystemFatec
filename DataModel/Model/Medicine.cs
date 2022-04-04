using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PharmaSystem.DataModel.Model
{
    public class Medicine
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid ID { get; set; }
        public string Name { get; set; }
        public double Price { get; set; }
        public Stripe Stripe { get; set; }
        public string Category { get; set; }

        public ICollection<Basket> Basket { get; set; }
        public Employee Employee { get; set; }
    }

    public enum Stripe
    {
        None = 1,
        Yellow = 2,
        Red = 3,
        Black = 4
    }
}
