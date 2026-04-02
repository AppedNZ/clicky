import emailjs from "@emailjs/nodejs";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message, phone } = body || {};

    const templateParams = {
      name,
      email,
      message,
      phone,
    };

    const response = await emailjs.send(
      process.env.SERVICE_ID,
      process.env.TEMPLATE_ID,
      templateParams,
      {
        publicKey: process.env.USER_ID,
        privateKey: process.env.USER_PRIVATE_ID,
      },
    );

    console.log("SUCCESS!", response.status, response.text);

    return Response.json({
      done: true,
      response,
    });
  } catch (err) {
    console.error("FAILED...", err);

    return Response.json(
      {
        done: false,
        error: err?.message || "Unknown error",
      },
      { status: 500 },
    );
  }
}
