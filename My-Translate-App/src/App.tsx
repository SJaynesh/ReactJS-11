import { useState } from 'react';
import { translate } from './services/translateService';
import { Languages, ArrowRightLeft, Loader2 } from 'lucide-react'; // Optional: for icons

export default function App() {
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [source, setSource] = useState<string>("en");
  const [target, setTarget] = useState<string>("hi"); // Fixed typo from 'setTrager'
  const [loader, setLoader] = useState<boolean>(false);

  const onClickTranslate = async () => {
    if (!input) {
      alert("Please enter some text to translate.");
      return;
    }

    setLoader(true);
    try {
      let translateOutput: string = await translate(input, source, target);
      setOutput(translateOutput);
    } catch (error) {
      console.error("Translation failed", error);
    } finally {
      setLoader(false);
    }
  };

  const swapLanguages = () => {
    setSource(target);
    setTarget(source);
    setInput(output);
    setOutput(input);
  };

  const languages = [
    { value: "en", label: "English" },
    { value: "hi", label: "Hindi" },
    { value: "mr", label: "Marathi" },
    { value: "gu", label: "Gujarati" },
    { value: "es", label: "Spanish" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-slate-900 flex items-center justify-center gap-3">
            <Languages className="text-blue-600 w-10 h-10" />
            Lingo<span className="text-blue-600">Swift</span>
          </h1>
          <p className="mt-2 text-slate-600">Instant, accurate translations across multiple languages.</p>
        </div>

        {/* Translation Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">

          {/* Toolbar */}
          <div className="bg-slate-50 border-b border-slate-200 p-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 w-full md:w-auto">
              <span className="text-xs font-semibold uppercase text-slate-400 ml-1">From</span>
              <select
                value={source}
                onChange={(e) => setSource(e.target.value)}
                className="bg-white border border-slate-300 text-slate-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none transition-all"
              >
                {languages.map(lang => <option key={lang.value} value={lang.value}>{lang.label}</option>)}
              </select>
            </div>

            <button
              onClick={swapLanguages}
              className="p-2 rounded-full hover:bg-slate-200 transition-colors text-slate-500"
              title="Swap Languages"
            >
              <ArrowRightLeft size={20} />
            </button>

            <div className="flex items-center gap-2 w-full md:w-auto">
              <span className="text-xs font-semibold uppercase text-slate-400 ml-1">To</span>
              <select
                value={target}
                onChange={(e) => setTarget(e.target.value)}
                className="bg-white border border-slate-300 text-slate-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none transition-all"
              >
                {languages.map(lang => <option key={lang.value} value={lang.value}>{lang.label}</option>)}
              </select>
            </div>
          </div>

          {/* Text Areas */}
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            {/* Input Section */}
            <div className="p-6">
              <textarea
                placeholder="Type your text here..."
                className="w-full h-64 resize-none border-none focus:ring-0 text-lg text-slate-800 placeholder-slate-400"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <div className="mt-4 flex justify-end">
                <button
                  onClick={onClickTranslate}
                  disabled={loader}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl shadow-lg shadow-blue-200 transition-all active:scale-95 disabled:opacity-70 flex items-center gap-2"
                >
                  {loader ? <Loader2 className="animate-spin" size={20} /> : "Translate"}
                </button>
              </div>
            </div>

            {/* Output Section */}
            <div className="p-6 bg-slate-50/50 relative">
              <textarea
                readOnly
                placeholder="Translation will appear here..."
                className="w-full h-64 resize-none border-none bg-transparent focus:ring-0 text-lg text-blue-900 font-medium placeholder-slate-400"
                value={output}
              />
              {loader && (
                <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px] flex items-center justify-center">
                  <div className="flex flex-col items-center gap-2">
                    <Loader2 className="animate-spin text-blue-600" size={32} />
                    <span className="text-blue-600 font-medium">Translating...</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer info */}
        <p className="text-center mt-8 text-slate-400 text-sm">
          Built with React & Tailwind CSS
        </p>
      </div>
    </div>
  );
}