import { useSearchParams } from "react-router-dom";

export const useGetUrlPosition = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return [lat, lng];
};
