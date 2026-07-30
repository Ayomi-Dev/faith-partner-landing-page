"use client"

import { useRouter } from "next/navigation"
import { Button } from "../components/uis/Button"

const LoginPage = () => {
    const router = useRouter()
    const homePage = () => {
        router.push("/")
    }
  return (
    <div className='bg-(--navy) flex gap-5 flex-col justify-center items-center  h-screen'>
        <h1 className="text-3xl text-white">Login Page In Progress...</h1>
        <Button variant="primary" onClick={homePage} size="md" className="cursor-pointer">Back to home page</Button>
    </div>
  )
}

export default LoginPage