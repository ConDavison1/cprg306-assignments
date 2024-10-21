"use client"

import { useState } from 'react';
import itemsData from './items.json';
import Item from './item';

export default function ItemList() {
    const [sortBy, setSortBy] = useState("name")

    const handleNameSort = () => { setSortBy("name"); };
    const handleCategorySort = () => { setSortBy("category"); };
    const handleGroupSort = () => { setSortBy("grouped"); };

    const sortedItems = [...itemsData].sort((a, b) => {
        if (sortBy === "name") {
            return a.name.localeCompare(b.name);
        }
        else if (sortBy === "category") {
            return a.category.localeCompare(b.category);
        }
        return 0;
    });
    return (
        <div className="p-4">
            <div className='inline-block font-mono'>
                Sort by:
            </div>

            <div className="mb-4 inline-block">
                <button onClick={handleNameSort} className="w-24 rounded bg-emerald-500 p-2 mx-2 font-mono border-2 hover:bg-emerald-700 border-emerald-700">
                    Name</button>
                <button
                    onClick={handleCategorySort} className="w-24 rounded bg-emerald-500 p-2 mx-2 font-mono border-2 hover:bg-emerald-700 border-emerald-700">
                    Category</button>
            </div>

            <ul>
                {sortedItems.map(item => (
                    <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
                ))}
            </ul>
        </div>
    );
}



