import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
const BASE_URL = import.meta.env.VITE_BASE_URL;



export const serverApi = createApi({
  reducerPath: 'serverApi',
  baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
  tagTypes: ['Properties', 'User', 'Blog'],
  endpoints: (builder) => ({
    getProperties: builder.query({
      query: () => `/api/v1/properties`,
      providesTags: ['Properties'],
    }),
    createProperties: builder.mutation({
      query: (data) => ({
        url: `/api/v1/properties`,
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['Properties']
    }),
   

    deleteProperties: builder.mutation({
        query:(id) => ({
          url: `/api/v1/properties/${id}`,
          method: 'DELETE'
        }),
        invalidatesTags: ['Properties']
      }),

    updateProperties: builder.mutation({ 
     query: function(data){
        return{
          url: `/api/v1/properties/${data._id}`,
            method: 'PATCH',
            body: data,
        }
      },

      invalidatesTags: ['Properties']
    }),

    //User Slice 
    createUser: builder.mutation({
      query: (data) => ({
        url: `/api/v1/users`,
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['User']
    }),
    logedUser: builder.mutation({
      query: (data) => ({
        url: `/api/v1/users/login`,
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['User']
    }),
    getAllUsers: builder.query({
      query: () => `/api/v1/users`,
      providesTags: ['Properties'],
    }),
    
    
  //Blog Slice
    getBlogs: builder.query({
      query: () => `/api/v1/blogs`,
      providesTags: ['Blog'],
    }),
    createBlog: builder.mutation({
      query: (data) => ({
        url: `/api/v1/add-blog`,
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['Blog']
    }),
  
  }),

  
   

})
// })


export const {useGetPropertiesQuery,useGetBlogsQuery, useCreateBlogMutation, useGetAllUsersQuery, useCreatePropertiesMutation, useCreateUserMutation, useLogedUserMutation, useUpdatePropertiesMutation,useDeletePropertiesMutation } = serverApi


