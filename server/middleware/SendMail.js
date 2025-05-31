import { createTransport } from "nodemailer";

export const SendMail = async (email, subject,otps) => {
  const transport = createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, 
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  const html = `
    <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #fff; border: 1px solid #eee; border-radius: 10px; max-width: 500px; margin: auto;">
      <h2 style="color: rgb(252, 124, 104);">Your OTP Code</h2>
      <p style="font-size: 16px; color: #333;">Use the following OTP to verify your account:</p>
      <div style="font-size: 32px; font-weight: bold; background: rgb(252, 124, 104); color: white; padding: 12px 20px; border-radius: 8px; width: fit-content;">
        ${otps}
      </div>
      <p style="color: #666; margin-top: 15px;">This OTP is valid for 10 minutes. Do not share it with anyone.</p>
      <p style="margin-top: 30px; font-size: 12px; color: #999;">Thank you for using our service.</p>
    </div>
  `;

  await transport.sendMail({
    from: `"MernBot Auth" <${process.env.EMAIL}>`,
    to: email,
    subject,
    html,
  });

};
