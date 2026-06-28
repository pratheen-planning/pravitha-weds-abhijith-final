import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] w-full overflow-hidden">
      <Image
        src="/images/hero-photo.jpg"
        alt="Couple"
        fill
        priority
        className="object-contain object-center"
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <p className="uppercase tracking-[0.45em] text-white text-sm">Om Ganeshaya Namah</p>
        <h1 className="mt-8 text-white font-serif font-semibold text-5xl md:text-7xl leading-tight">
          Pravitha P V
          <br />
          <span className="text-yellow-300">&</span>
          <br />
          Abhijith Roy
        </h1>
        <p className="mt-8 text-white/80 tracking-[0.25em] uppercase text-xs">
          Wedding Film Invitation
        </p>
      </div>
    </section>
  );
}
