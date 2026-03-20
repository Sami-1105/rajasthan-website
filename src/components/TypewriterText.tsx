import { useEffect, useState } from "react";

interface TypewriterTextProps {
  texts: string[];
  className?: string;
}

const TypewriterText = ({ texts, className = "" }: TypewriterTextProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const text = texts[currentTextIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentChar < text.length) {
            setCurrentChar((prev) => prev + 1);
          } else {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          if (currentChar > 0) {
            setCurrentChar((prev) => prev - 1);
          } else {
            setIsDeleting(false);
            setCurrentTextIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? 30 : 70
    );
    return () => clearTimeout(timeout);
  }, [currentChar, isDeleting, currentTextIndex, texts]);

  return (
    <span className={className}>
      {texts[currentTextIndex].substring(0, currentChar)}
      <span
        className="inline-block w-0.5 h-[1em] ml-0.5 align-text-bottom bg-saffron"
        style={{ animation: "blink-caret 0.75s step-end infinite" }}
      />
    </span>
  );
};

export default TypewriterText;
