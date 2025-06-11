import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import FetchDataResponse from "../model/fetch-data-response";
import { AxiosRequestConfig } from "axios";

export default function useData<T>(
  endpoint: string,
  config?: AxiosRequestConfig,
  //deps: unknown[] = []
) {
  return useQuery<T[], Error>({
    queryKey: [endpoint, config?.params],
    queryFn: () =>
      apiClient
        .get<FetchDataResponse<T>>(endpoint, config)
        .then(res => res.data.results),
    staleTime: 1000 * 60 * 60 * 24, // 24 hours cache
  });
}



