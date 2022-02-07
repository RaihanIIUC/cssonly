
# Using Only CSS

In this respiratory i actually make my hands on practice about 
various css framwwork. In the first time i only practicing css using 
css and then it looks prety promising for me to work on tailwind css , inspired by Azim vaia , It actually moved my
chesse . From then i never looks back for frontend. This i actually implement a hard one that i never thinks that i can but i done it.


## Acknowledgements

 - [frontendmentor](https://www.frontendmentor.io/home)
 - [cssbattle](https://cssbattle.dev/)
 - [shuffle dev](https://shuffle.dev/)
 - [React icons](https://react-icons.github.io/react-icons/search?q=heart)
 - [Tailwind css](https://tailwindcss.com/docs/outline-width)

## Screenshots

![Header Screenshots](https://user-images.githubusercontent.com/51045712/152744949-94c6ccfe-c2c1-4ac6-9cbf-363f74d39134.png)

![Restuarent Screenshots](https://user-images.githubusercontent.com/51045712/152745148-bba77144-e336-4930-98c9-b2d6e66470ca.png)

![image](https://user-images.githubusercontent.com/51045712/152745378-f4305955-8dc0-434a-b0ae-24107c4b25b8.png)
## Roadmap

- firstly creating Header with shadow

- food list box

- in details page , then cart box 

- image with overlay text



## Text overly on image , food details

```javascript
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
```

## Food Box using tailwind


````javascript
  <div className="w-full lg:w-1/3 px-3 mb-16 lg:mb-0 hover:shadow-xl hover:translate-x-1">
                <a className="block mb-10" href>
                    <div className="relative">
                        <img
                            className="w-full   object-cover"
                            src="images/sausly-s-cover-1637130769640.jpeg"
                            alt
                        />
                    </div>
                    <div className="mt-12">
                        <div className="mb-2 flex items-center justify-center md:mb-0">

                            <div className="md:w-1/5   mb-4 md:mb-0 flex  
                          w-16 h-16   rounded-5xl  ">
                                <img
                                    className=" rounded-lg"
                                    src="images/north-end-coffee-roasters-logo-1629873428586.png"
                                    alt="food"
                                />
                            </div>

                            <div class="w-full md:w-8/12 mb-4 md:mb-0">
                                <h3 className="mb-3 text-xl text-[#292f48] opacity-75 font-bold font-heading truncate">
                                    Salimar Garden Restora - Banani
                                </h3>
                                <p className="text-xl font-bold font-heading  ">
                                    <span className="text-xs px-1 text-gray-500 font-semibold font-heading">
                                        Bengali
                                    </span>
                                    <span className="text-xs px-1 text-gray-500 font-semibold font-heading">
                                        Indian
                                    </span>
                                    <span className="text-xs  px-1 text-gray-500 font-semibold font-heading">
                                        Kababi
                                    </span>
                                </p>
                            </div>
                            <div class="w-full md:w-1/6 mb-4 md:mb-0 flex flex-row divide-y-reverse">
                                <AiFillStar className="h-5 w-5 text-orange-400" />
                                <p>3.6/5</p>
                            </div>
                        </div>
                    </div>
                </a>
                {/* last sub box starts */}
                <div className="flex md:mb-0">
                    <div class="w-full md:w-1/6 md:mb-0 flex items-center gap-2">
                        <BsFillHeartFill className="h-5 w-5 text-teal-300" />
                        <p>134</p>
                    </div>
                    <div className="md:w-8/12"></div>

                    <div class="w-full md:w-1/5 md:mb-0">
                        <a
                            className="inline-block font-bold font-heading rounded-md transition duration-200"
                            href="#"
                        >
                            Tk.244
                        </a>
                    </div>
                </div>
            </div>
````

## React icons 
A lot of time I have to face lots of problems in Icon implementation. These react-icons combine all the icons in one place and easy to use.Just adding an address is changing the icon game. Let's Play the Icon Game.

```javascripts
If we need a Bootstrap icons then just
import { IconName } from "react-icons/bs";
if it is Ant design then
import { IconName } from "react-icons/ai";
if it's FontAwesome icons then
import { IconName } from "react-icons/fa";

and to add className to icons is ,
<BsSearch className="h-5 w-5 text-blue-500" />

````

## tailwind Width Percentenge

````javascript
w-1/2	width: 50%;
w-1/3	width: 33.333333%;
w-2/3	width: 66.666667%;
w-1/4	width: 25%;
w-2/4	width: 50%;
w-3/4	width: 75%;
w-1/5	width: 20%;
w-2/5	width: 40%;
w-3/5	width: 60%;
w-4/5	width: 80%;
w-1/6	width: 16.666667%;
w-2/6	width: 33.333333%;
w-3/6	width: 50%;
w-4/6	width: 66.666667%;
w-5/6	width: 83.333333%;
w-1/12	width: 8.333333%;
w-2/12	width: 16.666667%;
w-3/12	width: 25%;
w-4/12	width: 33.333333%;
w-5/12	width: 41.666667%;
w-6/12	width: 50%;
w-7/12	width: 58.333333%;
w-8/12	width: 66.666667%;
w-9/12	width: 75%;
w-10/12	width: 83.333333%;
w-11/12	width: 91.666667%;
w-full	width: 100%;
````
