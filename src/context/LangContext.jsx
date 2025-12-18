import { createContext, useState } from "react";
import ar from "../languages/ar.json";
import en from "../languages/en.json";

export const LangContext = createContext();

export default function LangProvider({ children }) {
  const [lang, setLang] = useState("ar");
  const translations = lang === "ar" ? ar : en;

  return (
    <LangContext.Provider value={{ lang, setLang, translations }}>
      {children}
    </LangContext.Provider>
  );
}
