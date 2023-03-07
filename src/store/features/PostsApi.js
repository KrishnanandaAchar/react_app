// 3rd Party Libraries
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const PostsApi = createApi({
    tagTypes: ["posts"],
    reducerPath: "CommentsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/" }),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => "/posts",
            providesTags: ["posts"],
        }),
        getPost: builder.query({
            query: (id) => `/posts/${id}`,
            providesTags: ["posts"],
        }),
        addPost: builder.mutation({
            query: (post) => ({
                method: "POST",
                url: "/posts",
                body: post,
            }),
            invalidatesTags: ["posts"],
        }),
        updatePost: builder.mutation({
            query: (post) => ({
                method: "PUT",
                url: `/posts/${post.id}`,
                body: post,
            }),
            invalidatesTags: ["posts"],
        }),
        deletePost: builder.mutation({
            query: (id) => ({
                method: "DELETE",
                url: `/posts/${id}`,
            }),
            invalidatesTags: ["posts"],
        }),
    }),
});

export const { useGetPostsQuery, useGetPostQuery, useAddPostMutation, useUpdatePostMutation, useDeletePostMutation } = PostsApi;
