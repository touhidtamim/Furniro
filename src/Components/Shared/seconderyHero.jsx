import React from "react";
import Heroimg from "../../../public/Images/HeroImg/HeroImg.webp";

const SecondaryHero = () => {
  return (
    <section className="w-full">
      <div className="w-full overflow-hidden">
        <img
          src={Heroimg}
          alt="Furniro Hero Banner"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default SecondaryHero;
