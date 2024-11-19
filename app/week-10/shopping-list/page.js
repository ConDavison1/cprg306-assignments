"use client"

import { getItems, addItem } from "../_services/shopping-list-service";
import { useUserAuth } from "../_utils/auth-context";
import ItemList from "./item-list";
import NewItem from "./new-item";
import { useEffect, useState } from "react";
import MealIdeas from "./meal-ideas";
import Link from "next/link";



export default function Page() {

    const { user } = useUserAuth();

    if (!user) {
        return (
            <main className="bg-zinc-800 text-white min-h-screen p-5 flex flex-col items-center justify-center">
                <p>You must be logged in to view your shopping list.</p>
                <Link href="/week-10/">Return to sign-in page</Link>
            </main>
        );
    }

    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState("");

    const loadItems = async () => {
        if (user?.uid) {
            try {
                const fetchedItems = await getItems(user.uid);
                setItems(fetchedItems);
            } catch (error) {
                console.error("Failed to load shopping list items:", error);
            }
        }
    };

    useEffect(() => {
        loadItems();
    }, [user]);

    const handleItemSelect = (item) => {

        const clean = item.name
            .split(",")[0]
            .trim()
            .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\u2011-\u26FF])/g, '');

        setSelectedItemName(clean);
    };

    const handleAddItem = async (newItem) => {
        if (user?.uid) {
            try {
                const newItemId = await addItem(user.uid, newItem);

                setItems((prevItems) => [
                    ...prevItems,
                    { id: newItemId, ...newItem }
                ]);
            } catch (error) {
                console.error("Failed to add item:", error);
            }
        }
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