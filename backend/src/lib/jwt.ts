import jwt from "jsonwebtoken";
import getDbInstance from "../initializers/db";
import z from "zod";
import {
	ACCESS_TOKEN_MAX_AGE_MS,
	REFRESH_TOKEN_MAX_AGE_MS,
} from "../config/jwtConfig";

const accessTokenData = z.object({
	userId: z.string(),
});

const refreshTokenData = z.object({
	userId: z.string(),
	createdAt: z.number(),
});

type AccessTokenData = z.infer<typeof accessTokenData>;
type RefreshTokenData = z.infer<typeof refreshTokenData>;

const prisma = getDbInstance();

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || "at_secret";
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET || "rt_secret";

export const generateAccessToken = (userId: string): string => {
	const accessTokenData: AccessTokenData = { userId };
	return jwt.sign(accessTokenData, ACCESS_TOKEN_SECRET, {
		expiresIn: ACCESS_TOKEN_MAX_AGE_MS / 1000,
		// algorithm: "ES256",
	});
};

export const generateRefreshToken = (userId: string): string => {
	const refreshTokenData: RefreshTokenData = { userId, createdAt: Date.now() };
	return jwt.sign(refreshTokenData, REFRESH_TOKEN_SECRET, {
		expiresIn: REFRESH_TOKEN_MAX_AGE_MS / 1000,
		// algorithm: "ES256",
	});
};

export const verifyRefreshToken = (
	refreshToken: string
): undefined | RefreshTokenData => {
	const decoded = jwt.verify(refreshToken, REFRESH_TOKEN_SECRET);

	if (!refreshTokenData.safeParse(decoded).success) return undefined;

	return decoded as RefreshTokenData;
};

export const verifyAccessToken = (
	accessToken: string
): undefined | AccessTokenData => {
	const decoded = jwt.verify(accessToken, ACCESS_TOKEN_SECRET);

	if (!accessTokenData.safeParse(decoded).success) return undefined;

	return decoded as AccessTokenData;
};

export const deleteOutdatedRefreshTokens = async (): Promise<void> => {
	await prisma.refreshToken.deleteMany({
		where: {
			createdAt: {
				lt: new Date(Date.now() - REFRESH_TOKEN_MAX_AGE_MS),
			},
		},
	});
};
