
import React from 'react';
import { PaperCard } from './PaperCard';
import { TimeElapsed } from '../types';
import { FUN_FACTS } from '../constants';
import { Battery, Hourglass, Zap, CircleDollarSign } from 'lucide-react';

interface StatsGridProps {
  time: TimeElapsed;
}

export const StatsGrid: React.FC<StatsGridProps> = ({ time }) => {
  const totalSecondsAbs = Math.abs(time.totalSeconds);
  
  // Percentage of an 80-year life spent unemployed (or waiting for it)
  const lifePercentage = ((totalSecondsAbs / FUN_FACTS.AVG_LIFESPAN_SECONDS) * 100).toFixed(6);
  
  // How many TikToks you could have watched
  const tiktoksWatched = Math.floor(totalSecondsAbs / FUN_FACTS.TIKTOK_TIME).toLocaleString();
  
  // How many eggs boiled
  const eggsBoiled = Math.floor(totalSecondsAbs / FUN_FACTS.BOIL_EGG_TIME);

  // Minimum wage lost (Assuming ~183 TWD/hr for example context)
  const moneyLost = Math.floor((totalSecondsAbs / 3600) * 183).toLocaleString();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
      
      <PaperCard rotate="-rotate-1" className="bg-white">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-sm font-bold uppercase tracking-widest text-stone-500">生命消耗條</h3>
          <Battery className="text-stone-400" size={20} />
        </div>
        <div className="text-3xl font-mono font-bold text-stone-800 mb-2">{lifePercentage}%</div>
        <p className="font-hand text-xl text-stone-600 leading-snug">
          你寶貴的 80 年人生中，已經有這麼多比例貢獻給了這段美好的長假。
        </p>
      </PaperCard>

      <PaperCard rotate="rotate-2" dark={true}>
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-sm font-bold uppercase tracking-widest text-stone-400">短影音當量</h3>
          <Zap className="text-yellow-400" size={20} />
        </div>
        <div className="text-3xl font-mono font-bold text-stone-100 mb-2">{tiktoksWatched}</div>
        <p className="font-hand text-xl text-stone-300 leading-snug">
          如果你一直在刷手機，大概已經刷了這麼多支廢片。感覺充實嗎？
        </p>
      </PaperCard>

      <PaperCard rotate="-rotate-2" className="bg-[#fefce8]">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-sm font-bold uppercase tracking-widest text-stone-500">煮蛋計時器</h3>
          <Hourglass className="text-stone-400" size={20} />
        </div>
        <div className="text-3xl font-mono font-bold text-stone-800 mb-2">{eggsBoiled} <span className="text-base font-normal">顆</span></div>
        <p className="font-hand text-xl text-stone-600 leading-snug">
          這些時間足夠把 {eggsBoiled} 顆雞蛋煮成完美的全熟。膽固醇要注意。
        </p>
      </PaperCard>

      <PaperCard rotate="rotate-1" className="bg-white">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-sm font-bold uppercase tracking-widest text-stone-500">隱形成本</h3>
          <CircleDollarSign className="text-green-600" size={20} />
        </div>
        <div className="text-2xl font-mono font-bold text-stone-800 mb-2">NT$ {moneyLost}</div>
        <p className="font-hand text-xl text-stone-600 leading-snug">
          以基本時薪計算，你已經「少賺」了這麼多錢。別想了，心會痛。
        </p>
      </PaperCard>

    </div>
  );
};
