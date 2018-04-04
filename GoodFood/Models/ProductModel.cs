using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace GoodFood.Models
{
    public class ProductModel
    {

        public int id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public double UniPrice { get; set; }
        public bool Status { get; set; }
        public int idProductType { get; set; }

        public static Response SaveProduct(ProductModel product)
        {

            MySqlConnection conn = new MySqlConnection(AppManagement.connStr);

            try
            {
                conn.Open();

                string SP = AppManagement.SP_SaveProduct;
                MySqlCommand cmd = new MySqlCommand(SP, conn);
                cmd.CommandType = CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@Name", product.Name);
                cmd.Parameters.AddWithValue("@Description", product.Description);
                cmd.Parameters.AddWithValue("@UnitPrice", product.UniPrice);
                cmd.Parameters.AddWithValue("@Status", product.Status);
                cmd.Parameters.AddWithValue("@idProductType", product.idProductType);

                MySqlDataReader rdr = cmd.ExecuteReader();

                rdr.Close();

                if (rdr.RecordsAffected != 0)
                    return new Response { IsSuccessful = true, ResponseMessage = AppManagement.MSG_SaveProduct_Success };

                return new Response { IsSuccessful = false, ResponseMessage = AppManagement.MSG_SaveProduct_Failure };

            }
            catch (Exception ex)
            {
                return new Response { IsSuccessful = false, ResponseMessage = ex.ToString() };
            }
            finally
            {
                conn.Close();
            }
        }
    }
}
