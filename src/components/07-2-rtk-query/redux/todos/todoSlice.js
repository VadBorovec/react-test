import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://64a87027dca581464b85bc9f.mockapi.io/api/v1/',
  }),
  tagTypes: ['Todo'],
  endpoints: builder => ({
    fetchTodos: builder.query({
      query: () => '/contacts',
      providesTags: ['Todo'],
    }),
    deleteTodo: builder.mutation({
      query: todoId => ({
        url: `/contacts/${todoId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Todo'],
    }),
    createTodo: builder.mutation({
      query: ({ contactName, contactPhone }) => ({
        url: '/contacts',
        method: 'POST',
        body: {
          name: contactName,
          phone: contactPhone,
        },
      }),
      invalidatesTags: ['Todo'],
    }),
  }),
});
// !=========
// export const todoApi = createApi({
//   reducerPath: 'todoApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://64a9361d8b9afaf4844a680d.mockapi.io/api/v1/',
//   }),
//   tagTypes: ['Todo'],
//   endpoints: builder => ({
//     fetchTodos: builder.query({
//       query: () => '/todos',
//       providesTags: ['Todo'],
//     }),
//     deleteTodo: builder.mutation({
//       query: todoId => ({
//         url: `/todos/${todoId}`,
//         method: 'DELETE',
//       }),
//       invalidatesTags: ['Todo'],
//     }),
//     createTodo: builder.mutation({
//       query: todoContent => ({
//         url: '/todos',
//         method: 'POST',
//         body: {
//           content: todoContent,
//         },
//       }),
//       invalidatesTags: ['Todo'],
//     }),
//   }),
// });

export const {
  useFetchTodosQuery,
  useDeleteTodoMutation,
  useCreateTodoMutation,
} = contactsApi;
