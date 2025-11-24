using System.Net.Mail;
using System.Net;

namespace Digitaledgetech
{
    public class Emailer
    {
        public static void SendEmail(string to, string subject, string body)
        {
            string smtpServer = "smtp.gmail.com"; // Update with your SMTP server
            int smtpPort = 587; // Update with your SMTP port
            string smtpUsername = "infodet17@gmail.com"; // Update with your SMTP username
            string smtpPassword = "nlop spdf zloz ubhd"; // Update with your SMTP password

            using (var client = new SmtpClient(smtpServer, smtpPort))
            {
                client.UseDefaultCredentials = false;
                client.Credentials = new NetworkCredential(smtpUsername, smtpPassword);
                client.EnableSsl = true;

                var message = new MailMessage
                {
                    From = new MailAddress("infodet17@gmail.com"), // Update with your email
                    Subject = subject,
                    Body = body,
                    IsBodyHtml = true
                };

                message.To.Add("info@digitaledgetech.in");

                try
                {
                    client.Send(message);
                }
                catch (Exception ex)
                {
                    // Handle exception or log the error
                    Console.WriteLine(ex.Message);
                }
            }
        }
    }

}
