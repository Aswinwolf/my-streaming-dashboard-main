"use client";

import React from "react";

export default function TrailerModal({ trailerKey, onClose }: any) {
  if (!trailerKey) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 animate-fadeIn">
      <div className="bg-black rounded-lg shadow-lg w-[90%] max-w-3xl relative">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-2xl hover:text-gray-300"
        >
          ✕
        </button>

        {/* YouTube Player */}
        <iframe
          width="100%"
          height="400"
          src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
          title="Trailer"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="rounded-lg"
        ></iframe>
      </div>
    </div>
  );
}
