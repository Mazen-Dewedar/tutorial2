import { useRef, useState } from "react"
import toast from "react-hot-toast";
import Swal from "sweetalert2";

export default function Dashboard() {
    const [index1, edit] = useState(0)

    const [products, editProducts] = useState(JSON.parse(localStorage.getItem('products')) || []);
    const [modalindex, editmodalindex] = useState(false);

    let removeProduct = (index) => {
        Swal.fire({
            icon: "question",
            text: "Are you sure?",
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonColor: "green"
        }).then((res) => {
            if (res.isConfirmed) {
                let copy = [...products];
                copy.splice(index, 1)
                editProducts(copy)
                localStorage.setItem('products', JSON.stringify(copy))
                Swal.fire({
                    icon: "success",
                    text: "Deleted successfully"
                })
            }
        })
    }
    let namevalue = useRef()
    let pricevalue = useRef()
    let qtyvalue = useRef()

    let addProduct = () => {
        let phone = {
            name: namevalue.current.value,
            price: pricevalue.current.value,
            qty: qtyvalue.current.value,
        }
        let copy = [...products]
        copy.push(phone);
        editProducts(copy)
        editmodalindex(false)
        localStorage.setItem('products', JSON.stringify(copy))
        Swal.fire({
            icon: "success",
            text: "Phone added succesfully"
        })
    }
    let editProduct = (index) => {
        document.getElementById('my_modal_1').showModal()
        let copy = [...products]
        namevalue.current.value = copy[index].name;
        pricevalue.current.value = copy[index].price;
        qtyvalue.current.value = copy[index].qty;
        edit(index)
        toast.success('Successfully toasted!')
    }
    let change = (index1) => {
        let phones = {
            name: namevalue.current.value,
            price: pricevalue.current.value,
            qty: qtyvalue.current.value,
        }
        let copy = [...products]
        copy[index1] = phones;
        editProducts(copy)
        // document.getElementById('my_modal_1').close()
        localStorage.setItem('products', JSON.stringify(copy))

    }
    return (
        <div className="w-full  flex justify-center relative">
            <div className="container flex justify-center flex-col  w-full">
                <button className="btn btn-primary w-fit" onClick={() => { editmodalindex(true) }}>Add phone</button>
                <table className="table table-sm text-center ">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>name</th>
                            <th>price</th>
                            <th>qty</th>
                            <th>opertions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((el, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{el.name}</td>
                                        <td>{el.price}</td>
                                        <td>{el.qty}</td>
                                        <td>
                                            <div className="flex flex-row gap-2 justify-center ">
                                                <button className="btn btn-accent" onClick={() => { editProduct(index) }} >Edit</button>
                                                <button className="btn btn-error" onClick={() => { removeProduct(index) }}>Remove</button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            {modalindex ? (
                <div className="modall w-full h-screen bg-[#000000bd] absolute flex justify-center items-center" onClick={() => {
                    let conf2 = confirm("Are you sure you want to exit?")
                    editmodalindex(!(modalindex && conf2))
                }}>

                    <div onClick={(event) => { event.stopPropagation() }} className="box h-[250px] w-[400px] bg-black flex justify-between items-center flex-col p-5">
                        <p>Add new Phone</p>
                        <input className="input w-full" ref={namevalue} type="text" />
                        <input className="input w-full" ref={pricevalue} type="number" />
                        <input className="input w-full" ref={qtyvalue} type="number" />
                        <button className="btn btn-primary w-full" onClick={() => { addProduct() }}>Add</button>
                    </div>
                </div>) : null}

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Edit phone</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <div className="modal-action">
                        <form method="dialog" className="flex flex-col gap-1.5 w-full">
                            <input className="input w-full" ref={namevalue} type="text" />
                            <input className="input w-full" ref={pricevalue} type="number" />
                            <input className="input w-full" ref={qtyvalue} type="number" />
                            <button className="btn" onClick={() => { change(index1) }}>Save changes</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
}