
# Using Only CSS

In this respiratory i actually make my hands on practice about 
various css framwwork. In the first time i only practicing css using 
css and then it looks prety promising for me to work on tailwind css , inspired by Azim vaia , It actually moved my
chesse . From then i never looks back for frontend. This i actually implement a hard one that i never thinks that i can but i done it.


## Acknowledgements

 - [frontendmentor](https://www.frontendmentor.io/home)
 - [cssbattle](https://cssbattle.dev/)
 - [shuffle dev](https://shuffle.dev/)


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

