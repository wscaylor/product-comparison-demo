﻿using System.Web.Mvc;

namespace ProductComparison.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Compare()
        {
            return View();
        }
    }
}