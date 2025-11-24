using Digitaledgetech.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using Newtonsoft.Json.Linq;
using System.Web;

namespace Digitaledgetech.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private const string RecaptchaSecretKey = "6LcGiWUpAAAAACQ_8sgu9YGAogbkcCPgIMSVltTx";
        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }
        public IActionResult Thankyou()
        {
            return View();
        }
        public IActionResult ERP()
        {
            return View();
        }
        public IActionResult Web()
        {
            return View();
        }
        public IActionResult Social()
        {
            return View();
        }
        public IActionResult Software()
        {
            return View();
        }
        public IActionResult Creative()
        {
            return View();
        }
        public IActionResult Mobile()
        {
            return View();
        }

        public IActionResult About()
        {
            return View();
        }
        public IActionResult Service()
        {
            return View();
        }
        public IActionResult Contact()
        {
            return View();
        }
        public IActionResult Clientele()
        {
            return View();
        }
        public IActionResult Acedge()
        {
            return View();
        }
         public IActionResult Hardware()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        [HttpPost]
        public async Task<IActionResult> ProcesscontactFormAsync(IFormCollection contactcollection)
        {
            Contact cm = new Contact();
            if (contactcollection["g-recaptcha-response"].ToString().Length == 0)
            {
                cm.errorMessage = "Please verify the reCaptcha to Submit";
                return View("Contact", cm);
            }
            var isRecaptchaValid = await VerifyRecaptcha(contactcollection["g-recaptcha-response"].ToString());

            if (!isRecaptchaValid)
            {
                // Handle invalid reCAPTCHA
                cm.errorMessage = "Invalid reCaptcha! Please verify that you are not a robot.";
                return View("Contact", cm);

            }

            string name = contactcollection["name"].ToString();
            string email = contactcollection["email"].ToString();
            string phone = contactcollection["phone"].ToString();
            string message = contactcollection["message"].ToString();
            string htmlBody = $@"
        <!DOCTYPE html>
        <html lang='en'>
        <head>
            <meta charset='UTF-8'>
            <meta name='viewport' content='width=device-width, initial-scale=1.0'>
            <title>Contact Form Submission</title>
        </head>
        <body>
            <h2>Contact Form Submission</h2>
            <p><strong>Name:</strong> {HttpUtility.HtmlEncode(name)}</p>
            <p><strong>Email:</strong> {HttpUtility.HtmlEncode(email)}</p>
            <p><strong>Phone:</strong> {HttpUtility.HtmlEncode(phone)}</p>
            <p><strong>Message:</strong> {HttpUtility.HtmlEncode(message)}</p>
        </body>
        </html>
    ";
            // Send email
            Emailer.SendEmail(email, "Visitor from website", htmlBody);

            // Redirect or return a response
            return RedirectToAction("Thankyou");
        }
        private async Task<bool> VerifyRecaptcha(string recaptchaToken)
        {
            using (var httpClient = new HttpClient())
            {
                var response = await httpClient.PostAsync($"https://www.google.com/recaptcha/api/siteverify?secret={RecaptchaSecretKey}&response={recaptchaToken}", null);

                if (response.IsSuccessStatusCode)
                {
                    var responseBody = await response.Content.ReadAsStringAsync();
                    var recaptchaResult = JObject.Parse(responseBody);
                    return recaptchaResult.Value<bool>("success");
                }

                return false;
            }
        }
    }
}