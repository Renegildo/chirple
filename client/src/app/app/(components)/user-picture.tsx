import Image from 'next/image';

const UserPicture = ({
  imageUrl,
  username,
  className
}: {
  className?: string;
  username?: string;
  imageUrl?: string;
}) => {
  const displayUsername = username ? username : "USUARIO DELETADO"

  return (
    imageUrl ? (
      <Image
        src={imageUrl}
        alt="pfp"
        width={100}
        height={100}
        className={`rounded-3xl w-full h-full ${className}`}
      />
    ) : (
      <span>
        {displayUsername[0].toUpperCase()}
        {displayUsername[1].toLowerCase()}
      </span>
    )
  );
}

export default UserPicture;
