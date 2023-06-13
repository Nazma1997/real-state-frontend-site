import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
const BASE_URL = import.meta.env.VITE_BASE_URL;



export const serverApi = createApi({
  reducerPath: 'serverApi',
  baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
  tagTypes: ['Properties', 'User'],
  endpoints: (builder) => ({
    getProperties: builder.query({
      query: () => `/properties`,
      providesTags: ['Properties'],
    }),
    createProperties: builder.mutation({
      query: (data) => ({
        url: `/properties`,
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['Properties']
    }),
   

    deleteProperties: builder.mutation({
        query:(id) => ({
          url: `/properties/${id}`,
          method: 'DELETE'
        }),
        invalidatesTags: ['Properties']
      }),

    updateProperties: builder.mutation({ 
     query: function(data){
        return{
          url: `/properties/${data._id}`,
            method: 'PATCH',
            body: data,
        }
      },

      invalidatesTags: ['Properties']
    }),

    //User Slice 
    createUser: builder.mutation({
      query: (data) => ({
        url: `/users`,
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['User']
    }),
    logedUser: builder.mutation({
      query: (data) => ({
        url: `/users/login`,
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['User']
    }),
    getAllUsers: builder.query({
      query: () => `/users`,
      providesTags: ['Properties'],
    }),
  
  }),
})
// })


export const {useGetPropertiesQuery, useGetAllUsersQuery, useCreatePropertiesMutation, useCreateUserMutation, useLogedUserMutation, useUpdatePropertiesMutation,useDeletePropertiesMutation } = serverApi


