'use client'

import Link from "next/link";
import {useRouter} from "next/navigation";

export default function ContactPage() {
    const router = useRouter();
    return <>
        <h1>contact</h1>
        <Link href={`/blog/slug-new`}>home</Link>
        <div>
            <button onClick={() => router.push('/')}>router click</button>
        </div>
    </>
}