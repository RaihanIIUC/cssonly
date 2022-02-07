import React from "react";
import { AiFillStar, AiOutlineInfoCircle } from "react-icons/ai";
import { BsDot, BsHeart } from "react-icons/bs";

const HardImage = () => {
  return (
    <div>
      <section class="px-4 lg:py-5 lg:px-16">
        <div class="relative py-14 xl:py-52">
          <img
            className="absolute top-0 left-0 rounded-xl h-3/5 object-cover  w-full"
            src="images/cover-1606641339341.jpg"
            alt
          />
          <div class="relative container px-4 mx-auto">
            <div class="px-2 md:pl-5">
              {/* new components for text over image  starts */}
              <div className=" flex items-center justify-center md:mb-0 gap-1">
                <div
                  className="md:w-1/12 md:mb-0 flex  
                            rounded-5xl  "
                >
                  <img
                    className=" rounded-lg"
                    src="images/north-end-coffee-roasters-logo-1629873428586.png"
                    alt="food"
                  />
                </div>

                <div class="w-full md:w-4/12 md:mb-0">
                  <div className=" text-xl  flex flex-row  gap-1 font-bold font-heading truncate  items-center">
                    <h3 className="text-white ">Salimar Garden- Banani</h3>
                    <span>
                      <AiOutlineInfoCircle className="h-5 w-5 text-white" />
                    </span>
                    <span>
                      <AiFillStar className="h-5 w-5 text-white" />
                    </span>
                    <p className="text-white">3.6/5</p>
                  </div>
                  <p className="text-xl font-bold font-heading  flex flex-row items-center">
                    <span className="text-xs px-1 text-white  font-semibold font-heading">
                      Bengali
                    </span>
                    <span className="text-xs px-1 text-white  font-semibold font-heading">
                      Indian
                    </span>
                    <span className="text-xs  px-1 text-white font-semibold font-heading">
                      Kababi
                    </span>
                    <BsDot className="h-5 w-5 text-white" />

                    <span className="text-xs  px-1 text-white font-semibold font-heading">
                      Open now
                    </span>
                  </p>
                </div>
                <div className="md:w-3/5 md:mb-0 flex flex-row-reverse items-center text-white  gap-2 ">
                  <p>Tk.122</p>
                  <BsHeart className="h-10 w-10 " />
                </div>
              </div>
              {/* ends */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HardImage;
