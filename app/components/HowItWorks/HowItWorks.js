import step1 from "@/app/assets/steps/step1.svg";
import step2 from "@/app/assets/steps/step2.svg";
import step3 from "@/app/assets/steps/step3.svg";
import step4 from "@/app/assets/steps/step4.svg";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

const steps = [
  {
    icon: step1,
    title: "Step 1",
    descr: "Your customers type in keywords on Google relating to your business",
  },
  {
    icon: step2,
    title: "Step 2",
    descr:
      "Your ad shows at the top of google for the searched keyword, and your customers sees it and clicks on your ad",
  },
  {
    icon: step3,
    title: "Step 3",
    descr:
      "Customers go through to a simple, yet custom landing page about your business with encouragement to call or email you.",
  },
  {
    icon: step4,
    title: "Step 4",
    descr:
      "Customers phone you or fill out a contact form for your service online, and you are sent the lead or the phone call is redirected to you.",
  },
];
export default function HowItWorks() {
  return (
    <div className="wrap grid lg:grid-cols-4 gap-2 xl:gap-6">
      {steps.map((step, i) => (
        <div key={i} className=" flex flex-col items-center gap-2 text-center text-black relative">
          {i !== 3 && (
            <div className="absolute left-full top-[60px] -translate-x-[36%] w-[40%]  h-[3px] bg-primary flex justify-end items-center">
              <ChevronRightIcon className="w-4 stroke-2 stroke-primary text-primary relative translate-x-1/2" />
            </div>
          )}
          <div className="w-[120px] h-[120px] rounded-full border-[3px] border-primary flex items-center justify-center relative">
            <img src={step.icon.src} alt={step.title} />
          </div>
          <h4 className="font-extrabold text-2xl leading-none mt-4 uppercase">{step.title}</h4>
          <p className="italic text-xl leading-relaxed font-light">{step.descr}</p>
        </div>
      ))}
    </div>
  );
}
