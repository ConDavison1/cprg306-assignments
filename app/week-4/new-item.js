"use client";

import { useState } from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1)

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
        <div className="flex items-center justify-center h-screen p-3 gap-4 bg-zinc-800">
            <div
                className="bg-zinc-700 p-5 rounded-lg shadow-lg flex flex-col items-center gap-4 border-black border-2">
                <div
                    className="px-2 py-2 font-black p-5 rounded-lg font-mono text-gray-300">
                    {quantity}
                </div>

                <button onClick={increment} disabled={quantity === 20}
                    className="flex px-4 py-2 bg-red-500 hover:bg-red-400 disabled:opacity-30 rounded-lg font-mono text-gray-300">
                    Add
                </button>
                <button onClick={decrement} disabled={quantity === 1}
                    className="flex px-4 py-2 bg-red-500 hover:bg-red-400 disabled:opacity-30 rounded-lg font-mono text-gray-300">
                    Remove
                </button>
            </div>
        </div>
    );
};