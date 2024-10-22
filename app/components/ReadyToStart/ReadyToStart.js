import Heading from "../Heading";

export default function ReadyToStart() {
  return (
    <section className="bg-primary py-10">
      <div className="wrap grid lg:grid-cols-[1fr,max-content] gap-3 lg:gap-0 lg:gap-x-10">
        <Heading color="white">Ready To start Marketing?</Heading>
        <button className="p-6 md:px-12 bg-black font-extrabold uppercase text-2xl h-min self-center rounded-[10px] row-span-2">
          Let&apos;s Go!
        </button>
        <p className="text-2xl">
          Sign up today to start generating leads for your NZ service business
        </p>
      </div>
    </section>
  );
}
