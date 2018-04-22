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

        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public double UnitPrice { get; set; }
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
                cmd.Parameters.AddWithValue("@UnitPrice", product.UnitPrice);
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

        public static ResponseGetAllProducts GetAllProducts()
        {

            MySqlConnection conn = new MySqlConnection(AppManagement.connStr);
            List<ProductModel> lstProducts = new List<ProductModel>();

            try
            {
                conn.Open();

                string SP = AppManagement.SP_GetAllProducts;
                MySqlCommand cmd = new MySqlCommand(SP, conn);
                cmd.CommandType = CommandType.StoredProcedure;

                MySqlDataReader rdr = cmd.ExecuteReader();

                while (rdr.Read())
                {
                    ProductModel product = new ProductModel();

                    product.Id = Convert.ToInt32(rdr["id"]);
                    product.Name = rdr["Name"].ToString();
                    product.Description = rdr["Description"].ToString();
                    product.UnitPrice = Convert.ToDouble(rdr["UnitPrice"]);
                    product.Status = Convert.ToBoolean(rdr["Status"]);
                    product.idProductType = Convert.ToInt32(rdr["idProductType"]);

                    lstProducts.Add(product);
                }

                rdr.Close();

                return new ResponseGetAllProducts { IsSuccessful = true, ResponseMessage = "Carga de Clientes Finalizada", lstProducts = lstProducts };
            }
            catch (Exception ex)
            {
                return new ResponseGetAllProducts { IsSuccessful = false, ResponseMessage = ex.Message.ToString(), lstProducts = null };
            }

        }

        public static ResponseGetAllProducts GetAllProductsForShop()
        {
            MySqlConnection conn = new MySqlConnection(AppManagement.connStr);
            List<ProductModel> lstProducts = new List<ProductModel>();

            try
            {
                conn.Open();

                string SP = AppManagement.SP_GetAllProductsForShop;
                MySqlCommand cmd = new MySqlCommand(SP, conn);
                cmd.CommandType = CommandType.StoredProcedure;

                MySqlDataReader rdr = cmd.ExecuteReader();

                while (rdr.Read())
                {
                    ProductModel product = new ProductModel();

                    product.Id = Convert.ToInt32(rdr["id"]);
                    product.Name = rdr["Name"].ToString();
                    product.Description = rdr["Description"].ToString();
                    product.UnitPrice = Convert.ToDouble(rdr["UnitPrice"]);
                    product.Status = Convert.ToBoolean(rdr["Status"]);
                    product.idProductType = Convert.ToInt32(rdr["idProductType"]);

                    lstProducts.Add(product);
                }

                rdr.Close();

                return new ResponseGetAllProducts { IsSuccessful = true, ResponseMessage = "Carga de Clientes Finalizada", lstProducts = lstProducts };
            }
            catch (Exception ex)
            {
                return new ResponseGetAllProducts { IsSuccessful = false, ResponseMessage = ex.Message.ToString(), lstProducts = null };
            }


        }
    }
}
