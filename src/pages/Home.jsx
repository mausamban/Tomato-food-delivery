import { menu_list } from "../assets/frontend_assets/assets";
import { useState } from "react";
import FoodList from "../components/FoodList";
import Footer from "../components/Footer";

const Home = () => {
  const [category, setCategory] = useState("all");

  return (
    <>
      <section className="main px-[10vw]">
        <header className="h-[70vh] w-[80vw] border-2 flex flex-col justify-end text-left text-white px-12 py-7 mt-6 bg-header_img bg-cover bg-center rounded-[30px] bg-no-repeat">
          <div className="header-content w-[70%] animate-fadeIn">
            <h1 className="text-[65px] leading-[10vh] font-semibold">
              order your <br />
              favourite food here .
            </h1>

            <p className="opacity-6 text-[#f2f2f2]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
              expedita inventore enim sequi dolorum eveniet quasi, porro
              accusantium veritatis explicabo voluptas vel aspernatur, quidem
              quia suscipit! Expedita tenetur quo earum?
            </p>

            <button className="border-2 rounded-full px-5 py-1 mt-2 bg-white text-black hover:border-transparent transition-all ">
              view menu
            </button>
          </div>
        </header>

        <section className="menu pl-3">
          <h2 className="font-semibold text-xl mt-5 mb-2 ">Explore our menu</h2>
          <p className="text-[#afa3a3] mb-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
            distinctio quasi ab praesentium rerum asperiores <br /> quam hic sed
            minus sunt, blanditiis fuga tenetur cum unde odit debitis esse illum
            est?
          </p>

          <div className="flex justify-between px-16 mb-8 border-b-2 pb-6">
            {menu_list.map((item, index) => {
              return (
                <div
                  key={index}
                  onClick={() =>
                    setCategory((prev) =>
                      prev === item.menu_name ? "all" : item.menu_name
                    )
                  }
                  className="menu-item-info flex flex-col items-center justify-center rounded-full"
                >
                  <img
                    src={item.menu_image}
                    alt={item.menu_name}
                    className={
                      category === item.menu_name
                        ? "h-24 w-24 rounded-full mt-3 cursor-pointer border-2 border-red-500 p-[2px]"
                        : "h-24 w-24 rounded-full mt-3 cursor-pointer"
                    }
                  />
                  <h3 className="mt-3">{item.menu_name}</h3>
                </div>
              );
            })}
          </div>
        </section>

        <section className="food-container">
          <FoodList category={category} setCategory={setCategory} />
        </section>
      </section>
    </>
  );
};

export default Home;
