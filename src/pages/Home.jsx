import heroimg from "../../public/images/hero.png";
import cart from "../../public/icons/shopping_cart.png";
import decor from "/public/images/decor.png";

import Autoplay from "embla-carousel-autoplay";
import Marquee from "react-fast-marquee";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { useRef } from "react";

const Home = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  const products = [
    {
      id: 1,
      name: "CHOCOLATE CAKE",
      price: 20,
      img: heroimg,
    },
    {
      id: 2,
      name: "STRAWBERRY CAKE",
      price: 25,
      img: heroimg,
    },
    {
      id: 3,
      name: "BLUEBERRY CAKE",
      price: 30,
      img: heroimg,
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      img: "../../public/images/avatar2.png",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur auctor dolor sit amet, consectetur adipiscing elit. dolor sit amet, consectetur adipiscing elit.dolor sit amet, consectetur adipiscing elit. ",
    },
    {
      id: 2,
      name: "Jane Doe",
      img: "../../public/images/avatar1.png",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur auctor dolor sit amet, consectetur adipiscing elit. dolor sit amet, consectetur adipiscing elit.dolor sit amet, consectetur adipiscing elit. ",
    },
    {
      id: 3,
      name: "John Smith",
      img: "../../public/images/avatar3.png",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur auctor dolor sit amet, consectetur adipiscing elit. dolor sit amet, consectetur adipiscing elit.dolor sit amet, consectetur adipiscing elit. ",
    },
  ];

  return (
    <>
      <section className="w-full h-screen font-arvo">
        <div className="w-full h-2/3 p-12 flex flex-col items-center justify-start gap-10 relative bg-[url('../../public/images/bg-grid.png')] bg-cover">
          <h1 className="text-center text-7xl font-bold text-prim">
            Indulge in
            <br /> Sweet Perfection
          </h1>
          <div className="flex gap-2">
            <button className="border-2 border-black bg-lightyellow px-4 py-2 rounded-full font-bold">
              ORDER NOW
            </button>
            <button className="px-4 py-2 ">📞 CONTACT US</button>
          </div>

          <div className="absolute top-16 left-[10%] -rotate-[20deg] w-36 text-center px-4 py-2 text-xl font-bold text-white rounded-3xl border border-black  bg-lightorange animate-pulse">
            FRESH
          </div>
          <div className="absolute bottom-20 left-[20%] rotate-[15deg] w-36 text-center px-4 py-2 text-xl font-bold text-white rounded-3xl border border-black  bg-lightgreen animate-pulse">
            TASTY
          </div>
          <div className="absolute top-14 right-[20%] rotate-12 w-36 text-center px-4 py-2 text-xl font-bold text-white rounded-3xl border border-black  bg-lightpurple animate-pulse">
            SWEET
          </div>
          <div className="absolute bottom-14 right-[25%] -rotate-3 w-36 text-center px-4 py-2 text-xl font-bold text-white rounded-3xl border border-black bg-lightblue animate-pulse">
            YUMMY
          </div>
          <div className="absolute bottom-1/2 right-16 -rotate-12 w-36 text-center px-4 py-2 text-xl font-bold text-white rounded-3xl border border-black bg-red-500 animate-pulse">
            SUPERB
          </div>
        </div>
        <div className="w-full h-1/3 bg-lightyellow relative">
          <img
            src={heroimg}
            alt="hero image"
            className="w-1/3 absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </section>

      <Marquee
        autoFill={true}
        className="font-arvo font-bold text-3xl p-8 bg-prim text-white "
      >
        <div className="mx-6">BIRTHDAY</div>
        <div className="mx-6">✨</div>
        <div className="mx-6">WEDDING</div>
        <div className="mx-6">✨</div>
        <div className="mx-6">ANNIVERSARY</div>
        <div className="mx-6">✨</div>
        <div className="mx-6">GRADUATION</div>
        <div className="mx-6">✨</div>
        <div className="mx-6">VALENTINE&apos;S</div>
        <div className="mx-6">✨</div>
        <div className="mx-6">CUSTOM</div>
        <div className="mx-6">✨</div>
      </Marquee>

      <section className="w-full font-arvo px-32 py-56 bg-lightgray">
        <h1 className=" text-5xl font-bold text-center relative">
          OUR BEST SELLERS
          <span className="absolute -bottom-0 translate-x-1/3 left-1/3">
            <img src={decor} alt="decor" />
          </span>
        </h1>
        <div className=" flex mt-32 gap-5">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 flex flex-col items-start gap-5 rounded-3xl shadow-sm border-2 border-ter hover:scale-105 transition-all ease-in-out duration-300"
            >
              <div className="bg-ter flex items-center justify-center rounded-3xl">
                <img src={product.img} alt={product.name} className="w-2/3" />
              </div>
              <div className=" flex justify-between w-full">
                <div className=" flex flex-col">
                  <div className="text-xl font-bold ">{product.name}</div>
                  <div className="text-lg mt-1">${product.price}</div>
                </div>
                <button className="">
                  <img
                    src={cart}
                    alt="cart"
                    className="h-10 w-10 border rounded-full border-black p-2"
                  />
                </button>
              </div>
              <div className="flex justify-center w-full">
                <button className="border bg-lightyellow rounded-full px-4 py-2 font-bold border-black">
                  ORDER NOW
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full font-arvo px-32 py-36 bg-white">
        <Carousel
          plugins={[plugin.current]}
          className="w-5/6 mx-auto bg-lightorange rounded-3xl py-10 relative "
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <div className="flex justify-center">
            <span className="text-white text-5xl font-bold text-center relative ">
              TESTIMONIALS
              <span className="absolute -bottom-0 -right-20 ">
                <img src={decor} alt="decor" />
              </span>
            </span>
          </div>
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id}>
                <div className=" p-8 flex flex-col items-center gap-5 rounded-3xl">
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="w-32 h-32 rounded-full border-4 border-lightyellow"
                  />
                  <h3 className="text-center text-lg font-bold text-white">
                    {testimonial.name}
                  </h3>
                  <div className="w-2/3 text-center text-slate-50">
                    {testimonial.review}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-6 -translate-y-1/2" />
          <CarouselNext className="absolute right-6 -translate-y-1/2" />
        </Carousel>
      </section>
    </>
  );
};

export default Home;
