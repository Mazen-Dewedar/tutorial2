
export default function ShowProducts({el}) {

    return (
        <div className="flex flex-col rounded-2xl bg-[black] p-4 gap-3">
            <img src={el.images[0]} alt="" />
            <p>{el.title}</p>
            <p>price : {el.price}$</p>
            <button className="btn btn-primary">purchase</button>
        </div>
    )

}