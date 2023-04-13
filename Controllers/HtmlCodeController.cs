using Microsoft.AspNetCore.Mvc;

namespace WebDevelopment.Controllers {
    public class HtmlCodeController : Controller {
        public IActionResult Index() {
            return View();
        }

        public ContentResult Test(string htmlCode) {
            return new ContentResult
            {
                ContentType = "text/html",
                Content = $"{htmlCode}"
            }; ; 
        }
    }
}
