'use client'

// import Lottie from "lottie-react";
// import loaderJson1 from "@/public/animations/notFoundMagnifyingGlass.json";
// import loaderJson1 from "@/public/pageAnimations/notFoundMagnifyingGlass.json";
import Link from "next/link";

// export const metadata = {
//   title: "404 - Page Not Found | Bunnx",
//   description: "This page could not be found. Please check the URL or return to the homepage.",
// };

export default function Custom404() {

  return (
    <div className="container mx-auto max-w-screen-xl px-4 md:px-6 pb-16 flex flex-col gap-20 items-center justify-center min-h-screen">

      {/* First 404 Section */}
      {/* <div className="flex flex-col items-center text-center gap-6 p-6 w-full max-w-4xl">
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-6">
          <div className="text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800">404</h1>
            <h2 className="mt-4 text-2xl font-semibold"> Page Not Found</h2>
            <p className="text-lg text-gray-600 mt-2">We&apos; seem to find the page you&apos;re looking for..</p>

            <Link href="/" passHref>
              <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                Go Home
              </button>
            </Link>

          </div>
          <Lottie animationData={loaderJson} style={{ maxWidth: "30rem" }} loop={true} />
        </div>

      </div> */}

      {/* <div className="border border-gray-200 w-full"></div> */}

      {/* Second 404 Section */}
      <div className="flex flex-col items-center text-center gap-6 p-6 w-full max-w-4xl">
        <div className="flex flex-col md:flexrow items-center gap-6">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800">404</h1>
            <h2 className="mt-2 text-2xl font-semibold"> Page Not Found</h2>
            <p className="text-md text-gray-500 mt-2">We&apos; seem to find the page you&apos;re looking for...</p>
          </div>
          {/* <Lottie animationData={loaderJson1} style={{ maxWidth: "30rem" }} loop={true} /> */}
        </div>
        <Link href="/" passHref>
          <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            Go Home
          </button>
        </Link>
      </div>


      {/* <div className="border border-gray-200 w-full"></div> */}

      {/* Third 404 Section */}
      {/* <div className="flex flex-col items-center text-center gap-6 p-6 w-full max-w-4xl">
        <Lottie animationData={loaderJson2} style={{ maxWidth: "40rem" }} loop={true} />
        <Link href="/" passHref>
          <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            Go Home
          </button>
        </Link>
      </div> */}
    </div>
  );
}
