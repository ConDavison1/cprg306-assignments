import Item from "./item";
import ItemList from "./item-list";



export default function Page() {
    return (
        <main className="bg-zinc-800 text-white">
            <title>Shopping List</title>
            <h1 className="font-bold text-3xl pt-2 pl-7 font-mono" >Shopping List</h1>
            <div className="pl-3">
                <ItemList />
            </div>

        </main>
    );
}