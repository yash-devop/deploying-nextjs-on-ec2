import { NextResponse } from "next/server"

export const GET=()=>{
    const data = [
        {
            id: 1,
            name: "John",
            age: 26
        },
        {
            id: 2,
            name: "John kennedy",
            age: 22
        },
        {
            id: 3,
            name: "Rony",
            age: 26
        },
        {
            id: 4,
            name: "Aston",
            age: 32
        },
    ]
    return NextResponse.json({
        data
    })
}