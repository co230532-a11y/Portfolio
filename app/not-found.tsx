import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg text-[#efefef]">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-400 mb-8">Page not found</p>
        <Link
          href="/"
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition inline-block"
        >
          Return home
        </Link>
      </div>
    </div>
  );
}
