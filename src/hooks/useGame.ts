import { useQuery } from "@tanstack/react-query";
import useGameQueryStore from "../../state-management/store";
import { Game } from "../model/fetch-game-types";
import apiClient from "../services/api-client";
import FetchDataResponse from "../model/fetch-data-response";

export default function useGame() {
    const gameQuery = useGameQueryStore();
    return useQuery<Game[], Error>({
        queryKey: ['games', gameQuery],
        queryFn: () => apiClient.get<FetchDataResponse<Game>>("/games", {
            params: {
                genres: gameQuery.genre,
                parent_platforms: gameQuery.platform?.id,
                ordering: gameQuery.ordering?.value,
                search: gameQuery.search
            }
        }).then(res => res.data.results),
        staleTime: 3600 * 1000 * 24
    })
}

