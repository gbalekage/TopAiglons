// lib/templates/resetPasswordTemplate.ts

export function getResetPasswordTemplate(name: string, url: string): string {
  const currentYear = new Date().getFullYear();

  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>TopAiglons RDC - Reset Your Password</title>
        <style>
          @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap");

          body {
            font-family: "Poppins", sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 30px 20px;
            color: #333;
          }

          .email-container {
            max-width: 600px;
            margin: auto;
            background: #ffffff;
            border-radius: 10px;
            padding: 30px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          }

          .header {
            text-align: center;
            margin-bottom: 30px;
          }

          .logo {
            max-width: 150px;
            height: auto;
            margin-bottom: 10px;
          }

          h1 {
            font-size: 24px;
            color: #2c3e50;
            margin-bottom: 20px;
          }

          p {
            margin: 12px 0;
            line-height: 1.6;
          }

          a.button {
            display: inline-block;
            padding: 12px 24px;
            background-color: #000000;
            color: #ffffff;
            text-decoration: none;
            border-radius: 6px;
            margin: 20px 0;
            font-weight: 600;
          }

          a.button:hover {
            background-color: #18181a;
          }

          .footer {
            margin-top: 30px;
            font-size: 14px;
            text-align: center;
            color: #888;
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="header">
            <img src="https://topaiglonsrdc/logo.png" alt="TopAiglons RDC Logo" class="logo" />
          </div>

          <h1>Reset Your Password</h1>
          <p>Hi ${name},</p>
          <p>We received a request to reset your password. If you did not initiate this request, please disregard this email.</p>
          <p>To reset your password, simply click the button below:</p>

          <p style="text-align: center;">
            <a href="${url}" class="button">Reset Password</a>
          </p>

          <p>If you have any questions or require assistance, feel free to reach out to our support team.</p>

          <p>Warm regards,<br />The TopAiglons RDC Team</p>

          <div class="footer">
            &copy; ${currentYear} TopAiglons RDC. All rights reserved.
          </div>
        </div>
      </body>
    </html>
  `;
}
