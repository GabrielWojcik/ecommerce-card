'use client'

import { signIn, signOut }  from "next-auth/react"
import Image from 'next/image'
import { BsPerson } from "react-icons/bs"

export default function Login ( session: any ) {
    return(
        <>
        {!session ? (
            <button 
            className="p-3 border-transparent text-xl"
            onClick={() => signIn()}>
                <BsPerson color="red" />
            </button>
        ) : (
            <button onClick={() => signOut()}>
                <Image alt="" src={''} />
            </button>
        )
    }
        </>
    )
}