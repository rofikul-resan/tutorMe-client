"use client";
import { Button, Input, Textarea } from "@nextui-org/react";
import React from "react";

const ContactUsSection = () => {
  return (
    <div className="mt-16">
      <section className="text-gray-600 body-font relative">
        <div className="absolute inset-0 bg-gray-300">
          <iframe
            width="100%"
            height="100%"
            loading="lazy"
            title="map"
            src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
          ></iframe>
          <div className="bg-black/50 absolute inset-0 z-10 "></div>
        </div>
        <div className="container px-5 py-24 mx-auto flex items-center text-orange-900">
          <div class="bg-white/40  relative z-10 flex flex-wrap py-6 rounded shadow-md w-fit ml-10 h-fit ">
            <div class="lg:w-1/2 px-6">
              <h2 class="font-semibold text-gray-900 tracking-widest ">
                ADDRESS
              </h2>
              <p class="mt-1">
                Photo booth tattooed prism, portland taiyaki hoodie neutra
                typewriter
              </p>
            </div>
            <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 class=" font-semibold text-gray-900 tracking-widest ">
                EMAIL
              </h2>
              <a class="text-indigo-900 leading-relaxed">example@email.com</a>
              <h2 class="font-semibold text-gray-900 tracking-widest mt-4">
                PHONE
              </h2>
              <p class="leading-relaxed">123-456-7890</p>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Feedback
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Post-ironic portland shabby chic echo park, banjo fashion axe
            </p>
            <div className="relative mb-4">
              <Input
                type="email"
                label="Email"
                placeholder="Enter your email"
                name="email"
              />
            </div>
            <div className="relative mb-4">
              <Textarea label="Message" id="message" name="message"></Textarea>
            </div>
            <Button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Button
            </Button>
            <p className="text-xs text-gray-500 mt-3">
              Chicharrones blog helvetica normcore iceland tousled brook viral
              artisan.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsSection;
