import { v2 as cloudinary, UploadApiResponse } from "cloudinary";
import multer from "multer";
import streamifier from "streamifier";
import express from "express";
import { IRequest } from "../types";
import { allowedFormats } from "../config/constants";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const upload = multer({ storage: multer.memoryStorage() });

export const uploadFile = upload.single("file");

export const uploadImage = (buffer: Buffer, folder: string, options = {}) => {
  return new Promise<UploadApiResponse>((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { folder, ...options },
      (error, result) => {
        if (error) return reject(error);

        return resolve(result);
      }
    );

    streamifier.createReadStream(buffer).pipe(uploadStream);
  });
};

export const handleUpload = async (req: IRequest, res: express.Response) => {
  try {
    if (!req.file) {
      return res.sendStatus(400);
    }

    if (!allowedFormats.includes(req.file.mimetype)) {
      return res.sendStatus(400);
    }

    const uploadResponse = await uploadImage(req.file.buffer, "uploads");

    res.status(201).json({ imageUrl: uploadResponse.secure_url });

  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
}
