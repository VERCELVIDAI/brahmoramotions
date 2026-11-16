import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      fullName,
      brandName,
      email,
      phone,
      service,
      budget,
      description,
      honeypot,
    } = body;

    // Spam Honeypot Check
    if (honeypot) {
      return NextResponse.json(
        { error: "Spam detected." },
        { status: 400 }
      );
    }

    // Required Field Validation
    if (!fullName || !email || !phone || !service) {
      return NextResponse.json(
        { error: "Please fill in all required fields (Name, Email, Phone, Service)." },
        { status: 422 }
      );
    }

    // Simple email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 422 }
      );
    }

    // Log the enquiry on the server
    console.log("==========================================");
    console.log("NEW BRAHMORA MOTIONS PROJECT ENQUIRY");
    console.log("Timestamp:", new Date().toISOString());
    console.log("Name:", fullName);
    console.log("Brand:", brandName || "N/A");
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Service:", service);
    console.log("Budget:", budget || "Not Decided");
    console.log("Description:", description || "N/A");
    console.log("==========================================");

    // Return success response with prefilled WhatsApp handover URL
    const prefilledText = encodeURIComponent(
      `*New Website Enquiry — BRAHMORA MOTIONS*\n\n*Name:* ${fullName}\n*Brand:* ${
        brandName || "N/A"
      }\n*Email:* ${email}\n*Phone:* ${phone}\n*Service:* ${service}\n*Budget:* ${
        budget || "Not Decided"
      }\n\n*Description:*\n${description || "Let's connect."}`
    );

    const whatsappRedirect = `https://wa.me/917827557434?text=${prefilledText}`;

    return NextResponse.json({
      success: true,
      message: "Thank you! Your project enquiry has been registered with Brahmora Motions.",
      whatsappRedirect,
      whatsappUrl: whatsappRedirect,
    });
  } catch (error) {
    console.error("Error processing contact submission:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try WhatsApp directly or email hello@brahmoramorions.com" },
      { status: 500 }
    );
  }
}
