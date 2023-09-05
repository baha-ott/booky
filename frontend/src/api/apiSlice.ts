import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"


export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
    tagTypes: ['Books', 'Authors'],
    endpoints: builder => ({
        getBooksBySearch: builder.query({
            query: (title) => title ? `/books?title_like=${title}` : "/books",
            // if the search is empty give me all books
            // i hanled not found elsewhere in the app 
            providesTags: ['Books']
        }),
        getSingleBook: builder.query({
            query: (id) => `/books/${id}`,
            // if the search is empty give me all books
            // i hanled not found elsewhere in the app 
            providesTags: ['Books']
        }),
        addNewBook: builder.mutation({
            query: (book: Book) => ({
                url: "/books",
                method: "POST",
                body: book,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
            invalidatesTags: ["Books"]
        }),
        updateBook: builder.mutation({
            query: (book) => ({
                url: `/books/${book.id}`,
                method: "PUT",
                body: book
            }),
    
        }),
        deleteBook: builder.mutation({
            query: (id) => ({
                url: `/books/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Books"]
        }),

        getAuthors: builder.query({
            query: () => '/authors',
            providesTags: ['Authors'],
        })
        ,
        addAuthor: builder.mutation(
            {
                query: (author: Author) => ({
                    url: "/authors",
                    method: "POST",
                    body: author,
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                }),
                invalidatesTags: ["Authors"]
            }
        )
    })
})

export const {
    useGetBooksBySearchQuery,
    useGetAuthorsQuery,
    useAddNewBookMutation,
    useAddAuthorMutation,
    useGetSingleBookQuery,
    useDeleteBookMutation,
    useUpdateBookMutation } = apiSlice;