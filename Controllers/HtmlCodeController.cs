using Microsoft.AspNetCore.Mvc;
using WebDevelopment.Models;

namespace WebDevelopment.Controllers {
    public class HtmlCodeController : Controller {
        public IActionResult Index() {
            return View();
        }

        public ContentResult GeneratePage(string htmlCode, string cssCode, string jsCode) {
            string code =
                "<!DOCTYPE html>" +
                "<html>" +
                "   <head>" +
                "       <meta charset=UTF8>" +
                "       <title>Your generated htmlPage</title>" +
                "       <style>" + cssCode + "</style>" +
                "       <script>" + jsCode + "</script>" +  
                "   </head>" +
                "   <body>" +
                "       " + htmlCode + 
                "   </body>" +
                "</html>";



            return new ContentResult
            {
                ContentType = "text/html",
                Content = $"{code}"
            }; ; 
        }

        public IActionResult SavePage(HtmlCodeModel page) {
            throw new NotImplementedException("You need to prepare how to make it.");
        }
    }
}
