import { db } from "@/db";

interface SnippetShowPageProps {
  params: {
    id: string;
  }
}

export default async function SnippetShowPage(props: SnippetShowPageProps) {
    const snippetById = await db.snippet.findUnique({ where: { id: parseInt(props?.params?.id) } });
  return (
      <div id="snippet-info" className="snippet-info bg-white p-4 rounded-md shadow-md mb-4">
        <h1 className="text-2xl font-bold">{snippetById?.title}</h1>
        <p className="text-gray-600">{snippetById?.code}</p>
      </div>
  );
}