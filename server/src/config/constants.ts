export const saltRounds = 10;

export const cloudinaryFolders = {
  avatars: "avatars",
};

export const clientUrl =
  process.env.NODE_ENV === "production"
    ? "https://chirple.vercel.app"
    : "http://192.168.100.123:3000";

export const PORT: number = process.env.PORT ? Number(process.env.PORT) : 8080;

export const allowedFormats = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp",
];
