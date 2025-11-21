import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { Links, useNavigate } from 'react-router-dom'
import * as Yup from "yup"
import { BrowserRouter, Route, Routes, Link, NavLink } from "react-router-dom";




export default function Login() {

    const nav = useNavigate()
    useEffect(() => {
        let hasLogged = JSON.parse(localStorage.getItem("logged"))
        if (hasLogged) {
            nav("/InstaApp")
            toast.error("you are already logged in")

        }
    }, [])
    // localStorage.setItem("logged",false)
    const [check] = useState(JSON.parse(localStorage.getItem("Accounts")))
    const [index] = useState(localStorage.setItem("index", JSON.stringify(false)));
    const handle = (values) => {
        check.map((el) => {
            if (el.EmailValue == values.EmailValue && el.PassValue == values.PassValue) {
                localStorage.setItem("index", JSON.stringify(true))
            }
        })
        if (JSON.parse(localStorage.getItem("index"))) {
            localStorage.setItem("logged", JSON.stringify(true))
            nav("/InstaApp")
            toast.success("logged in successfully")
        } else {
            toast.error("This account doesn't exist please Register first")
        }

    }
    const validationSchema = Yup.object({
        EmailValue: Yup.string().required().email(),
        PassValue: Yup.string().required().min(4),
        checkVlue: Yup.boolean().required()
    })
    return (
        <div className='flex justify-center items-center w-full h-dvh'>
            <Formik validationSchema={validationSchema} initialValues={{ EmailValue: '', PassValue: '', checkVlue: false, }} onSubmit={handle}>
                <Form className='flex flex-col gap-3 bg-neutral  w-90 rounded-2xl justify-center items-center p-5'>
                    <h1>Login</h1>
                    <Field name="EmailValue" className='input' type="text" placeholder='Enter Email' />
                    <ErrorMessage name="EmailValue" className="text-red-600 text-[12px]" component={'p'} />
                    <Field name="PassValue" className="input" type="text" placeholder='Enter Password' />
                    <ErrorMessage name="PassValue" className="text-red-600 text-[12px]" component={'p'} />
                    <label className='flex gap-1.5 w-full justify-start'>
                        <Field className="checkbox checkbox-primary" name="checkVlue" type="checkbox" />
                        Remember me
                    </label>
                    <button type='submit' className='btn btn-primary w-full'>Login</button>
                    <Link to={"/Register"} className='btn btn-lg '>Register</Link>
                </Form>
            </Formik>
        </div>
    )
}
