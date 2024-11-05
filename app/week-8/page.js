"use client"

import ItemList from "./item-list";
import NewItem from "../week-8/new-item";
import itemsData from './items.json';
import { useState } from "react";
import MealIdeas from "./meal-ideas";




export default function Page() {

    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");

    const handleItemSelect = (item) => {

        const clean = item.name
            .split(",")[0]
            .trim()
            .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\u2011-\u26FF])/g, '');

        setSelectedItemName(clean);
    };

    const handleAddItem = (newItem) => {
        setItems((prevItems) => [...prevItems, newItem]);
    };
    return (
        <main className="bg-zinc-800 text-white min-h-screen p-5">
            <title>Shopping List</title>
            <h1 className="font-bold text-3xl mb-5 font-mono">Shopping List</h1>
            <div className="flex gap-4">
                <div className="flex flex-col w-1/2 flex-grow">
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList items={items} onItemSelect={handleItemSelect} />
                </div>
                <div className="flex-1 w-1/4">
                    {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
                </div>
            </div>
        </main>
    );

}