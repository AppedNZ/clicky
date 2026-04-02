"use client";

import { useState } from "react";
import Button from "../Button";
import Heading from "../Heading";

export default function ContactUs({ onSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Sending");

    const data = {
      name,
      email,
      phone,
      message,
    };

    try {
      setLoading(true);

      const res = await fetch("/api/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      console.log("Response received");

      if (res.ok) {
        console.log("Response succeeded!");
        setSubmitted(true);

        // reset form
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");

        if (onSubmit) {
          setTimeout(onSubmit, 1000);
        }
      } else {
        console.error("Failed response", await res.json());
      }
    } catch (err) {
      console.error("Submit error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact-us" className="bg-light-gray w-full py-10 lg:py-20 2xl:py-40">
      <div className="wrap flex flex-col items-center gap-6">
        <Heading>Have Any Questions?</Heading>

        <p className="italic font-light text-2xl text-black">
          Fill out the below form or call us on{" "}
          <a className="text-primary not-italic font-bold" href="tel:+640211695214">
            021 169 5214
          </a>
        </p>

        {submitted && <p className="text-green-600 font-semibold">✅ Message sent successfully!</p>}

        <form
          onSubmit={handleSubmit}
          className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 2xl:gap-10 text-black text-xl leading-none w-full p-6 lg:p-8 2xl:p-16 bg-white rounded-[20px] shadow">
          <input
            type="text"
            placeholder="Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-[#F1F1F1] w-full rounded-[10px] p-5 xl:p-7"
          />

          <input
            type="text"
            placeholder="Phone"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="bg-[#F1F1F1] w-full rounded-[10px] p-5 xl:p-7"
          />

          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#F1F1F1] w-full rounded-[10px] p-5 xl:p-7"
          />

          <textarea
            rows={4}
            placeholder="Description"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="bg-[#F1F1F1] w-full rounded-[10px] p-5 xl:p-7 lg:col-span-3 resize-none"
          />

          <Button type="submit" addClassName="lg:col-span-3" disabled={loading}>
            {loading ? "Sending..." : "Submit"}
          </Button>
        </form>
      </div>
    </section>
  );
}
