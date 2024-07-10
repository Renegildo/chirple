"use client";

import { Dispatch, SetStateAction, useState } from "react";

const UploadImageModal = ({
  setUploadImage,
  uploadImage,
  handleSelect,
}: {
  setUploadImage: Dispatch<SetStateAction<boolean>>;
  uploadImage: boolean;
  handleSelect: (imageUrl: string) => void;
}) => {
  const [imageUrl, setImageUrl] = useState<string>("");

  return (
    <div
      style={{ display: uploadImage ? "block" : "none" }}
      className="fixed z-20"
    >
      <div
        className="bg-black/50 fixed w-full h-full left-0 top-0"
        onClick={() => setUploadImage(false)}
      />

      <div className="fixed bg-[#313338] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-lg">
        <div className="p-5">
          <h1 className="text-2xl font-bold">
            Adicionar imagem
          </h1>
          <div>
            <label
              className="text-xs text-white/80 font-bold"
              htmlFor="imageUrl"
            >
              URL DA IMAGEM
            </label>
            <input
              className="text-white bg-[#1e1f22] rounded-sm w-full p-2"
              id="imageUrl"
              placeholder="https://imagens.com/1958318432134"
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </div>
        </div>
        <div className="bg-[#2b2d31] p-5 flex justify-between rounded-b-lg shadow-2xl shadow-black/50">
          <button
            className="font-semibold text-white/50 hover:text-white/40 transition-colors"
            onClick={() => setUploadImage(false)}
          >
            Cancelar
          </button>
          <button
            className="bg-[#5865f2] hover:bg-[#5865f2]/80 transition-colors py-3 px-5 text-sm rounded-md"
            onClick={() => handleSelect(imageUrl)}
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
}

export default UploadImageModal;
