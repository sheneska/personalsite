'use client';

import { useEffect, useState } from 'react';

const words = ['Creative.', 'Engineer.'];
const typingSpeed = 120;
const deletingSpeed = 80;
const pauseTime = 1200;

export default function TypingText() {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout: NodeJS.Timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, text.length - 1));
        if (text === '') {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }, deletingSpeed);
    } else {
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, text.length + 1));
        if (text === currentWord) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <span className="text-purple-400 font-bold text-3xl md:text-4xl tracking-tight">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
}
