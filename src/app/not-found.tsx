import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#FDF8F3] text-[#4B2E2E] p-6">
      <div className="max-w-xl text-center">
        <h1 className="text-5xl font-bold mb-4">Page Not Found</h1>
        <p className="text-lg text-[#5A4B43] mb-6">
          The page you’re looking for does not exist.
        </p>
        <Link
          href="/"
          className="inline-block rounded-full bg-[#3D2A23] px-8 py-4 text-white hover:bg-[#241710] transition"
        >
          Go back home
        </Link>
      </div>
    </main>
  );
}
