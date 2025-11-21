import React, { useState } from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import * as Yup from "yup"

export default function Register() {
    const nav = useNavigate()
    const [acc ]=useState(JSON.parse(localStorage.getItem("Accounts"))||[])
    // localStorage.setItem("logged",false)
    const handle = (values) => {
        let copy=[...acc]
        copy.push(values)
        localStorage.setItem("Accounts" ,JSON.stringify(copy))
        toast.success("Registered successfully")
        nav("/login")
    }
    const validationSchema = Yup.object({
        EmailValue: Yup.string().required().email(),
        PassValue: Yup.string().required().min(4),
    })
    return (
        <div className='flex justify-center items-center w-full h-dvh'>
            <Formik validationSchema={validationSchema} initialValues={{ EmailValue: '', PassValue: '' }} onSubmit={handle}>
                <Form className='flex flex-col gap-3 bg-neutral  w-90 rounded-2xl justify-center items-center p-5'>
                    <h1>Register</h1>
                    <Field name="EmailValue" className='input' type="text" placeholder='Enter Email' />
                    <ErrorMessage name="EmailValue" className="text-red-600 text-[12px]" component={'p'} />
                    <Field name="PassValue" className="input" type="text" placeholder='Enter Password' />
                    <ErrorMessage name="PassValue" className="text-red-600 text-[12px]" component={'p'} />
                    <button type='submit' className='btn btn-primary w-full'>Register</button>
                </Form>
            </Formik>
        </div>
    )
}

