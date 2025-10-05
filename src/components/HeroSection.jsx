import React from "react";
import profilePic from "../assets/linkedin-photo.png";
import SocialIcons from "./SocialIcons";

function HeroSection() {
  return (
    <section className="flex justify-between items-center py-20">
      <div className="max-w-[520px]">
        <h1 className="font-poetsen text-3xl tracking-wide">
          VIKTORIIA VINNYKOVA
        </h1>
        <p className="font-roboto-mono lowercase mt-2">
          Junior Full-Stack Developer
        </p>
        <p className="font-roboto text-base lowercase mt-8 leading-7">
          Passionate builder focused on transforming complex challenges into
          efficient, user-centric web and mobile solutions.
        </p>
        <SocialIcons />
      </div>
      <div className="flex-shrink-0 ml-8">
        <img
          src={profilePic}
          alt="Viktoriia Vinnykova"
          className="w-80 h-auto rounded-lg"
        />
      </div>
    </section>
  );
}

export default HeroSection;
