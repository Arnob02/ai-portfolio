"use client";

import Image from "next/image";
import { useChat } from "ai/react";
import { useRef, useEffect } from "react";

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit, isLoading, error } =
    useChat({ api: "/api/chat" });

  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const getText = (msg) => {
    if (typeof msg.content === "string") return msg.content;
    if (Array.isArray(msg.content))
      return msg.content.map((c) => c?.text ?? "").join(" ");
    if (Array.isArray(msg.parts))
      return msg.parts.map((p) => p?.text ?? "").join(" ");
    return "[Unknown format]";
  };

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black text-white font-sans">
      {/* Background Image without blur */}
      <Image
        fill
        src="/hello.jpg"
        alt="Cool Tech Background"
        className="object-cover"
        priority
      />

      {/* Main Content */}
      <div className="absolute inset-0 px-4 flex flex-col gap-5 items-center bg-black/40">
        <h1 className="text-4xl md:text-5xl font-bold text-white mt-10 font-orbitron drop-shadow-lg text-center leading-snug">
          Welcome to ArnobGPT 😎
          <br />
          Ask me anything—except my Valorant rank
        </h1>

        <section className="w-full flex-1 flex flex-col overflow-y-auto pt-4 pb-6">
          {messages.length === 0 ? (
            <p className="text-center text-xl text-gray-300">
              I am ready when you are 👇
            </p>
          ) : (
            messages.map((msg, idx) => (
              <div
                key={msg.role + idx}
                className={`rounded-2xl p-4 px-6 max-w-[80%] shadow-md ${
                  msg.role === "user"
                    ? "ml-auto bg-blue-700 text-white"
                    : "mr-auto bg-purple-700 text-white"
                }`}
              >
                <b className="block mb-1 text-sm opacity-70">
                  {msg.role === "user" ? "You" : "ArnobGPT"}
                </b>
                <span className="whitespace-pre-wrap">{getText(msg)}</span>
              </div>
            ))
          )}

          {isLoading && (
            <div className="text-right text-sm italic text-gray-300 mt-3 animate-pulse">
              Thinking...
            </div>
          )}

          <div ref={endRef} />
        </section>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(e);
          }}
          className="w-full flex gap-2 mt-2 mb-6"
        >
          <input
            onChange={handleInputChange}
            value={input}
            type="text"
            placeholder="Ask something about Arnob..."
            className="flex-1 bg-white text-black px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-3 rounded-lg font-semibold shadow-md hover:from-indigo-600 hover:to-purple-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </main>
  );
}
