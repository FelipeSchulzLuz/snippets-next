import { mapToSnippet, postNewSnippet } from '@/service/snippet.service';
import { schema } from './schema'

const NewSnippetForm = () => {
    const onSubmit = async (data: FormData) => {
        'use server';
        const snippet = mapToSnippet(data);
        try {
            await schema.validate(snippet);
          } catch (err) {
            console.log({err})
          }


        if (snippet) {
            const response = await postNewSnippet(snippet);
            return response;
        }
    };

    return (
        <form action={onSubmit} className="space-y-4 px-4 py-6 bg-white shadow-lg rounded-lg sm:px-6 md:px-8 lg:px-10 xl:px-12 w-1/2">
            <h1 className="text-2xl font-semibold text-gray-900">New Snippet</h1>
            <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                <input
                    name='title'
                    id="title"
                    placeholder='Title'
                    type="text"
                    aria-errormessage='title'
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 h-10 p-2"
                />                
            </div>

            <div>
                <label htmlFor="code" className="block text-sm font-medium text-gray-700">Code</label>
                <textarea
                    name='code'
                    id="code"
                    placeholder='Code'
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 h-10 p-2"
                />
            </div>

            <div>
                <button type="submit" className="py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Submit
                </button>
            </div>
        </form>
    );
};

export default NewSnippetForm;