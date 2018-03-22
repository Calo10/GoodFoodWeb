using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using GoodFood.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace GoodFood.Controllers
{
    public class ClientController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public string getAllClients()
        {

            ResponseGetAllClients ans = null;

            try
            {

                ans = UserModel.GetAllClients();
            }
            catch (Exception ex)
            {
                Error();
            }

            return JsonConvert.SerializeObject(ans);
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}