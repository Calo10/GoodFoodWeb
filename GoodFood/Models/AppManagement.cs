using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GoodFood.Models
{
    public class AppManagement
    {
        public const string connStr = "server=localhost;user=root;database=goodfooddb;port=3306;password=creativecalo10";

        //Store Procedures
        public const string SP_SaveUser = "SP_SaveUser";


        //Messages

        public const string MSG_SaveUser_Success = "Usuario Creado Exitosamente!";
        public const string MSG_SaveUser_Failure = "Usuario Creado Exitosamente!";
    }
}
