import Link from "next/link";
import React from "react";

const causas = () => {
  return (
    <main className="flex justify-start align-middle min-h-screen flex-col items-center p-24 gap-12">
      <button className="absolute top-5 right-5">
        <Link href="/">Voltar</Link>
      </button>

      <table className="flex min-w-min flex-col text-black text-xs">
        <thead>
          <tbody>
            <tr className="flex gap-2 items-center">
              <th className="bg-gray-300	 flex p-4 w-28 items-center justify-center">
                Problema
              </th>
              <th className="bg-gray-300 flex p-4 w-20 items-center justify-center">
                Causa
              </th>
              <th className="bg-gray-300 flex p-4 w-20 items-center justify-center">
                Tipo
              </th>
              <th className="bg-gray-300 flex p-4 w-20 items-center justify-center">
                Criticidade
              </th>
            </tr>
          </tbody>

          <tbody className="flex gap-2">
            <tr className="flex flex-col gap-1 items-center mt-2">
              <td className="bg-white p-2 w-28 flex items-center justify-center">
                Problema
              </td>
              <td className="bg-white p-2 w-28 flex items-center justify-center">
                Problema
              </td>
              <td className="bg-white p-2 w-28 flex items-center justify-center">
                Problema
              </td>
              <td className="bg-white p-2 w-28 flex items-center justify-center">
                Problema
              </td>
            </tr>

            <tr className="flex flex-col gap-1 items-center mt-2">
              <td className="bg-white p-2 w-20 flex items-center justify-center">
                Problema
              </td>
              <td className="bg-white p-2 w-20 flex items-center justify-center">
                Problema
              </td>
              <td className="bg-white p-2 w-20 flex items-center justify-center">
                Problema
              </td>
              <td className="bg-white p-2 w-20 flex items-center justify-center">
                Problema
              </td>
            </tr>

            <tr className="flex flex-col gap-1 items-center mt-2">
              <td className="bg-white p-2 w-20 flex items-center justify-center">
                Problema
              </td>
              <td className="bg-white p-2 w-20 flex items-center justify-center">
                Problema
              </td>
              <td className="bg-white p-2 w-20 flex items-center justify-center">
                Problema
              </td>
              <td className="bg-white p-2 w-20 flex items-center justify-center">
                Problema
              </td>
            </tr>

            <tr className="flex flex-col gap-1 items-center mt-2">
              <td className="bg-white p-2 w-20 flex items-center justify-center">
                Problema
              </td>
              <td className="bg-white p-2 w-20 flex items-center justify-center">
                Problema
              </td>
              <td className="bg-white p-2 w-20 flex items-center justify-center">
                Problema
              </td>
              <td className="bg-white p-2 w-20 flex items-center justify-center">
                Problema
              </td>
            </tr>
          </tbody>
        </thead>
      </table>
    </main>
  );
};

export default causas;
