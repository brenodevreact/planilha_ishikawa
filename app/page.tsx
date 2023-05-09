import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center align-middle min-h-screen flex-col items-center p-24 gap-12">
      <h2 className="text-3xl	text-center">Selecione o destino</h2>

      <div className="flex flex-col gap-8 min-w-full">
        <Link href="/causas">
          <button className="min-w-full bg-gradient-to-r from-indigo-500 p-3 rounded-md text-xl">
            Causas
          </button>
        </Link>
        <button className="bg-gradient-to-r from-indigo-500 p-3 rounded-md text-xl">
          Causas
        </button>

        <button className="bg-gradient-to-r from-indigo-500 p-3 rounded-md text-xl">
          Causas
        </button>
        <button className="bg-gradient-to-r from-indigo-500 p-3 rounded-md text-xl">
          Causas
        </button>
        <button className="bg-gradient-to-r from-indigo-500 p-3 rounded-md text-xl">
          Causas
        </button>
      </div>
    </main>
  );
}
