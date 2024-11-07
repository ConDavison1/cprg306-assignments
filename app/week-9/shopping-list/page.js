"use client"

import { useUserAuth } from "../_utils/auth-context";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from './items.json';
import { useState } from "react";
import MealIdeas from "./meal-ideas";




export default function Page() {

    const { user } = useUserAuth();

    if (!user) {
        return (
            <main className="bg-zinc-800 text-white min-h-screen p-5 flex flex-col items-center justify-center">
                <p>You must be logged in to view your shopping list.</p>
                <Link href="/week-9/">Return to sign-in page</Link>
            </main>
        );
    }

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