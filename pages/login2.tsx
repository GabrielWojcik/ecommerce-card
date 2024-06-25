"use client"

import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";

export default function HomeLogin() {
    const { data: session } = useSession();
    const [loginwith, setLoginWith] = useState(false);

    const loginWith = () => {
        setLoginWith(true);
    }

    if (session) {
        console.log(session.user)

        return(
            <div>
                <p>Bem-vindo</p>
                <span>
                    {session.user?.name}

                </span>. Signed In As
                <p>{session.user?.email}</p>

                <button onClick={() => signOut()}>
                    Sign Out
                </button>
            </div>
        )
    }

    if (loginwith) {
        return(
            <div>
                <p>Sign In as</p>
                <button onClick={() => signIn('cognito')}>Com Cognito</button>
            </div>
        )
    }
    return (
        <>
            <header>
            {session ?
            (
                <div>
                    <button>Product</button>
                    <a href="">produtos</a>
                    <a href="">produtos</a>
                    <a href="">produtos</a>
                    <a href="">produtos</a>
                </div>
            )
            :
            (
                <div>
                    <button onClick={loginWith} >Log in</button>
                </div>                
            )
            }
            </header>
            <div>
                <h1>App</h1>
            </div>
        </>
    )
}