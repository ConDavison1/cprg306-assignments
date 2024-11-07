"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function SignInPage() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    async function handleSignIn() {
        try {
            await gitHubSignIn();
        } catch (error) {
            console.log(error);
        }
    }

    async function handleSignOut() {
        try {
            await firebaseSignOut();
        } catch (error) {
            console.log(error);
        }
    }

    console.dir(user);

    return (
        <main className="m-5">
            <header>
                <h1 className="text-3xl text-white font-mono font-bold ">Shopping List</h1>
            </header>
            {user ? (
                <div>
                    <p className="font-mono text-white">Signed in as: {user.email}</p>
                    <Link href="/week-9/shopping-list" className="text-white mr-4 font-mono underline"> Continue to shopping list</Link>
                    <button
                        type="button"
                        className="text-lg bg-blue-600 text-white rounded px-2 py-1"
                        onClick={handleSignOut}
                    >
                        Sign Out
                    </button>
                </div>
            ) : (
                <div>
                    <button
                        type="button"
                        className="text-lg bg-blue-600 text-white rounded px-2 py-1"
                        onClick={handleSignIn}
                    >
                        Sign In
                    </button>
                </div>
            )}
        </main>
    );
}