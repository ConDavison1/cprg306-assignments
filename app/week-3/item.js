export default function Item(items) {
    let {
        name,
        quantity,
        category
    } = items;


    return (
        <div className="bg-zinc-700 mx-2 my-5 w-1/4 h-30 pl-2 pt-1 pb-1 border-2 border-black ">
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