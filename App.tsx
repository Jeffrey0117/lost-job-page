
import React, { useState, useEffect } from 'react';
import { UNEMPLOYMENT_START_DATE } from './constants';
import { TimeElapsed } from './types';
import { SearchBar } from './components/SearchBar';
import { StatsGrid } from './components/StatsGrid';
import { PaperCard } from './components/PaperCard';
import { Coffee, Cloud, Sparkles, Clock } from 'lucide-react';

const App: React.FC = () => {
  const [timeElapsed, setTimeElapsed] = useState<TimeElapsed>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    totalSeconds: 0
  });
  const [isFuture, setIsFuture] = useState(false);

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date();
      const diff = now.getTime() - UNEMPLOYMENT_START_DATE.getTime();
      
      // Determine if we are counting down (future date) or counting up
      const isFutureDate = diff < 0;
      setIsFuture(isFutureDate);

      const absoluteDiff = Math.abs(diff);
      const totalSeconds = Math.floor(absoluteDiff / 1000);
      
      const days = Math.floor(totalSeconds / (3600 * 24));
      const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = Math.floor(totalSeconds % 60);

      setTimeElapsed({ 
        days: isFutureDate ? -days : days, 
        hours, 
        minutes, 
        seconds, 
        totalSeconds: isFutureDate ? -totalSeconds : totalSeconds 
      });
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen font-serif text-ink p-6 md:p-12 flex flex-col overflow-hidden relative">
      
      {/* Background doodles */}
      <div className="absolute top-10 right-10 text-stone-300 opacity-50 animate-float pointer-events-none">
        <Cloud size={120} />
      </div>
      <div className="absolute bottom-20 left-10 text-stone-300 opacity-50 pointer-events-none transform rotate-12">
        <Sparkles size={80} />
      </div>

      {/* Header Section */}
      <header className="max-w-4xl mx-auto w-full text-center space-y-6 mb-12 relative z-10">
        
        <div className="flex flex-col items-center gap-4">
          <div className="bg-stone-800 text-[#f0eadd] px-4 py-1 transform -rotate-2 shadow-lg">
             <span className="font-mono text-sm tracking-widest uppercase">Unemployment Tracker v1.0</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black text-ink drop-shadow-sm mt-4 leading-tight">
            今天是失業的第
            <br className="md:hidden" />
            <span className="inline-block mx-2 md:mx-4 relative group cursor-default">
              <span className="absolute inset-0 bg-yellow-200/60 transform -skew-x-12 rounded-lg scale-110 group-hover:bg-yellow-300/60 transition-colors"></span>
              <span className="relative font-mono text-6xl md:text-9xl text-stone-900">
                {Math.abs(timeElapsed.days)}
              </span>
            </span>
            天
          </h1>
        </div>

        {/* Witty Subtitles */}
        <div className="space-y-2">
           <p className="text-2xl md:text-3xl font-hand text-stone-600 transform -rotate-1">
             我是 <span className="underline decoration-wavy decoration-stone-400 decoration-2 font-bold text-stone-800">2025/11/3</span> 失業的
             {isFuture && <span className="ml-2 text-sm bg-red-100 text-red-800 px-2 py-0.5 rounded-full font-sans font-bold tracking-wider border border-red-200 align-middle rotate-3 inline-block">未來人?</span>}
           </p>
           
           <div className="flex items-center justify-center gap-2 text-stone-500 font-hand text-xl mt-4">
              <Clock size={18} className="mt-1" />
              <span>
                也就是 
                <span className="font-bold text-stone-700 mx-1 font-mono text-lg">{timeElapsed.hours}</span> 小時 
                <span className="font-bold text-stone-700 mx-1 font-mono text-lg">{timeElapsed.minutes}</span> 分 
                <span className="font-bold text-stone-700 mx-1 font-mono text-lg">{timeElapsed.seconds}</span> 秒
              </span>
           </div>
           
           <p className="text-stone-400 font-mono text-xs mt-2">
             {isFuture ? "(距離自由還有一段時間...)" : "(生命就在這些滴答聲中悄悄溜走了)"}
           </p>
        </div>

      </header>

      {/* Search Section */}
      <section className="w-full max-w-2xl mx-auto mb-16 relative z-20">
        <SearchBar />
        <div className="flex justify-between px-4 mt-2 font-hand text-stone-500 text-lg">
           <span className="transform -rotate-2">↑ 這裡有全世界的答案</span>
           <span className="transform rotate-1">除了「午餐吃什麼」↓</span>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto w-full flex-grow relative z-10">
        <StatsGrid time={timeElapsed} />

        {/* Bottom Note */}
        <div className="mt-24 mb-12 flex justify-center">
          <PaperCard className="max-w-lg w-full transform rotate-1 bg-white" dark={false}>
            <div className="flex gap-5 items-start">
              <div className="bg-yellow-100 p-3 rounded-full border-2 border-stone-800 shadow-[2px_2px_0px_#292524]">
                <Coffee size={28} className="text-stone-800" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-xl mb-2 font-serif">今日廢話</h4>
                <p className="font-hand text-2xl text-stone-700 leading-snug">
                  「休息是為了走更長的路，但如果不走，就可以一直休息了。」
                </p>
                <div className="mt-4 text-right">
                  <span className="text-xs font-mono text-stone-400 uppercase tracking-widest">--- Unknown Hero</span>
                </div>
              </div>
            </div>
          </PaperCard>
        </div>

      </main>

      <footer className="text-center py-8 text-stone-400 text-sm font-mono border-t border-stone-300/50 mt-auto">
        <p>Since 2025.11.03 • Built for the Unemployed Elite</p>
      </footer>
    </div>
  );
};

export default App;
