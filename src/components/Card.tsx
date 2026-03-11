import Image from "next/image";
import InteractiveCard from "./InteractiveCard";

interface CardProps {
  venueName: string;
  imgSrc: string;
}

export default function Card({ venueName, imgSrc }: CardProps) {
  return (
    <InteractiveCard>
      <Image
        src={imgSrc}
        alt={venueName}
        width={288}
        height={200}
        className="object-cover w-full"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-blue-600">{venueName}</h3>
      </div>
    </InteractiveCard>
  );
}
