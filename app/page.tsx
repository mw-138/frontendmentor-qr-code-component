import Image from "next/image";
import QRCodeImage from "@/public/image-qr-code.png";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center flex-col gap-4 justify-center bg-slate-300">
      <article className="bg-white rounded-2xl flex flex-col items-center p-4 pb-10 gap-6">
        <Image
          src={QRCodeImage}
          height={288}
          width={288}
          alt="qr-code"
          className="bg-contain rounded-xl aspect-square"
        />
        <section className="w-[288px] p-2 text-center flex flex-col gap-4">
          <h1 className="text-slate-900 text-[22px] font-[700] tracking-normal leading-[120%]">
            Improve your front-end skills by building projects
          </h1>
          <p className="text-slate-500 text-[15px] font-[400] tracking-[0.2px] leading-[140%]">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </section>
      </article>
      <footer className="text-[11px] text-center text-attribution">
        Challenge by{" "}
        <Link
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
        >
          Frontend Mentor
        </Link>
        . Coded by{" "}
        <Link
          href="https://www.frontendmentor.io/profile/mw-138"
          target="_blank"
        >
          mw-138
        </Link>
        .
      </footer>
    </main>
  );
}
