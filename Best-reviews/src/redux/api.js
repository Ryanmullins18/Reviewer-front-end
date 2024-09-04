import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const review_api= createApi({
    reducerPath: 'review_api',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080/api"
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
            })
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
    }),
});

export const{useRegisterMutation, useGetItemQuery, useGetItemsQuery, useLoginMutation, useNewReviewMutation, useNewCommentMutation, useGetUserQuery} = review_api;