interface ISnippet {
    title: string;
    code: string;
}

interface ISnippetResponse {
    title: string;
    code: string;
    id: number;
}

export { ISnippet, ISnippetResponse }