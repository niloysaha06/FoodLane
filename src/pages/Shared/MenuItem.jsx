import React from "react";

const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="flex space-x-4">
      <img
        className="w-28 h-24 bg-zinc-300 rounded-tr-full rounded-bl-full rounded-br-full"
        src={image}
        alt=""
      />
      <div>
        <p className="text-neutral-900 text-xl font-normal">{name}</p>
        <p className="w-96 text-neutral-500 text-base font-normal leading-relaxed">
          {recipe}
        </p>
      </div>
      <p className="text-yellow-600 text-xl font-normal leading-relaxed">
        {price}
      </p>
    </div>
  );
};

export default MenuItem;
