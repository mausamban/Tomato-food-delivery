import { useState } from "react";
import { assets } from "../assets/frontend_assets/assets/";

function FoodItem({ id, name, description, price, image }) {
  const [itemCount, setItemcount] = useState(0);

  return (
    <div
      className="food-cards w-[21%] shadow-sm shadow-[#ccc] overflow-hidden pb-2 rounded-2xl m-4 hover:shadow-lg hover:scale-105 transition-all animate-fadeIn"
      key={id}
    >
      <div className="image-container relative">
        <img src={image} alt={name} />
        <div className="item-count absolute right-2 bottom-2 flex gap-2 bg-[rgba(255,255,255,.7)] rounded-full px-3 py-1">
          {!itemCount ? (
            <img
              src={assets.add_icon_white}
              className="h-7"
              onClick={() => setItemcount((prev) => prev + 1)}
            />
          ) : (
            <>
              <img
                src={assets.add_icon_green}
                className="bg-[rgba(255,0,0,0.51)] rounded-full h-full w-7 flex items-center justify-center text-xl"
                onClick={() => setItemcount((prev) => prev + 1)}
              />
              <h3>{itemCount}</h3>
              <img
                src={assets.remove_icon_red}
                className="bg-[rgba(0,255,0,0.51)] rounded-full h-full w-7 flex items-center justify-center text-xl"
                onClick={() => setItemcount((prev) => prev - 1)}
              />
            </>
          )}
        </div>
      </div>
      <div className="food-details px-4 w-full">
        <div className="food-name flex justify-between items-center">
          <h3 className="font-semibold mt-2">{name}</h3>
          <img
            src={assets.rating_starts}
            alt={"ratings"}
            className="h-[15px] mt-2"
          />
        </div>
        <p className="text-sm opacity-60 leading-4 py-1">{description}</p>
        <p className="text-red-500 font-bold">${price}</p>
      </div>
    </div>
  );
}

export default FoodItem;
