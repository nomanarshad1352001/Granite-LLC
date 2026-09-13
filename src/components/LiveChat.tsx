"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, MessageCircle, Minimize2, Send, Sparkles, X } from "lucide-react";

type ChatMessage = { id: number; sender: "team" | "visitor"; text: string };

const quickReplies = ["How much do countertops cost?", "I need a kitchen estimate", "Do you serve my area?"];
const answers: Record<string, string> = {
  "How much do countertops cost?": "Countertop projects commonly begin around $2,800, with final pricing based on material, square footage, edge profile, and cutouts. I can take you to our price guide.",
  "I need a kitchen estimate": "Wonderful. A kitchen remodel often starts around $18,000. Our estimate form collects your scope, photos, measurements, and preferred appointment date.",
  "Do you serve my area?": "We serve the greater metro area and surrounding communities within an approximately 45-mile radius. Share your ZIP code in the estimate form and our team will confirm availability.",
};

export function LiveChat() {
  const [open, setOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([{ id: 1, sender: "team", text: "Welcome to House of Granite. I’m Sofia, your virtual project concierge. How may I help with your home?" }]);

  const replyTo = (text: string) => {
    if (!text.trim()) return;
    setMessages((current) => [...current, { id: Date.now(), sender: "visitor", text: text.trim() }]);
    setInput("");
    setTyping(true);
    window.setTimeout(() => {
      setMessages((current) => [...current, { id: Date.now() + 1, sender: "team", text: answers[text] ?? "Thank you for sharing that. Our design team can review the details during a complimentary consultation." }]);
      setTyping(false);
    }, 700);
  };

  if (!open) {
    return (
      <button onClick={() => setOpen(true)} className="fixed bottom-5 right-5 z-[60] flex items-center gap-3 rounded-full border border-[#363b36] bg-[#111512]/95 p-2 pr-4 text-left shadow-[0_22px_70px_-18px_rgba(0,0,0,.85)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-[#65583d]" aria-label="Open live chat">
        <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-[#c9ad70] text-[#11120f]"><MessageCircle size={19} /><i className="absolute right-0 top-0 h-3 w-3 rounded-full border-2 border-[#111512] bg-[#65a58a]" /></span>
        <span><span className="block text-xs font-semibold text-[#f4f0e8]">Project concierge</span><span className="block text-[10px] text-[#77746e]">Online · instant demo reply</span></span>
      </button>
    );
  }

  return (
    <div className={`fixed bottom-4 right-4 z-[60] w-[calc(100vw-2rem)] max-w-[370px] overflow-hidden rounded-[24px] border border-[#363b36] bg-[#0d100e] shadow-[0_30px_100px_-22px_rgba(0,0,0,.9)] transition-all ${minimized ? "h-[76px]" : "h-[560px]"}`}>
      <div className="flex h-[76px] items-center gap-3 border-b border-white/10 bg-gradient-to-r from-[#17221d] to-[#1c392f] px-4 text-white">
        <span className="relative flex h-11 w-11 items-center justify-center rounded-full border border-[#c9ad70]/30 bg-[#c9ad70]/10 text-[#d8bd80]"><Sparkles size={18} /><i className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[#1c392f] bg-[#65a58a]" /></span>
        <div className="flex-1"><p className="text-sm font-semibold">Sofia · Concierge</p><p className="mt-0.5 flex items-center gap-1 text-[10px] text-white/45"><Check size={10} /> Online now · Demo chat</p></div>
        <button onClick={() => setMinimized((value) => !value)} className="rounded-lg p-2 text-white/45 transition hover:bg-white/10 hover:text-white" aria-label="Minimize chat"><Minimize2 size={15} /></button>
        <button onClick={() => setOpen(false)} className="rounded-lg p-2 text-white/45 transition hover:bg-white/10 hover:text-white" aria-label="Close chat"><X size={16} /></button>
      </div>

      {!minimized && <>
        <div className="h-[350px] space-y-3 overflow-y-auto bg-[radial-gradient(circle_at_top_right,rgba(39,71,58,.22),transparent_55%)] px-4 py-4">
          <div className="mx-auto mb-3 w-fit rounded-full border border-[#29312b] bg-[#111512] px-3 py-1 text-[8px] font-semibold uppercase tracking-wider text-[#77746e]">Today</div>
          {messages.map((message) => <div key={message.id} className={`flex ${message.sender === "visitor" ? "justify-end" : "justify-start"}`}><div className={`max-w-[84%] rounded-2xl px-3.5 py-2.5 text-xs leading-5 ${message.sender === "visitor" ? "rounded-br-md bg-[#c9ad70] text-[#11120f]" : "rounded-bl-md border border-[#29312b] bg-[#141815] text-[#c2beb6]"}`}>{message.text}</div></div>)}
          {typing && <div className="flex justify-start"><div className="flex gap-1 rounded-2xl rounded-bl-md border border-[#29312b] bg-[#141815] px-4 py-3"><i className="chat-dot h-1.5 w-1.5 rounded-full bg-[#77746e]" /><i className="chat-dot h-1.5 w-1.5 rounded-full bg-[#77746e] [animation-delay:.15s]" /><i className="chat-dot h-1.5 w-1.5 rounded-full bg-[#77746e] [animation-delay:.3s]" /></div></div>}
          {messages.length === 1 && <div className="space-y-2 pt-2">{quickReplies.map((reply) => <button key={reply} onClick={() => replyTo(reply)} className="block rounded-full border border-[#343b35] bg-[#111512] px-3 py-2 text-left text-[10px] font-medium text-[#aaa49b] transition hover:border-[#65583d] hover:text-[#d8bd80]">{reply}</button>)}</div>}
        </div>
        <div className="border-t border-[#29312b] bg-[#111512] p-3">
          <form onSubmit={(event) => { event.preventDefault(); replyTo(input); }} className="flex items-center gap-2 rounded-xl border border-[#343b35] bg-[#0d100e] p-1.5 pl-3 focus-within:border-[#65583d] focus-within:ring-4 focus-within:ring-[#c9ad70]/5"><input value={input} onChange={(event) => setInput(event.target.value)} placeholder="Type your question…" className="min-w-0 flex-1 bg-transparent text-xs text-[#f4f0e8] outline-none placeholder:text-[#66645f]" /><button type="submit" disabled={!input.trim()} className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#c9ad70] text-[#11120f] transition hover:bg-[#dfc98d] disabled:opacity-35" aria-label="Send message"><Send size={13} /></button></form>
          <div className="mt-2 flex items-center justify-between px-1"><span className="text-[9px] text-[#66645f]">No personal information is stored.</span><Link href="/estimate" className="flex items-center gap-1 text-[9px] font-semibold text-[#c9ad70]">Full estimate <ArrowRight size={10} /></Link></div>
        </div>
      </>}
    </div>
  );
}
