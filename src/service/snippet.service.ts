'use server';

import { ISnippet } from "@/app/snippets/new/types";
import { db } from "@/db";

const createSnippet = async (snippet: ISnippet) => {
    const snippetResponse = await db.snippet.create({ data: snippet });
    console.log({snippetResponse})
}

export {
    createSnippet
}