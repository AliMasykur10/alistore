import React from "react";

export default function Card() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <img src="#" alt="#" className="w-full h-48 object-cover mb-4" />
      <h3 className="text-lg font-semibold mb-2">titel</h3>
      <p className="text-gray-700 mb-4">$15.00</p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">Add to Cart</button>
    </div>
  );
}
