"use client"

import ItemList from "./item-list";
import NewItem from "../week-7/new-item";
import itemsData from './items.json';
import { useState } from "react";




export default function Page() {

    const [items, setItems] = useState(itemsData);

    const handleAddItem = (newItem) => {
        setItems((prevItems) => [...prevItems, newItem]);
    };
    return (
        <main className="bg-zinc-800 text-white">
            <title>Shopping List</title>
            <h1 className="font-bold text-3xl pt-2 pl-7 font-mono" >Shopping List</h1>
            <div className="pl-3">
                <NewItem onAddItem={handleAddItem} />
                <ItemList items={items} />

            </div>

        </main>
    );
}