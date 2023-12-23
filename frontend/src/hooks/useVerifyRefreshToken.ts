import axios from "axios";
import { REFRESH_TOKEN_URL } from "constraints";
import { useQuery } from "react-query";

const useVerifyRefreshToken = () => {
	const { data, isLoading, error } = useQuery({
		queryKey: "refreshToken",
		queryFn: async () =>
			await axios({
				method: "GET",
				url: REFRESH_TOKEN_URL,
				withCredentials: true,
			}),
		cacheTime: 0,
		retry: 0,
		refetchOnWindowFocus: false,
	});

	return { data, isLoading, error };
};

export default useVerifyRefreshToken;