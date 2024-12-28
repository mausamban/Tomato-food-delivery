import { food_list } from "../assets/frontend_assets/assets";
import FoodItem from "./FoodItem";

const FoodList = ({ category }) => {
  return (
    <section className="food-container pl-3">
      <h2 className="font-semibold text-xl mb-4">Top dishes near you</h2>
      <div className="food-card-container flex flex-wrap justify-between items-center">
        {food_list.map((food, index) => {
          if (category === "all" || category === food.category) {
            return (
              <FoodItem
                key={index}
                id={food.id}
                name={food.name}
                description={food.description}
                price={food.price}
                image={food.image}
              />
            );
          }
        })}
      </div>
    </section>
  );
};

export default FoodList;
