import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <Image
        src="/images/hero-photo.jpg"
        alt="Pravitha & Abhijith"
        fill
        priority
        sizes="100vw"
        className="object-contain object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-5 sm:px-6 md:px-8 text-center">

        <p className="uppercase tracking-[0.25em] sm:tracking-[0.35em] md:tracking-[0.45em] text-white text-[10px] sm:text-xs md:text-sm">
          Om Ganeshaya Namah
        </p>

        <h1 className="mt-6 sm:mt-8 font-serif font-semibold leading-tight text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Pravitha P V
          <br />
          <span className="text-[#F6D28B]">&</span>
          <br />
          Abhijith Roy
        </h1>

        <p className="mt-6 sm:mt-8 uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[11px] sm:text-xs md:text-sm text-white/80">
          Wedding Film Invitation
        </p>

      </div>
    </section>
  );
}