import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

const poppins = localFont({
  src: "./fonts/Roboto-Black.ttf", // ✅ REQUIRED
  variable: "--font-poppins",
});


export default function Home() {

  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col items-center justify-center gap-4">
          <p className={`text-3xl font-bold ${poppins.className}`}>
            The Best URL shortener in the Market

          </p>
          <p className="px-17 text-center">
            We are the most stringth forward URL Shortner in the world.Most of the URL shortner will trake you or ask you to give your details for login. We understand your needs and hance we have created this URL shorten.
          </p>
          <div className='flex gap-3 justify-start text-white'>
            <Link href="/shorten"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold'>Try Now</button></Link>
            <Link href="/github"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold'>Github</button></Link>
          </div>
        </div>
        <div className=" flex justify-start relative">
          <Image alt="An Image of a vector" src={"/vector.png"} fill={true} />

        </div>

      </section>
    </main>
  );
}
