import Image from "next/image";

type LogoProps = {
  variant?: "white" | "normal";
};

export default function Logo({ variant = "normal" }: LogoProps) {

  return (
    <Image
      src="/miraculoussoftsolutions.svg"
      alt="Logo"
      width={180}
      height={50}
      style={{
        filter: variant === "white" ? "brightness(0) invert(1)" : "none",
      }}
    />
  );
}
