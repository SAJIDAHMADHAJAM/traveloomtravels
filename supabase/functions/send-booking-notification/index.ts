import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface BookingNotificationRequest {
  name: string;
  email: string;
  phone: string;
  package: string;
  travelDate: string;
  travelers: number;
  message?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const booking: BookingNotificationRequest = await req.json();
    
    console.log("Received booking notification request:", booking);

    // Send notification to admin
    const adminEmailResponse = await resend.emails.send({
      from: "Kashmir Tours <onboarding@resend.dev>",
      to: ["your-email@example.com"], // Replace with your actual email
      subject: `New Booking: ${booking.package} - ${booking.name}`,
      html: `
        <h1>New Booking Received!</h1>
        <h2>Customer Details</h2>
        <ul>
          <li><strong>Name:</strong> ${booking.name}</li>
          <li><strong>Email:</strong> ${booking.email}</li>
          <li><strong>Phone:</strong> ${booking.phone}</li>
        </ul>
        <h2>Trip Details</h2>
        <ul>
          <li><strong>Package:</strong> ${booking.package}</li>
          <li><strong>Travel Date:</strong> ${booking.travelDate}</li>
          <li><strong>Travelers:</strong> ${booking.travelers}</li>
        </ul>
        ${booking.message ? `<h2>Special Requests</h2><p>${booking.message}</p>` : ''}
        <hr>
        <p>Please respond to this booking at your earliest convenience.</p>
      `,
    });

    console.log("Admin email sent:", adminEmailResponse);

    // Send confirmation to customer
    const customerEmailResponse = await resend.emails.send({
      from: "Kashmir Tours <onboarding@resend.dev>",
      to: [booking.email],
      subject: "Booking Confirmation - Kashmir Tours",
      html: `
        <h1>Thank you for your booking, ${booking.name}!</h1>
        <p>We have received your booking request and will get back to you shortly.</p>
        <h2>Your Booking Details</h2>
        <ul>
          <li><strong>Package:</strong> ${booking.package}</li>
          <li><strong>Travel Date:</strong> ${booking.travelDate}</li>
          <li><strong>Number of Travelers:</strong> ${booking.travelers}</li>
        </ul>
        ${booking.message ? `<p><strong>Your Special Requests:</strong> ${booking.message}</p>` : ''}
        <hr>
        <p>If you have any questions, please don't hesitate to contact us.</p>
        <p>Best regards,<br>Kashmir Tours Team</p>
      `,
    });

    console.log("Customer confirmation email sent:", customerEmailResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        adminEmail: adminEmailResponse,
        customerEmail: customerEmailResponse 
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-booking-notification function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
