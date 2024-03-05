import { NextResponse } from "next/server";

export function GET(){
    return NextResponse.json({
        message: "Obteniendo una Nota"
    })
}

export function PUT(){
    return NextResponse.json({
        message: "Actualizando una Nota"
    })
}

export function DELETE(){
    return NextResponse.json({
        message: "Borrando una Nota"
    })
}

