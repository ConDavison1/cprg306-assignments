export default function Item(items) {
    let {
        name,
        quantity,
        category,
        onSelect
    } = items;


    return (
        <div className="bg-zinc-700 mx-2 my-3 w-1/4 h-30 pl-2 pt-1 pb-1 border-2 border-black cursor-pointer hover:bg-zinc-600 " onClick={() => onSelect && onSelect({ name, quantity, category })}>
            <ul>
                <li>
                    <h3 className="text-xl font-bold font-mono" >{name}</h3>
                </li>
                <li>
                    <p className="font-mono text-gray-300">Buy {quantity} in {category}</p>
                </li>

            </ul>

        </div>
    );
};