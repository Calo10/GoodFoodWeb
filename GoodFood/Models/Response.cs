using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GoodFood.Models
{
    public class Response
    {

        public bool IsSuccessful { get; set; }

        public string ResponseMessage { get; set; }

        public int AffectedID { get; set; }
    }
}
