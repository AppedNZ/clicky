"use client";
import logo from "@/app/assets/logo-submit.png";
import stripe from "@/app/assets/stripe-purple.svg";
import { useEffect, useState } from "react";
import { locations } from "../../constants/locations";
import { plans } from "../../constants/plans";
import { services } from "../../constants/services";
import Button from "../Button";
import Input from "../Input";
import InputExpire from "../InputExpire";
import Plan from "../PricingPlans/Plan";
import ServiceSelect from "../ServiceSelect";
import StepWrapper from "./StepWrapper";

export default function SignUp() {
  const [show, setShow] = useState(false);
  const [step, setStep] = useState(1);
  const [pickedService, setPickedService] = useState(services[0]);
  const [location, setLocation] = useState(locations[0]);
  const [plan, setPlan] = useState();
  const onClose = () => {
    setShow(false);
    setStep(1);
  };
  const handleCustomEvent = (event) => {
    console.log(event.detail);
    if (event) {
      setShow(true);
      if (event.detail.service) {
        setPickedService(event.detail.service);
      }
      if (event.detail.region) {
        setLocation(event.detail.region);
      }
    }
  };
  useEffect(() => {
    window.addEventListener("show-signup", handleCustomEvent);

    return () => {
      window.removeEventListener("show-signup", handleCustomEvent);
    };
  }, []);
  useEffect(() => {
    // Prevent scrolling when the modal is open
    const originalOverflow = document.body.style.overflow;

    if (show) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    }

    // Cleanup function to restore the overflow when the modal closes
    return () => {
      document.body.style.overflow = originalOverflow; // Restore scrolling
    };
  }, [show]); // Run this effect whenever isOpen changes
  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen bg-black/60 z-30 flex justify-center items-end lg:items-center transition-all ${
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}>
      {step === 1 && (
        <StepWrapper title={"Get Started"} step={1} stepsCount={3} onClose={onClose}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setStep(2);
            }}
            className="w-full flex flex-col gap-6 3xl:gap-8">
            <div className="flex gap-6 3xl:gap-8 w-full">
              <Input
                addClassNames="input-shadow p-5 3xl:p-7"
                type="text"
                requried
                placeholder="Name"
              />
              <Input
                addClassNames="input-shadow p-5 3xl:p-7"
                type="text"
                requried
                placeholder="Email"
              />
            </div>
            <Input
              addClassNames="input-shadow p-5 3xl:p-7"
              type="text"
              requried
              placeholder="Phone"
            />
            <Input
              addClassNames="input-shadow p-5 3xl:p-7"
              type="text"
              requried
              placeholder="Business Name"
            />
            <ServiceSelect
              placeholder={"Service:"}
              colored
              value={pickedService}
              options={services}
              selectValueFn={setPickedService}
            />
            {pickedService?.value === "other" ? (
              <Input
                addClassNames="input-shadow p-5 3xl:p-7"
                type="text"
                requried
                placeholder="Your Service"
              />
            ) : (
              ""
            )}
            <ServiceSelect
              placeholder={"Region:"}
              value={location}
              options={locations}
              selectValueFn={setLocation}
            />
            <Button type="submit">NExt Step</Button>
          </form>
        </StepWrapper>
      )}
      {step === 2 && (
        <StepWrapper title={"Choose Plan"} step={2} stepsCount={3} onClose={onClose}>
          <div className="flex w-full i gap-6">
            {plans.map((plan, i) => (
              <Plan
                onClick={() => {
                  setPlan(plan.title);
                  setStep(3);
                }}
                key={plan.title}
                plan={plan}
              />
            ))}
          </div>
        </StepWrapper>
      )}
      {step === 3 && (
        <StepWrapper title={"Payment Details"} step={3} stepsCount={3} onClose={onClose}>
          <p className="text-xl italic font-light leading-none text-black  mb-8">
            Please enter debit/credit card details to continue
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setStep(4);
            }}
            className="w-full flex flex-col gap-6 3xl:gap-8">
            <Input
              addClassNames="input-shadow p-5 3xl:p-7 "
              type="text"
              requried
              placeholder="CARD NUMBER"
            />
            <div className="flex gap-6 3xl:gap-8 w-full">
              <InputExpire addClassNames="lg:w-2/3" />
              <Input
                addClassNames="input-shadow p-5 3xl:p-7 lg:w-1/3"
                type="text"
                requried
                placeholder="CVC"
              />
            </div>
            <p className="text-xl italic font-light leading-none text-black text-center">
              Secure via <img className="inline-flex h-10" src={stripe.src} alt="Stripe Logo" />
            </p>
            <Button type="submit">NExt Step</Button>
          </form>
        </StepWrapper>
      )}
      {step === 4 && (
        <StepWrapper title={"Payment Details"} step={4} stepsCount={3} onClose={onClose}>
          <div className="flex flex-col items-center ">
            <img
              className=" max-w-44 mb-8"
              width={logo.width}
              height={logo.height}
              src={logo.src}
              alt="Clicky"
            />
            <p className="text-3xl  font-extrabold leading-none text-black  mb-4 text-center text-balance uppercase">
              Thanks for signing up with us!
            </p>
            <p className="text-xl italic font-light leading-none text-black  mb-8 text-center">
              We will let you know when your campaign is setup.
            </p>
            <Button addClassName="w-full" onClick={onClose}>
              OK
            </Button>
          </div>
        </StepWrapper>
      )}
    </div>
  );
}
