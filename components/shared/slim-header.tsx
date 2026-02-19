import Link from "next/link";
import Image from "next/image";

export default function SlimHeader() {
  return (
    <div className="flex justify-between items-center h-[60px] px-4 sm:px-12 my-4">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/svgs/app-icon.svg"
          alt="Atlas View Icon"
          width={40}
          height={40}
          className="rounded-full w-[30px] h-[30px]"
        />
        <span className="font-semibold">Atlas View</span>
      </Link>
    </div>
  );
}
