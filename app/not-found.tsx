import Link from "next/link";
 
export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-8xl font-black">
        404
      </h1>
 
      <p className="mt-4 text-slate-400">
        Page not found
      </p>
 
      <Link
        href="/"
        className="mt-8 rounded-xl bg-blue-500 px-6 py-3"
      >
        Back Home
      </Link>
    </div>
  );
}
 