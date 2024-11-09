"use client";
import { useEffect, useState } from "react";
import { locations } from "../../constants/locations";
import { services } from "../../constants/services";
import Button from "../Button";
import Heading from "../Heading";
import ServiceSelect from "../ServiceSelect";
import styles from "./ServiceAvailability.module.scss";
import ServiceAvailabilityMap from "./ServiceAvailabilityMap";
const whats_taken = {
  plumbing: ["Auckland"],
  "carpet-cleaning": ["Hamilton", "Tauranga"],
};
export default function ServiceAvailability() {
  const [pickedService, setPickedService] = useState(services[0]);
  const [location, setLocation] = useState(locations[0]);
  const [isAvailable, setIsAvailable] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setSubmitted(false);
  }, [location.value, pickedService.value]);
  return (
    <section className="bg-light-gray py-10 xl:py-20 3xl:py-32  items-center">
      <div className="wrap flex flex-col items-center justify-between lg:flex-row gap-8 lg:gap-10 ">
        <Heading className="lg:hidden">Availability</Heading>
        <div className="flex flex-col items-center lg:items-start max-lg:order-1 ">
          <Heading addClassName="max-lg:hidden">Availability</Heading>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
              if (whats_taken?.[pickedService.value]?.includes(location.value)) {
                setIsAvailable(false);
              }
            }}
            className="bg-white rounded-[20px] shadow p-6 xl:p-10 3xl:p-12 flex flex-col text-black  lg:mt-12 ">
            <p className="font-extrabold uppercase text-2xl lg:text-3xl mb-4">
              Select Region & Service
            </p>
            <span className="italic lg:text-xl mb-5 lg:mb-10 max-lg:text-center">
              We only take one business per region so check your availability
            </span>

            <ServiceSelect
              placeholder={"Service:"}
              colored
              value={pickedService}
              options={services}
              selectValueFn={setPickedService}
              addClassNames="mb-10"
            />
            <ServiceSelect
              placeholder={"Region:"}
              value={location}
              options={locations}
              selectValueFn={setLocation}
              addClassNames="mb-10"
            />

            <div
              className={`${styles.availability} ${
                submitted ? (isAvailable ? styles.available : styles.taken) : ""
              }`}>
              {!submitted
                ? `Pick Service, Region and Submit`
                : isAvailable
                ? "This Region is Available!"
                : "This region is taken!"}
            </div>

            <Button type="submit">Submit</Button>
          </form>
        </div>
        <div className="w-2/3 lg:w-1/2 max-w-[650px] ">
          <ServiceAvailabilityMap
            location={location.value}
            taken={whats_taken?.[pickedService.value] ?? []}
          />
        </div>
      </div>
    </section>
  );
}
