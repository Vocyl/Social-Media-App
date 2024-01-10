import { useEffect, useState } from "react";
import useSocketContext from "./useSocketContext";
import { Post, UserData } from "../../../types/socket.io";

const useGetFoundUserData = (id: string | undefined) => {
	const { socket } = useSocketContext();
	const [error, setError] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [userData, setUserData] = useState<UserData | null>(null);
	const [posts, setPosts] = useState<Post[] | null>(null);
	const [isFound, setIsFound] = useState<boolean>(false);

	useEffect(() => {
		if (!socket) return;
		if (!id) return;

		socket.emit("getFoundUserData", id, (error, userData, posts) => {
			setIsLoading(false);

			if (error) {
				setError(error);
				return;
			}

			if (userData && posts) {
				setUserData(userData);
				setPosts(posts);
				setIsFound(true);
			}
		});
	}, [socket, id]);

	return { isLoading, error, userData, posts, isFound };
};

export default useGetFoundUserData;
