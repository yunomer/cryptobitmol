import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
  'X-RapidAPI-Key': '7383fbb166msh4f115b6fe77d068p163335jsn5173e31be8dd'
}

const baseURL = 'https://coinranking1.p.rapidapi.com/coins'

const createRequest = (endpoint) => ({
  endpoint,
  headers: cryptoApiHeaders,
});

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest('/coins')
    })
  })
});

export const {
  useGetCryptosQuery,
} = cryptoApi;
