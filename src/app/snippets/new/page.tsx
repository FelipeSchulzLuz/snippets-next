"use client";

import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema';
import { ISnippet } from './types';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { createSnippet } from '@/service/snippet.service';
import React from 'react';

const NewSnippetForm = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<ISnippet>({ resolver: yupResolver(schema) });

    const onSubmit: SubmitHandler<ISnippet> = async data => {
        console.log(data);
        const response = await createSnippet(data);
        console.log({response})
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 px-4 py-6 bg-white shadow-lg rounded-lg sm:px-6 md:px-8 lg:px-10 xl:px-12 w-1/2">
            <h1 className="text-2xl font-semibold text-gray-900">New Snippet</h1>
            <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                <Controller
                    name="title"
                    control={control}
                    render={({ field }) => (
                        <input
                            {...field}
                            placeholder='Title'
                            type="text"
                            id="title"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 h-10 p-2"
                        />
                    )}
                />
                {errors.title && <p className="mt-2 text-sm text-red-600">{errors.title.message}</p>}
            </div>

            <div>
                <label htmlFor="code" className="block text-sm font-medium text-gray-700">Code</label>
                <Controller
                    name="code"
                    control={control}
                    render={({ field }) => (
                        <input
                            {...field}
                            placeholder='Code'
                            type="text"
                            id="code"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 h-10 p-2"
                        />
                    )}
                />
                {errors.code && <p className="mt-2 text-sm text-red-600">{errors.code.message}</p>}
            </div>

            <div>
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700">Notes</label>
                <Controller
                    name="notes"
                    control={control}
                    render={({ field }) => (
                        <textarea
                            {...field}
                            placeholder='Put your observations here'
                            rows={3}
                            id="notes"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"
                        />
                    )}
                />
                {errors.notes && <p className="mt-2 text-sm text-red-600">{errors.notes.message}</p>}
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