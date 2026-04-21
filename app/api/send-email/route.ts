// import nodemailer from "nodemailer";
// import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//   try {
//     const { name, email, phone, service, message } = await req.json();

//     if (!name || !email || !message) {
//       return NextResponse.json(
//         { success: false, error: "Missing required fields" },
//         { status: 400 }
//       );
//     }

//     const transporter = nodemailer.createTransport({
//       host: process.env.SMTP_HOST,
//       port: 465,
//       secure: true,
//       auth: {
//         user: process.env.SMTP_USER!,
//         pass: process.env.SMTP_PASS!,
//       },
//     });

//     const mailOptions = {
//       from: `"${name}" <${email}>`,
//       to: process.env.SEND_TO,
//       subject: "New Inquiry via Contact Form",
//       html: `
//         <div style="margin:0;padding:24px;background:#f4f4f5;font-family:Arial,sans-serif;color:#18181b;">
//           <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:680px;margin:0 auto;background:#0b0b0d;border:1px solid #27272a;border-radius:14px;overflow:hidden;">
//             <tr>
//               <td style="padding:22px 24px;background:linear-gradient(90deg,#0b0b0d 0%,#18181b 65%,#dc2626 100%);border-bottom:1px solid #27272a;">
//                 <div style="font-size:11px;letter-spacing:1.8px;font-weight:700;text-transform:uppercase;color:#a1a1aa;">Miraculous Soft Solutions</div>
//                 <div style="margin-top:8px;font-size:24px;line-height:1.2;font-weight:700;color:#ffffff;">New Contact Inquiry</div>
//                 <div style="margin-top:6px;font-size:13px;line-height:1.6;color:#d4d4d8;">A new lead has been submitted from your website contact form.</div>
//               </td>
//             </tr>
//             <tr>
//               <td style="padding:18px 24px 24px;background:#0b0b0d;">
//                 <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:separate;border-spacing:0 10px;">
//                   <tr>
//                     <td style="width:150px;padding:10px 12px;background:#18181b;border:1px solid #27272a;border-radius:8px 0 0 8px;font-size:12px;letter-spacing:1px;text-transform:uppercase;color:#a1a1aa;font-weight:700;">Name</td>
//                     <td style="padding:10px 12px;background:#18181b;border:1px solid #27272a;border-left:none;border-radius:0 8px 8px 0;font-size:14px;color:#f4f4f5;">${name}</td>
//                   </tr>
//                   <tr>
//                     <td style="width:150px;padding:10px 12px;background:#18181b;border:1px solid #27272a;border-radius:8px 0 0 8px;font-size:12px;letter-spacing:1px;text-transform:uppercase;color:#a1a1aa;font-weight:700;">Email</td>
//                     <td style="padding:10px 12px;background:#18181b;border:1px solid #27272a;border-left:none;border-radius:0 8px 8px 0;font-size:14px;color:#f4f4f5;">${email}</td>
//                   </tr>
//                   <tr>
//                     <td style="width:150px;padding:10px 12px;background:#18181b;border:1px solid #27272a;border-radius:8px 0 0 8px;font-size:12px;letter-spacing:1px;text-transform:uppercase;color:#a1a1aa;font-weight:700;">Phone</td>
//                     <td style="padding:10px 12px;background:#18181b;border:1px solid #27272a;border-left:none;border-radius:0 8px 8px 0;font-size:14px;color:#f4f4f5;">${phone || "Not provided"}</td>
//                   </tr>
//                   <tr>
//                     <td style="width:150px;padding:10px 12px;background:#18181b;border:1px solid #27272a;border-radius:8px 0 0 8px;font-size:12px;letter-spacing:1px;text-transform:uppercase;color:#a1a1aa;font-weight:700;">Service</td>
//                     <td style="padding:10px 12px;background:#18181b;border:1px solid #27272a;border-left:none;border-radius:0 8px 8px 0;font-size:14px;color:#f4f4f5;">${service || "Not specified"}</td>
//                   </tr>
//                 </table>

//                 <div style="margin-top:14px;padding:14px;background:#18181b;border:1px solid #27272a;border-radius:10px;">
//                   <div style="font-size:12px;letter-spacing:1px;text-transform:uppercase;color:#a1a1aa;font-weight:700;">Message</div>
//                   <div style="margin-top:8px;font-size:14px;line-height:1.7;color:#f4f4f5;white-space:pre-wrap;">${message}</div>
//                 </div>
//               </td>
//             </tr>
//           </table>
//           <div style="max-width:680px;margin:10px auto 0;text-align:center;font-size:12px;color:#71717a;">
//             Sent from the Miraculous Soft Solutions contact form.
//           </div>
//         </div>
//       `,
//     };

//     // Send email
//     await transporter.sendMail(mailOptions);

//     return NextResponse.json({ success: true });
//   } catch (error) {
//     console.error("Email sending error:", error);
//     return NextResponse.json(
//       { success: false, error: "Failed to send email" },
//       { status: 500 }
//     );
//   }
// }
