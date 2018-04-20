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

    #region Clients
    public class ResponseGetAllClients : Response
    {
        public List<UserModel> lstClients { get; set; }
    }
    #endregion

    #region Products

    public class ResponseGetAllProducts : Response
    {
        public List<ProductModel> lstProducts { get; set; }
    }

    #endregion
}
