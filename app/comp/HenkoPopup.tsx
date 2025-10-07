import { useEffect, useState } from "react";

export default function HenkoPopup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("henkoPopupSeen");
    if (!hasSeenPopup) {
      setShowPopup(true);
      localStorage.setItem("henkoPopupSeen", "true");
    }
  }, []);

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]">
      {/* Caja blanca centrada */}
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-[90%] p-8 text-center relative">
        <h2 className="text-3xl font-serif mb-4 text-gray-900">Henko</h2>
        <p className="text-gray-700 leading-relaxed text-base">
          Henko busca hacer la vida más amena. En medio de tanto caos, pretende
          darte algo que se mueva dentro de ti, que despierte una sensación, una
          chispa, una pequeña transformación.
          <br />
          <br />
          La palabra <b>henko</b> proviene de una adaptación libre del término
          japonés <i>henki</i> (変気), que puede interpretarse como "energía
          cambiante" o "espíritu en movimiento".
          <br />
          <br />
          Henko no busca grandes revoluciones, sino pequeños cambios que hagan
          tu día un poco más ligero, más humano.
        </p>

        {/* Botón cerrar */}
        <button
          onClick={() => setShowPopup(false)}
          className="mt-6 bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}
