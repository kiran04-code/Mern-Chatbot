import { createTransport } from "nodemailer"

export const SendMail = async (email,subject) => {
  const transport = createTransport({
    host:"smpt.gmail.com",
    port :465,
    auth:{
        user:process.env.EMAIL,
        pass:process.env.EMAIL_PASSWORD
    }
  })

  const otp = Math.floor(Math.random()*1000)
  const html = `
    <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
      <h2 style="color: #333;">Your OTP Code</h2>
      <p style="font-size: 18px;">Use the following OTP to verify your account:</p>
      <div style="font-size: 24px; font-weight: bold; background: #e0e0e0; padding: 10px; border-radius: 8px; width: fit-content;">
        ${otp}
      </div>
      <p>This OTP is valid for 10 minutes.</p>
    </div>
  `;

  await transport.sendMail ({
    from:process.env.EMAIL,
    to:email,
    subject,
    html:html
  })
}