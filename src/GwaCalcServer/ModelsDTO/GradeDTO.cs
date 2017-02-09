using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GwaCalcServer.ModelsDTO
{
    public class GradeDTO
    {
        [JsonProperty("subject")]
        public string Subject { get; set; }

        [JsonProperty("unit")]
        public decimal Unit { get; set; }

        [JsonProperty("score")]
        public decimal Score { get; set; }
    }
}
