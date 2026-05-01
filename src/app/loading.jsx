import React from "react";

const LoadingPage = () => {
  return (
    <div className="flex h-[80vh] flex-col items-center justify-center bg-[#FDFCF8]">
      <div className="relative flex items-center justify-center">
        {/* Outer Ring */}
        <div className="h-20 w-20 rounded-full border-4 border-slate-100 border-t-orange-500 animate-spin" />
        
        {/* Inner Pulsing Logo or Dot */}
        <div className="absolute h-10 w-10 rounded-full bg-orange-100 animate-pulse flex items-center justify-center">
           <div className="h-2 w-2 rounded-full bg-orange-500" />
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <h2 className="text-sm font-bold tracking-[0.2em] text-slate-900 uppercase">
          Aurelia Summer
        </h2>
        <p className="text-xs text-slate-400 mt-2 italic">Preparing your experience...</p>
      </div>
    </div>
  );
};

export default LoadingPage;