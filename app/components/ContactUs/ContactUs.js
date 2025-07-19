import Button from "../Button";
import Heading from "../Heading";

export default function ContactUs() {
  return (
    <section id="contact-us" className="bg-light-gray w-full py-10 lg:py-20 2xl:py-40">
      <div className="wrap flex flex-col items-center gap-6">
        <Heading>Have Any Questions?</Heading>
        <p className="italic font-light text-2xl text-black">
          Fill out the below form or call us on{" "}
          <a className="text-primary not-italic font-bold" href="tel:0800 249 203">
            0800 249 203
          </a>
        </p>
        <form className=" mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 2xl:gap-10 text-black text-xl leading-none w-full p-6 lg:p-8 2xl:p-16 bg-white rounded-[20px] shadow">
          <input
            type="text"
            placeholder="Name"
            required
            className="bg-[#F1F1F1] w-full rounded-[10px] p-5 xl:p-7"
          />
          <input
            type="text"
            placeholder="Phone"
            required
            className="bg-[#F1F1F1] w-full rounded-[10px] p-5 xl:p-7"
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="bg-[#F1F1F1] w-full rounded-[10px] p-5 xl:p-7"
          />
          <textarea
            rows={4}
            placeholder="Description"
            required
            className="bg-[#F1F1F1] w-full rounded-[10px] p-5 xl:p-7 lg:col-span-3 resize-none"
          />
          <Button type="submit" addClassName="lg:col-span-3">
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
}
