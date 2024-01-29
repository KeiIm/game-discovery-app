import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { FetchResponse } from "./useData";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
  }

const useGenresQuery = () => useQuery<Genre[], Error>({
  queryKey: ['genres'],
  queryFn: () => apiClient
    .get<FetchResponse<Genre>>('/genres')
    .then((res)=>res.data),
    staleTime: 60_000
})

export default useGenresQuery