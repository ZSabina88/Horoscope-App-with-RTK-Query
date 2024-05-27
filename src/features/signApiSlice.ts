import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface ISignsDetail {
    sunsign: string,
    horoscope: string,
    meta: {
        keywords: string,
        mood: string,
        intensity: string
    }

};


export const horoscopeApi = createApi({
    reducerPath: "horoscopeApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://sandipbgt.com/theastrologer/api/", }),
    endpoints: (builder) => ({
        getEachSign: builder.query<ISignsDetail, string>({
            query: (name) => `horoscope/${name}/today`
        })
    })
});

export const { useGetEachSignQuery } = horoscopeApi;