using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GoodFood.Models
{
    public class AppManagement
    {
        public const string connStr = "server=localhost;user=root;database=goodfooddb;port=3306;password=creativecalo10";

        //MySQL Store Procedures
        public const string SP_SaveUser = "SP_SaveUser";

        //MySQL Functions
        public const string FN_Login = "FN_Login";

        //Messages

        public const string MSG_SaveUser_Success = "Usuario Creado Exitosamente!";
        public const string MSG_SaveUser_Failure = "Error en la creacion del Usuario";
        public const string MSG_LoginUser_Success = "Usuario logueado Exitosamente!";
        public const string MSG_LoginUser_Failure = "Verifique sus credenciales";
    }
}
