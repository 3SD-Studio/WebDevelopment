using Microsoft.AspNetCore.Mvc;

namespace WebDevelopment.Controllers {
    public class HtmlCodeController : Controller {
        public IActionResult Index() {
            return View();
        }
    }
}
