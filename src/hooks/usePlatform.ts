import Platform from "../model/ParentPlatform";
import useData from "./useData";

export default function usePlatforms() {
  return useData<Platform>("/platforms/lists/parents");
}
