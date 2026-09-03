import Image from "next/image";

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <Image
      src={inverse ? "/brand/logo-white.png" : "/brand/logo-black.png"}
      alt="Bay Area Immigration Services"
      width={inverse ? 500 : 486}
      height={132}
      className="h-auto w-[200px]"
      priority
    />
  );
}
