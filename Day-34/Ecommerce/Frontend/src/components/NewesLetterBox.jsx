import React from "react";

const NewesLetterBox = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe now & get 10% off on your first purchase
      </p>
      <p className="text-gray-400 mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
        fugiat?
      </p>
      <form className="flex items-center w-full sm:w-1/2 gap-3 mx-auto my-6 border pl-3 ">
        <input
          type="email"
          placeholder="Enter your Email"
          required
          className="w-full sm:flex-1 outline-none"
        />
        <button
          className="bg-black text-sm text-white px-10 py-4"
          onClick={onSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewesLetterBox;
