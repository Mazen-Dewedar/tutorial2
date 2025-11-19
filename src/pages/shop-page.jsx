import { Card } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import ShowProducts from "../components/showProducts"

export default function Shop_page() {

    const [data, editdata] = useState([])
    let domain = 'https://api.escuelajs.co/api/v1/products'
    let url = domain
    useEffect(()=>{
        axios
            .get(url)
            .then((res) => {
                let data = res.data
                editdata(data)
            })
    })

    return (
        <div className="flex justify-center px-7">
            <div className="container grid grid-cols-4 gap-7">
                {
                    data.map((el) => {
                        return (
                            <ShowProducts  key={el.id} el={el} />
                        )
                    })
                }
            </div>
        </div>
    )
}

// API- UI
// APPLICATION PROGRAMMING INTERFACE
// API LINK (DOMAIN/ENDPOINTS)

// ajaxRequest (الاصلي)
// fetch (التحديث)
// axios(المكتبه اللي هنستخدمها)