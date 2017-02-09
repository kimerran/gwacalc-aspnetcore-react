using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GwaCalcServer.Models
{
    public class Grade
    {
        public string Subject { get; set; }
        public decimal Unit { get; set; }
        public decimal Score { get; set; }
    }
}
