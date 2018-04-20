using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GoodFood.Models
{
    public class AppManagement
    {
        public const string connStr = "server=localhost;user=root;database=goodfooddb;port=3306;password=creativecalo10";

        //MySQL Home Store Procedures
        public const string SP_SaveUser = "SP_SaveUser";

        //MySQL Client Store Procedures
        public const string SP_GetAllClients = "SP_GetAllClients";

        //MySQL Product Store Procedures
        public const string SP_SaveProduct = "SP_SaveProduct";
        public const string SP_GetAllProducts = "SP_GetAllProducts";
        public const string SP_GetAllProductsForShop = "SP_GetAllProductsForShop";

        //MySQL Functions
        public const string FN_Login = "FN_Login";

        //Messages

        public const string MSG_SaveUser_Success = "Usuario Creado Exitosamente!";
        public const string MSG_SaveUser_Failure = "Error en la creacion del Usuario";
        public const string MSG_LoginUser_Success = "Usuario logueado Exitosamente!";
        public const string MSG_LoginUser_Failure = "Verifique sus credenciales";
        public const string MSG_SaveProduct_Success = "Producto Creado Exitosamente!";
        public const string MSG_SaveProduct_Failure = "Error en la creacion del Producto";
    }
}
