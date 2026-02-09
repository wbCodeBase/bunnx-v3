import nodemailer from "nodemailer"

// Configure nodemailer with your email service
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number.parseInt(process.env.EMAIL_PORT || "587"), 
  auth: {
    user: process.env.EMAIL, 
    pass: process.env.EMAIL_PASS,
  },
}) 



export const sendLeadNotification = async (leadData) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL,
      to: "whitebunniewebleads@gmail.com",
      subject: "New Lead Notification from Bunnx Website",
      html: `
        <h1>Bunnx Lead Details</h1>
        <p><strong>Name:</strong> ${leadData.name || "N/A"}</p>
        <p><strong>Email:</strong> ${leadData.email || "N/A"}</p>
        <p><strong>Phone:</strong> ${leadData.phone || "N/A"}</p>
        <p><strong>Message:</strong> ${leadData.message || "N/A"}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
      `,
    }

    const info = await transporter.sendMail(mailOptions)
    console.log("Email sent successfully:", info.response)
    return true
  } catch (error) {
    console.error("Error sending email:", error)
    return false
  }
}























