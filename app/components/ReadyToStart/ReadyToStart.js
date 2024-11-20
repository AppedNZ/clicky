"use client";
import { triggerSignUpEvent } from "../../utils/customEvents";
import Heading from "../Heading";

export default function ReadyToStart() {
  return (
    <section className="bg-primary py-10">
      <div className="wrap grid lg:grid-cols-[1fr,max-content] gap-3 lg:gap-0 lg:gap-x-10">
        <Heading color="white" addClassName="max-lg:text-center">
          Ready To start Marketing?
        </Heading>
        <button
          onClick={() => {
            triggerSignUpEvent({
              detail: {},
            });
          }}
          className="p-6 md:px-12 bg-black font-extrabold uppercase text-2xl h-min self-center rounded-[10px] row-span-2">
          Let&apos;s Go!
        </button>
        <p className="text-xl lg:text-2xl max-lg:text-center">
          Sign up today to start generating leads for your NZ service business
        </p>
      </div>
    </section>
  );
}
