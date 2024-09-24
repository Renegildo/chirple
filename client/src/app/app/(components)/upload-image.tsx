import { uploadFile } from "@/utils/api";
import { UploadIcon } from "lucide-react";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

const UploadImage = ({
  imageUrl,
  setImageUrl
}: {
  imageUrl: string
  setImageUrl: SetStateAction<Dispatch<string>>;
}) => {
  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) {
      return;
    }

    const imageUrlResponse = await uploadFile(e.target.files[0]);
    setImageUrl(imageUrlResponse.imageUrl);
  };

  return (
    <>
      <div
        className="bg-[#1E1F22] flex items-center flex-col rounded-md cursor-pointer mb-2 mt-1"
        style={{ padding: imageUrl ? 0 : 40 }}
      >
        {imageUrl ? (
          <>
            <img src={imageUrl} className="object-contain rounded-md" />
          </>
        ) : (
          <>
            <p className="w-full text-center font-bold" style={{ display: imageUrl ? "none" : "block" }}>
              Selecionar Imagem
            </p>
            <UploadIcon className="w-10 h-10" style={{ display: imageUrl ? "none" : "block" }} />
          </>
        )}
      </div>
      <input id="file" type="file" hidden onChange={handleFileChange} />
    </>
  );
};

export default UploadImage;
