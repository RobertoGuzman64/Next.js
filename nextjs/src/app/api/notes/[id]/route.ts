import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

interface Params { params: { id: string } }

export async function GET(request: Request, { params }: Params) {
    try {
        const note = await prisma.note.findFirst({
            where: {
                id: Number(params.id)
            }
        })
        if (!note) return NextResponse.json(
            {
                message: "No existe la Nota"
            },
            {
                status: 404
            }
        )
        return NextResponse.json(note);
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json(
                {
                    message: error.message,
                },
                {
                    status: 500
                }
            );
        }
    }
}

export async function PUT(request: Request, { params }: Params) {
    try {
        const { title, content } = await request.json();
        const updatedNote = await prisma.note.update({
            where: {
                id: Number(params.id)
            },
            data: {
                title,
                content
            },
        });
        if (!updatedNote) return NextResponse.json(
            {
                message: "No existe la Nota"
            },
            {
                status: 404
            }
        )
        return NextResponse.json(updatedNote);
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json(
                {
                    message: error.message,
                },
                {
                    status: 500
                }
            );
        }
    }
}

export async function DELETE(request: Request, { params }: Params) {
    try {
        const deletedNote = await prisma.note.delete({
            where: {
                id: Number(params.id)
            }
        })
        if (!deletedNote) return NextResponse.json(
            {
                message: "No existe la Nota"
            },
            {
                status: 404
            }
        )
        return NextResponse.json(deletedNote);
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json(
                {
                    message: error.message,
                },
                {
                    status: 500
                }
            );
        }
    }
}