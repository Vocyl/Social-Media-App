import { Avatar } from "flowbite-react";
import useCalculateElapsedTime from "hooks/useCalculateElapsedTime";
import useGenerateImageSrc from "hooks/useGenerateImagesSrc";
import { useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa6";

type Props = {
	newestMessage: boolean;
	avatar: string | null;
	textContent: string;
	createdAt: string;
	userId: string;
};

const OtherUserMessage = ({
	avatar,
	textContent,
	createdAt,
	userId,
	newestMessage,
}: Props) => {
	const { generateAvatarImageSrc } = useGenerateImageSrc();
	const calculateElapsedTime = useCalculateElapsedTime();
	const [elapsedTime, setElapsedTime] = useState<string>(
		calculateElapsedTime(new Date(createdAt))
	);

	const getAvatarImageSrcOrIcon = (avatar: string | null, userId: string) => {
		if (avatar) {
			return generateAvatarImageSrc(userId, avatar);
		} else {
			return () => (
				<div className="grid w-10 h-10 bg-white border rounded-full place-items-center border-slate-300">
					<FaRegUser />
				</div>
			);
		}
	};

	useEffect(() => {
		const elapsedTimeMs = Date.now() - new Date(createdAt).getTime();
		const delay =
			elapsedTimeMs > 1000 * 60
				? elapsedTimeMs > 1000 * 60 * 60
					? 1000 * 60 * 60
					: 1000 * 60
				: 1000 * 15;

		const timer = setTimeout(() => {
			setElapsedTime(calculateElapsedTime(new Date(createdAt)));
		}, delay);

		return () => clearTimeout(timer);
	}, [calculateElapsedTime, createdAt]);

	return (
		<li
			className={`flex flex-col gap-2 my-10 left-4 ${
				newestMessage ? "mt-10 mb-0" : "my-10"
			}`}
		>
			<div className="flex items-end gap-2">
				<Avatar
					img={getAvatarImageSrcOrIcon(avatar, userId)}
					rounded
					size="md"
				/>
				<div className="md:p-5 p-3 md:max-w-[380px] max-w-[250px] bg-white break-words rounded-bl-none rounded-3xl text-zinc-900 text-sm font-medium font-family2 leading-[18px]">
					{textContent}
				</div>
			</div>
			<p className="px-12 text-xs font-medium text-gray-500 font-family2">
				{elapsedTime}
			</p>
		</li>
	);
};

export default OtherUserMessage;
