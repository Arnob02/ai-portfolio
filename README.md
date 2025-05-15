# 🤖 ArnobGPT – AI-Powered Portfolio Chatbot

[![Vercel](https://img.shields.io/badge/Live-Demo-000?style=for-the-badge&logo=vercel&logoColor=white)](https://ai-portfolio-bep6.vercel.app/)
[![Tech](https://img.shields.io/badge/Built%20With-Next.js%20%7C%20OpenAI%20%7C%20AstraDB-blue?style=for-the-badge)](#)

> “Ask me anything—except my Valorant rank.” – _ArnobGPT_

---

## 🚀 About

**ArnobGPT** is an AI-driven portfolio that lets you interact with my projects, background, and fun facts – through a chatbot interface!  
Instead of reading a wall of text, just ask me questions like:

- “Who is Arnob Deb?”
- “What projects have you built?”
- “Where do you live?”
- “What is My-Sensei?”

Built for fun, powered by serious tech. 😎

---

## 🌐 Live Demo

👉 [https://ai-portfolio-bep6.vercel.app/](https://ai-portfolio-theta-self.vercel.app/)

---

## 🧠 Features

- 🔍 **RAG-based AI chatbot** trained on my background and projects
- 💬 Real-time responses using OpenAI's `gpt-3.5-turbo`
- 📁 Project-aware vector search using **Astra DB Vector**
- 🎨 Stylish, animated UI with Tailwind CSS and Next.js
- 🤖 Uses [ai SDK](https://ai-sdk.dev/) for streaming chat

---

## 🛠️ Tech Stack

| Layer         | Tech                                 |
|--------------|--------------------------------------|
| Frontend      | `Next.js`, `React`, `Tailwind CSS`   |
| Chat Logic    | `ai@3.1.28`, `useChat()`              |
| AI Model      | `OpenAI GPT-3.5 Turbo`               |
| Vector Store  | `@datastax/astra-db-ts`              |
| Deployment    | `Vercel`                             |

---

## 📸 Screenshots

![image](https://github.com/user-attachments/assets/df6838a5-9d8f-4a0c-a0e8-5c20433e3958)

---

## 🧑‍💻 How It Works

1. User types a question
2. The app generates an OpenAI embedding
3. Vector search is performed on Astra DB using $vector sort
4. The top 5 documents become the context
5. GPT-3.5 generates a response with full streaming enabled

---

## 🧪 Try Asking It…

- "What's Arnob's Educational Background??"
- "Tell me about his Social Media accounts."
- "How many projects has Arnob done?"
- "What’s his email or GitHub?"

---

