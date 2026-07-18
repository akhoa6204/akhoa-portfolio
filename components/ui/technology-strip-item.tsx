import { Technology } from "@/types/portfolio";
import Image from "next/image";

export default function TechnologyStripItem({ item }: { item: Technology }) {
  return (
    <div className="flex w-24 shrink-0 flex-col items-center justify-center gap-2 text-center ">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035]">
        <Image
          src={item.icon}
          alt={item.name}
          width={30}
          height={30}
          className="h-8 w-8 object-contain"
        />
      </div>

      <span className="whitespace-nowrap text-[12px] font-medium text-white">
        {item.name}
      </span>
    </div>
  );
}
