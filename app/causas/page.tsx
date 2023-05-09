import Link from "next/link";
import React from "react";

const causas = () => {
  return (
    <main className="flex justify-center align-middle min-h-screen flex-col items-center p-24 gap-12">
      <button>
        <Link href="/">Voltar</Link>
      </button>

      <div>
        <table>
          <thead>
            <tr>
              <th>Celula1</th>
              <th>Celula2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Celula3</td>
              <td>Celula4</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default causas;
