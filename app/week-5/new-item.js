"use client";

import { useState } from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1)
    const [category, setCategory] = useState("Produce");
    const [name, setName] = useState("");

    const handleNameChange = (event) => setName(event.target.value);
    const handleCategoryChange = (event) => setCategory(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();
        const item = {
            name: name,
            quantity: quantity,
            category: category
        };
        console.log(item);

        alert(`Item Name: ${name}\nItem Quantity: ${quantity}\nItem Category: ${category}`)

        setName("")
        setCategory("Produce")
        setQuantity(1)
    };

    const increment = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1);
        }

    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);

        }
    }
    return (
        <div className="flex items-center justify-center h-screen p-3 bg-zinc-800 rounded">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-zinc-700 p-5 rounded-lg shadow-lg w-1/3 border-2 border-black">
                <div>

                    <input type="text"
                        value={name}
                        onChange={handleNameChange}
                        placeholder="Item Name"
                        required
                        className="w-full mt-1 border-2 border-black rounded font-mono text-bold text-gray-300 bg-zinc-800 p-2 ">
                    </input>
                </div>

                <div className="flex flex-row items-center gap-4">

                    <div className="flex items-center flex-row gap-2">
                        <button
                            type="button"
                            onClick={decrement}
                            disabled={quantity === 1}
                            className="px-3 py-2 bg-red-500 hover:bg-red-400 disabled:opacity-30 rounded-lg font-mono text-gray-300"
                        >
                            -
                        </button>
                        <div className="px-4 py-2 font-black rounded-lg font-mono text-gray-300 bg-zinc-800">
                            {quantity}
                        </div>
                        <button
                            type="button"
                            onClick={increment}
                            disabled={quantity === 20}
                            className="px-3 py-2 bg-red-500 hover:bg-red-400 disabled:opacity-30 rounded-lg font-mono text-gray-300"
                        >
                            +
                        </button>
                    </div>

                    <div className="flex-1">
                        <select
                            value={category}
                            onChange={handleCategoryChange}
                            className="w-full mt-1 border-2 border-black rounded font-mono font-bold bg-zinc-800 text-gray-300 p-2"
                        >

                            <option value="" disabled>
                                Category
                            </option>
                            <option value="Produce">Produce</option>
                            <option value="Dairy">Dairy</option>
                            <option value="Bakery">Bakery</option>
                            <option value="Meat">Meat</option>
                            <option value="Frozen">Frozen Foods</option>
                            <option value="Canned">Canned Goods</option>
                            <option value="Dry">Dry Goods</option>
                            <option value="Beverage">Beverages</option>
                            <option value="Snack">Snacks</option>
                            <option value="Household">Household</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                </div>

                <div className="flex justify-center">
                    <button className="px-4 py-2 bg-red-500 hover:bg-red-400 disabled:opacity-30 rounded-lg font-mono text-gray-300">
                        Add To List
                    </button>
                </div>
            </form>
        </div>
    );
}