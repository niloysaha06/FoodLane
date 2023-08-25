import { Link } from "react-router-dom";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Food Card" />
      </figure>
      <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">
        {price}
      </p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <Link>
            <button className="btn btn-outline bg-slate-100 border-0 border-orange-400 border-b-4 mt-3">
              Order Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
