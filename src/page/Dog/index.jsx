import { useState } from "react";

export default function DoacaoHelp() {
  const [imagem, setImagem] = useState(null);
  const chavePix = "seu-email@pix.com"; // Substitua pela sua chave real

  function copiarPix() {
    navigator.clipboard.writeText(chavePix);
    alert("Chave PIX copiada com sucesso! 🙏");
  }

  function handleImagemChange(e) {
    const file = e.target.files[0];
    if (file) {
      setImagem(URL.createObjectURL(file));
    }
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen px-6 py-10">
      <h1 className="text-5xl font-bold text-yellow-400 mb-6 text-center">
        Ajude o Help 🐶
      </h1>

      <p className="text-center text-xl max-w-3xl mx-auto mb-4">
        O <strong>Help</strong> é meu cachorro, um companheiro fiel que está passando por um momento muito difícil. 😢 Ele quebrou a boca e precisa de uma cirurgia urgente que custa <span className="text-red-400 font-bold">R$ 10.000</span>.
      </p>

      <p className="text-center text-lg max-w-2xl mx-auto mb-10">
        Cada segundo conta! Qualquer valor pode salvar a vida dele. Faça parte dessa corrente do bem. 🙏💛
      </p>

      <div className="flex flex-col items-center mb-10">
        <label className="mb-4 font-semibold text-lg">📸 Veja a foto do Help:</label>
        <img src="assets/photo_4936273280311079520_y.jpg" alt="cachorro help" />
      </div>

      <div className="text-center mt-12">
        <p className="text-xl mb-4 font-medium">✨ Chave PIX:</p>
        <p className="text-lg bg-gray-800 inline-block px-6 py-3 rounded-lg mb-4">{chavePix}</p>
        <br />
        <button
          onClick={copiarPix}
          className="mt-4 bg-yellow-400 text-black text-lg px-8 py-3 rounded-full font-bold hover:bg-yellow-300 transition"
        >
          Copiar chave PIX 🙌
        </button>
      </div>

      <p className="text-center mt-20 text-sm text-gray-400">
        Compartilhe com quem puder ajudar. Juntos podemos dar uma nova chance ao Help. 💖
      </p>
    </div>
  );
}
