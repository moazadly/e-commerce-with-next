import Link from "next/link";

function NotFound() {
  return (
    <main className="text-center space-y-6 mt-24">
      <h1 className="text-3xl font-semibold">This page could not be found!</h1>
      <Link
        href="/"
        className="inline-block bg-primary text-white px-6 py-3 text-lg rounded-md"
      >
        Go back home
      </Link>
    </main>
  );
}

export default NotFound;
