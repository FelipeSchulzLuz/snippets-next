import { db } from "@/db";
import { ISnippet, ISnippetResponse } from "./new/types";
import Link from "next/link";

export default async function SnippetsList() {
    const snippets: ISnippetResponse[] = await db.snippet.findMany();

    const deleteSnippet = async (id: number) => {
        const res = await db.snippet.delete({ where: { id } })
    }

    return (
        <div className="max-w-lg w-full bg-white p-8 rounded shadow-md">
            <h1 className="text-2xl font-bold mb-4">Lista de Snippets</h1>
            <ul>
                {snippets?.map((snippet) => (
                    <li key={snippet.id} className="mb-4 border-b pb-2">
                        <h2 className="text-lg font-semibold mb-2">{snippet?.title}</h2>
                        <p className="text-gray-600">{snippet?.code}</p>
                        <div className="flex justify-end mt-2">
                            <button className="text-blue-500 hover:underline"><Link href={`/new/${snippet?.id}`}>Editar</Link></button>
                            <button className="text-red-500 hover:underline ml-2">Excluir</button>
                        </div>
                    </li>))}
            </ul>
            <div className="mt-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded"><Link href={"/new/"} >Adicionar Novo Snippet</Link></button>
            </div>
        </div>
    );
}