interface StudyHeaderProps {
  song: string;
  title: string;
  biblicalText: string;
  theme: string;
}

export default function StudyHeader({ song, title, biblicalText, theme }: StudyHeaderProps) {
  // Función para formatear el texto bíblico en azul
  const formatBiblicalText = (text: string) => {
    const parts = text.split(/(".*?")/g);

    return parts.map((part, index) => {
      if (part.startsWith('"') && part.endsWith('"')) {
        return (
          <span key={index} className="text-blue-600 font-medium">
            {part}
          </span>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white rounded-lg shadow-md p-8 mb-6">
      {/* Canción */}
      <div className="text-center mb-4">
        <p className="text-lg font-semibold text-gray-600">{song}</p>
      </div>

      {/* Título */}
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
        {title}
      </h1>

      {/* Texto Bíblico */}
      <div className="text-center mb-6">
        <p className="text-xl leading-relaxed">
          {formatBiblicalText(biblicalText)}
        </p>
      </div>

      {/* Tema */}
      <div className="bg-blue-100 border-l-4 border-blue-600 p-4 rounded">
        <p className="text-lg text-gray-800 leading-relaxed">
          {theme}
        </p>
      </div>
    </div>
  );
}
