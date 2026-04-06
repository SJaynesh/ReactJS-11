"use client";

import { useParams } from "next/navigation"

export default function editCarPage() {
    const param = useParams();

    console.log(param); // { id : 6606}

    return <>
        <h1 className="text-center text-xl">Edit Car Page</h1>
    </>
}