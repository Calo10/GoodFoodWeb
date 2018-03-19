using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace GoodFood.Models
{
    public class UserModel 
    {
        public string Name { get; set; }
        public string FirstLastName { get; set; }
        public string SecondLastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }

        public static Response SaveUser(UserModel user)
        {
   
            MySqlConnection conn = new MySqlConnection(AppManagement.connStr);

            try
            {
                conn.Open();

                string SP = AppManagement.SP_SaveUser;
                MySqlCommand cmd = new MySqlCommand(SP, conn);
                cmd.CommandType = CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@Name", user.Name);
                cmd.Parameters.AddWithValue("@FirstLastName", user.FirstLastName);
                cmd.Parameters.AddWithValue("@SecondLastName", user.SecondLastName);
                cmd.Parameters.AddWithValue("@Email", user.Email);
                cmd.Parameters.AddWithValue("@Password",  user.Password);

                MySqlDataReader rdr = cmd.ExecuteReader();
             
                rdr.Close();

                if (rdr.RecordsAffected != 0)
                    return new Response { IsSuccessful = true , ResponseMessage= AppManagement.MSG_SaveUser_Success};
                
                return new Response { IsSuccessful = false, ResponseMessage = AppManagement.MSG_SaveUser_Failure};

            }
            catch (Exception ex)
            {
                return new Response { IsSuccessful = false, ResponseMessage = ex.ToString()};
            }
            finally
            {
                conn.Close();
            }
        }

        public static Response Login(UserModel user)
        {

            MySqlConnection conn = new MySqlConnection(AppManagement.connStr);

            try
            {
                conn.Open();

                string SP = AppManagement.FN_Login; ;
                MySqlCommand cmd = new MySqlCommand(SP, conn);
                cmd.CommandType = CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@Email", user.Email);
                cmd.Parameters.AddWithValue("@Password", user.Password);
                cmd.Parameters.Add("@ID", MySqlDbType.Int32);
                cmd.Parameters["@ID"].Direction = ParameterDirection.ReturnValue;

                MySqlDataReader rdr = cmd.ExecuteReader();
              

                int res = (Int32)cmd.Parameters["@ID"].Value;

                if (res != 0)
                    return new Response { IsSuccessful = true, ResponseMessage=AppManagement.MSG_LoginUser_Success, AffectedID = res};

                return new Response { IsSuccessful = false, ResponseMessage = AppManagement.MSG_LoginUser_Failure};

            }
            catch (Exception ex)
            {
                return new Response { IsSuccessful = false, ResponseMessage = ex.ToString() };
            }

        }
    }
}
