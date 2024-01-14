import { Avatar } from "flowbite-react";
import useCalculateElapsedTime from "hooks/useCalculateElapsedTime";
import useGenerateImageSrc from "hooks/useGenerateImagesSrc";
import useSocketContext from "hooks/useSocketContext";
import { FaRegUser } from "react-icons/fa6";

type Props = {
	textContent: string;
	createdAt: string;
};

const YourMessage = ({ textContent, createdAt }: Props) => {
	const { userData } = useSocketContext();
	const { generateAvatarImageSrc } = useGenerateImageSrc();
	const elapsedTime = useCalculateElapsedTime(new Date(createdAt));

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

	const avatar = userData?.avatarImage ?? "";
	const userId = userData?.id ?? "";

	return (
		<li className="flex flex-col gap-2 right-4">
			<div className="flex flex-row-reverse items-end gap-2">
				<Avatar
					img={getAvatarImageSrcOrIcon(avatar, userId)}
					rounded
					size="md"
				/>
				<div className="p-5 max-w-[380px] bg-teal-500 rounded-br-none rounded-3xl text-white text-sm font-medium font-family2 leading-[18px]">
					{textContent}
				</div>
			</div>
			<p className="px-12 text-xs font-medium text-right text-gray-500 font-family2">
				{elapsedTime}
			</p>
		</li>
	);
};

export default YourMessage;
