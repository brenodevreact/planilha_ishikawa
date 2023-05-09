import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center align-middle  flex-col items-center p-12 gap-12">
      <h2 className="text-3xl	text-center">Selecione o destino</h2>

      <div className="flex flex-col gap-8 min-w-full">
        <Link href="/causas">
          <button className="min-w-full bg-black shadow-7xl shadow-indigo-500	 p-3 rounded-md text-xl">
            Causas
          </button>
        </Link>
        <button className="shadow-7xl shadow-indigo-500 p-3 rounded-md text-xl">
          Problemas analisados
        </button>

        <button className="shadow-7xl shadow-indigo-500 p-3 rounded-md text-xl">
          Ações corretivas
        </button>
        <button className="shadow-7xl shadow-indigo-500 p-3 rounded-md text-xl">
          Controle das ações
        </button>
        <button className="shadow-7xl shadow-indigo-500 p-3 rounded-md text-xl">
          Espinha de peixe
        </button>
        <button className="shadow-7xl shadow-indigo-500 p-3 rounded-md text-xl">
          Relatório
        </button>

        <button className="shadow-7xl shadow-indigo-500 p-3 rounded-md text-xl">
          Dashboards
        </button>
        <button className="shadow-7xl shadow-indigo-500 p-3 rounded-md text-xl">
          Instruções
        </button>
      </div>
    </main>
  );
}
