import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: `${process.env.MAIL_ID}`,
        pass: `${process.env.MAIL_CRED}`
    }
})

const mailHandler = async( req: NextApiRequest, res:NextApiResponse ) => {
    if(req.method == 'POST') {
        const { firstName, lastName, email, message, subject } = req.body;
        console.log(subject);
        const mailOption = {
            from: email,
            to: 'abbasali.dalal07@gmail.com',
            subject: subject,
            html: `<!DOCTYPE html>
            <html lang="en">
            
            <head>
              <meta charset="UTF-8">
              <meta http-equiv="X-UA-Compatible" content="IE=edge">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Contact Form Submission</title>
              <style>
                body {
                  font-family: 'Arial', sans-serif;
                  background-color: #f4f4f4;
                  color: #333333;
                  margin: 0;
                  padding: 0;
                }
            
                .container {
                  max-width: 600px;
                  margin: 0 auto;
                  padding: 20px;
                  box-sizing: border-box;
                  background-color: #ffffff;
                  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                  border-radius: 5px;
                }
            
                header {
                  text-align: center;
                  margin-bottom: 20px;
                }
            
                h1 {
                  color: black;
                  margin: 0;
                }
            
                .message {
                  background-color: #f9f9f9;
                  padding: 20px;
                  border-radius: 5px;
                  margin-bottom: 20px;
                }
            
                p {
                  margin-bottom: 15px;
                  line-height: 1.5;
                }
            
                .footer {
                  text-align: center;
                  color: #666666;
                  font-size: 14px;
                }
              </style>
            </head>
            
            <body>
              <div class="container">
                <header>
                  <h1>Connection Request from Portfolio</h1>
                </header>
                <div class="message">
                  <p><strong>Name:</strong> ${firstName} ${lastName}</p>
                  <p><strong>Email:</strong> ${email}</p>
                  <p><strong>Message:</strong> ${message}</p>
                </div>
                <div class="footer">
                  <p>This email was sent from your portfolio website. <br> Please respond promptly.</p>
                </div>
              </div>
            </body>
            
            </html>
            `,
        }
        try{
            await transporter.sendMail(mailOption);
            res.status(200).json({
                message: 'Mail sent succesfully!!',
                success: true
            })
        } catch(error) {
            console.log(error);
            res.status(500).json({
                success: false,
                error: 'An error encountered while sending mail: '+error
            })
        }
    } else {
        res.status(405).json({
            error: "Method not allowed!!"
        })
    }
}

export default mailHandler