import { NextResponse } from "next/server";

export function GET(){
    return NextResponse.json({
        message: 'Viendo las Notas',
    })
}
export function POST(){
    return NextResponse.json({
        message: 'Creando las Notas',
    })
}