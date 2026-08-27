import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <Image
        src="/brand/icon.png"
        alt=""
        width={36}
        height={36}
        className="size-9"
        priority
      />
      <span className={cn("text-lg font-extrabold tracking-tight", inverse ? "text-white" : "text-ink")}>
        BAIS
      </span>
    </span>
  );
}
