import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const review_api= createApi({
    reducerPath: 'review_api',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://the-reviewer.onrender.com"
    }),
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (body)=> ({
                url: '/auth/register',
                method: 'POST',
                body,
            }),
        }),
        getItems: builder.query({
            query:()=> ({
                url:"/items/",
            })
        }),
        getItem: builder.query({
            query:(id)=> ({
                url:`/items/${id}`,
                method: "GET",
            }),
            providesTags:["item"]
        }),
        login: builder.mutation({
            query: (body)=> ({
                url: '/auth/login',
                method: 'POST',
                body,
            }),
        }),
        newReview: builder.mutation({
            query: ({id, token, body})=> ({
                url: `/reviews/${id}`,
                method: 'POST',
                headers: {
                    authorization: `Bearer ${token}`
                },
                body,
            }),
            invalidatesTags: ["item"]
        }),
        newComment: builder.mutation({
            query: ({id, token, body})=> ({
                url: `/comments/${id}`,
                method: 'POST',
                headers: {
                    authorization: `Bearer ${token}`
                },
                body,
            }),
            invalidatesTags: ["item"]
        }),
        getUser: builder.query({
            query: (token) => ({
              url: "/users",
              headers: {
                authorization: `Bearer ${token}`,
              },
            }),
            providesTags: ["User"],
        }),
  
    editComment: builder.mutation({
        query: ({id, token, body})=> ({
            url: `/comments/${id}`,
            method: 'PUT',
            headers: {
                authorization: `Bearer ${token}`
            },
            body,
        }),
    }),
    editReview: builder.mutation({
        query: ({id, token, body})=> ({
            url: `reviews/${id}`,
            method: 'PUT',
            headers: {
                authorization: `Bearer ${token}`
            },
            body,
        }),
    }),
    deleteReview: builder.mutation({
        query: ({ id, token }) => ({
          url: `/reviews/${id}`,
          method: "DELETE",
          headers: {
            authorization: `Bearer ${token}`,
          },
        }),
        invalidatesTags: ["reviews", "review"],
      }),
      deleteComment: builder.mutation({
        query: ({ id, token }) => ({
          url: `/comments/${id}`,
          method: "DELETE",
          headers: {
            authorization: `Bearer ${token}`,
          },
        }),
        invalidatesTags: ["comments", "comment"],
      }),
  }),
});

export const{useRegisterMutation, useGetItemQuery, useGetItemsQuery, useLoginMutation, useNewReviewMutation, useNewCommentMutation, useGetUserQuery, useEditReviewMutation, useEditCommentMutation, useDeleteCommentMutation, useDeleteReviewMutation} = review_api;