import { NextResponse } from "next/server";

export async function GET() {
    try {
        // const sites = await prisma.site.findMany({
        //     select: {
        //         id: true,
        //         siteName: true,
        //         link: true,
        //     },
        // });
        // return NextResponse.json(sites, { status: 200 });
    } catch (error) {
        console.error("Erro ao buscar os sites: ", error);
        return NextResponse.json(
            { error: "Falha ao buscar as fontes das vagas" },
            { status: 500 }
        );
    }
}
