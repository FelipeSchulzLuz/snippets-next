'use server';

import { ISnippet } from "@/app/snippets/new/types";
import { db } from "@/db";

const mapToSnippet = (formData: FormData) => {
    const title = formData.get('title')?.toString();
    const code = formData.get('code')?.toString();

    if (title && code) return {
        title,
        code
    } as ISnippet;
}

const postNewSnippet = async (snippet: ISnippet) => {
    const response = await db.snippet.create({ data: snippet });
    return response;
}

export {
    postNewSnippet,
    mapToSnippet
};
