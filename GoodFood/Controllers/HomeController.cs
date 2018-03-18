using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using GoodFood.Models;
using Newtonsoft.Json;

namespace GoodFood.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult RegisterUser()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }


        public string SaveUser(string pUser)
        {

            Response ans = null;

            try
            {
                UserModel a = JsonConvert.DeserializeObject<UserModel>(pUser);

                ans = UserModel.SaveUser(a);
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
