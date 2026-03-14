import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Shield, 
  Target, 
  Info, 
  BookOpen, 
  CheckCircle2, 
  XCircle, 
  ChevronRight, 
  Menu, 
  X,
  Search,
  Trophy,
  RefreshCw
} from 'lucide-react';
import { BASIC_SYMBOLS, UNIT_SIZES, UNIT_TYPES, EQUIPMENT_SYMBOLS, CONTROL_SYMBOLS, INSTALLATION_SYMBOLS, MOBILITY_SYMBOLS, TacticalSymbol } from './data/symbols';

// --- Components ---

interface SymbolCardProps {
  symbol: TacticalSymbol;
  onClick?: () => void;
}

const SymbolCard = ({ symbol, onClick }: SymbolCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="glass-panel p-4 rounded-sm cursor-pointer hover:border-tactical-accent/50 transition-all group"
    >
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 flex items-center justify-center rounded bg-slate-900/50 border border-white/5">
          <NATOIcon type={symbol.id} affiliation="friend" />
        </div>
        <div>
          <h3 className="font-bold text-white uppercase tracking-tight">{symbol.name}</h3>
          <p className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">{symbol.description || symbol.meaning}</p>
        </div>
      </div>
    </motion.div>
  );
};

const NATOIcon = ({ type, size, affiliation = 'friend', domain = 'land' }: { type: string; size?: string; affiliation?: string; domain?: string }) => {
  const colors = {
    friend: '#3b82f6',
    enemy: '#ef4444',
    neutral: '#22c55e',
    unknown: '#eab308'
  };

  const color = colors[affiliation as keyof typeof colors] || colors.friend;

  return (
    <div className="relative w-24 h-24 flex items-center justify-center">
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full drop-shadow-lg">
        {/* Affiliation Shape */}
        <g fill="rgba(255,255,255,0.05)" stroke={color} strokeWidth="3">
          {affiliation === 'friend' && (
            <rect x="10" y="25" width="80" height="50" />
          )}
          {affiliation === 'enemy' && (
            <path d="M50 15 L85 50 L50 85 L15 50 Z" />
          )}
          {affiliation === 'neutral' && (
            <rect x="25" y="25" width="50" height="50" />
          )}
          {affiliation === 'unknown' && (
            <path d="M50 15 Q70 15 70 35 Q90 35 90 50 Q90 65 70 65 Q70 85 50 85 Q30 85 30 65 Q10 65 10 50 Q10 35 30 35 Q30 15 50 15" />
          )}
        </g>

        {/* Unit Type Icons - Accurate APP-6 */}
        <g stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          {type === 'infantry' && (
            <>
              <line x1="10" y1="25" x2="90" y2="75" />
              <line x1="90" y1="25" x2="10" y2="75" />
            </>
          )}
          {type === 'armor' && (
            <ellipse cx="50" cy="50" rx="22" ry="10" />
          )}
          {type === 'artillery' && (
            <circle cx="50" cy="50" r="5" fill={color} stroke="none" />
          )}
          {type === 'recon' && (
            <line x1="10" y1="75" x2="90" y2="25" />
          )}
          {type === 'engineer' && (
            <path d="M30 40 L30 60 M30 50 L70 50 M70 40 L70 60 M50 40 L50 60" />
          )}
          {type === 'signals' && (
            <path d="M35 65 L50 35 L65 65" />
          )}
          {type === 'medical' && (
            <path d="M50 35 L50 65 M35 50 L65 50" />
          )}
          {type === 'anti-tank' && (
            <path d="M35 65 L50 35 L65 65 Z" />
          )}
          {type === 'air-defense' && (
            <path d="M30 65 Q50 25 70 65" />
          )}
          {type === 'maintenance' && (
            <path d="M35 50 L65 50 M35 45 L35 55 M65 45 L65 55" />
          )}
          {type === 'supply' && (
            <line x1="30" y1="50" x2="70" y2="50" />
          )}
          {type === 'aviation' && (
            <path d="M20 50 Q50 20 80 50 Q50 80 20 50 M50 35 L50 65" />
          )}
          {type === 'mp' && (
            <text x="50" y="58" textAnchor="middle" fill={color} fontSize="18" fontWeight="bold" stroke="none" fontFamily="monospace">MP</text>
          )}
          {type === 'cbrn' && (
            <path d="M35 40 L65 60 M65 40 L35 60 M50 40 L50 60" />
          )}
          {type === 'aviation-fixed' && (
            <path d="M30 40 Q50 50 70 40 Q50 50 30 60 Q50 50 70 60" />
          )}
          {type === 'aviation-rotary' && (
            <path d="M30 50 Q40 40 50 50 Q60 60 70 50 Q60 40 50 50 Q40 60 30 50" />
          )}
          {type === 'missile' && (
            <path d="M50 65 L50 35 M45 40 L50 35 L55 40" />
          )}
          {type === 'airborne' && (
            <path d="M30 55 Q50 30 70 55 M30 55 L70 55" />
          )}
          {type === 'air-assault' && (
            <path d="M35 40 L50 60 L65 40" />
          )}
          {type === 'self-propelled' && (
            <>
              <circle cx="50" cy="45" r="5" fill={color} stroke="none" />
              <path d="M35 60 L65 60 M35 65 L65 65" />
            </>
          )}
          {type === 'mechanized' && (
            <>
              <ellipse cx="50" cy="50" rx="22" ry="10" />
              <line x1="28" y1="40" x2="72" y2="60" />
              <line x1="72" y1="40" x2="28" y2="60" />
            </>
          )}
          {type === 'rocket' && (
            <path d="M50 65 L50 35 M45 40 L50 35 L55 40 M35 65 Q50 55 65 65" />
          )}
          {type === 'tank' && (
            <ellipse cx="50" cy="50" rx="22" ry="10" />
          )}
          {type === 'ifv' && (
            <>
              <ellipse cx="50" cy="50" rx="22" ry="10" />
              <line x1="35" y1="40" x2="65" y2="60" />
              <line x1="65" y1="40" x2="35" y2="60" />
            </>
          )}
          {type === 'apc' && (
            <>
              <ellipse cx="50" cy="50" rx="22" ry="10" />
              <line x1="50" y1="40" x2="50" y2="60" />
            </>
          )}
          {type === 'howitzer' && (
            <>
              <circle cx="50" cy="50" r="5" fill={color} stroke="none" />
              <line x1="50" y1="40" x2="50" y2="60" />
            </>
          )}
          {type === 'mortar' && (
            <path d="M50 35 L50 65 M45 60 L50 65 L55 60" />
          )}
          {type === 'machine-gun' && (
            <path d="M30 50 L70 50 M60 45 L70 50 L60 55 M30 45 L30 55" />
          )}
          {type === 'at-launcher' && (
            <path d="M30 50 L70 50 M60 45 L70 50 L60 55 M30 45 L30 55 M35 45 L35 55" />
          )}
          {type === 'minefield' && (
            <>
              <rect x="25" y="35" width="50" height="30" />
              <circle cx="35" cy="50" r="3" fill={color} />
              <circle cx="50" cy="50" r="3" fill={color} />
              <circle cx="65" cy="50" r="3" fill={color} />
            </>
          )}
          {type === 'wire' && (
            <path d="M20 50 L80 50 M30 45 L40 55 M40 45 L30 55 M50 45 L60 55 M60 45 L50 55" />
          )}
          {type === 'at-ditch' && (
            <path d="M20 50 L80 50 M30 50 L35 40 L40 50 M50 50 L55 40 L60 50" />
          )}
          {type === 'hospital' && (
            <>
              <rect x="30" y="35" width="40" height="30" />
              <path d="M50 40 L50 60 M40 50 L60 50" strokeWidth="4" />
            </>
          )}
          {type === 'fuel-point' && (
            <path d="M40 65 L40 35 L60 35 L60 65 M40 45 L60 45" />
          )}
          {type === 'ammo-cache' && (
            <path d="M35 65 L35 35 L65 35 L65 65 M35 50 L65 50 M50 35 L50 65" />
          )}
          {type === 'wheeled' && (
            <path d="M30 75 Q50 85 70 75" />
          )}
          {type === 'cross-country' && (
            <path d="M30 75 L40 85 L50 75 L60 85 L70 75" />
          )}
          {type === 'tracked' && (
            <path d="M30 75 L70 75 Q80 75 80 80 L20 80 Q20 75 30 75" />
          )}
          {type === 'amphibious' && (
            <path d="M30 80 Q50 90 70 80 M30 85 Q50 95 70 85" />
          )}
          {type === 'railway' && (
            <path d="M30 75 L70 75 M35 75 L35 85 M45 75 L45 85 M55 75 L55 85 M65 75 L65 85" />
          )}
          {type === 'barge' && (
            <path d="M25 75 L75 75 L85 65 L15 65 Z" />
          )}
        </g>
      </svg>
      
      {/* Size Indicator - Accurate APP-6 */}
      <div className="absolute -top-6 w-full flex justify-center items-center gap-1.5">
        {size === 'squad' && <div className="w-2.5 h-2.5 rounded-full bg-slate-200 shadow-glow" />}
        {size === 'section' && (
          <>
            <div className="w-2.5 h-2.5 rounded-full bg-slate-200 shadow-glow" />
            <div className="w-2.5 h-2.5 rounded-full bg-slate-200 shadow-glow" />
          </>
        )}
        {size === 'platoon' && (
          <>
            <div className="w-2.5 h-2.5 rounded-full bg-slate-200 shadow-glow" />
            <div className="w-2.5 h-2.5 rounded-full bg-slate-200 shadow-glow" />
            <div className="w-2.5 h-2.5 rounded-full bg-slate-200 shadow-glow" />
          </>
        )}
        {size === 'company' && <div className="w-0.5 h-5 bg-slate-200 shadow-glow" />}
        {size === 'battalion' && (
          <>
            <div className="w-0.5 h-5 bg-slate-200 shadow-glow" />
            <div className="w-0.5 h-5 bg-slate-200 shadow-glow ml-1" />
          </>
        )}
        {size === 'regiment' && (
          <>
            <div className="w-0.5 h-5 bg-slate-200 shadow-glow" />
            <div className="w-0.5 h-5 bg-slate-200 shadow-glow ml-1" />
            <div className="w-0.5 h-5 bg-slate-200 shadow-glow ml-1" />
          </>
        )}
        {size === 'brigade' && <span className="font-mono font-bold text-xl text-slate-200 drop-shadow-md">X</span>}
        {size === 'division' && <span className="font-mono font-bold text-xl text-slate-200 drop-shadow-md">XX</span>}
        {size === 'corps' && <span className="font-mono font-bold text-xl text-slate-200 drop-shadow-md">XXX</span>}
        {size === 'army' && <span className="font-mono font-bold text-xl text-slate-200 drop-shadow-md">XXXX</span>}
        {size === 'army-group' && <span className="font-mono font-bold text-xl text-slate-200 drop-shadow-md">XXXXX</span>}
        {size === 'installation' && <div className="w-6 h-3 bg-slate-200 shadow-glow" />}
        {size === 'joint-forces' && (
          <div className="relative w-6 h-3 border-t-2 border-l-2 border-r-2 border-slate-200 shadow-glow">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-full bg-slate-200" />
          </div>
        )}
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [activeTab, setActiveTab] = useState<'learn' | 'quiz' | 'reference'>('learn');
  const [quizState, setQuizState] = useState<{
    currentQuestion: number;
    score: number;
    isFinished: boolean;
    questions: any[];
    selectedAnswer: string | null;
    isCorrect: boolean | null;
  }>({
    currentQuestion: 0,
    score: 0,
    isFinished: false,
    questions: [],
    selectedAnswer: null,
    isCorrect: null
  });

  const startQuiz = () => {
    const allSymbols = [
      ...BASIC_SYMBOLS, 
      ...UNIT_SIZES, 
      ...UNIT_TYPES, 
      ...EQUIPMENT_SYMBOLS, 
      ...CONTROL_SYMBOLS,
      ...INSTALLATION_SYMBOLS,
      ...MOBILITY_SYMBOLS
    ];
    const shuffled = [...allSymbols].sort(() => 0.5 - Math.random());
    const questions = shuffled.slice(0, 10).map(symbol => {
      const options = [symbol.name];
      while (options.length < 4) {
        const random = allSymbols[Math.floor(Math.random() * allSymbols.length)].name;
        if (!options.includes(random)) options.push(random);
      }
      return {
        symbol,
        options: options.sort(() => 0.5 - Math.random()),
        answer: symbol.name
      };
    });
    
    setQuizState({
      currentQuestion: 0,
      score: 0,
      isFinished: false,
      questions,
      selectedAnswer: null,
      isCorrect: null
    });
    setActiveTab('quiz');
  };

  const handleAnswer = (answer: string) => {
    if (quizState.selectedAnswer) return;
    
    const isCorrect = answer === quizState.questions[quizState.currentQuestion].answer;
    setQuizState(prev => ({
      ...prev,
      selectedAnswer: answer,
      isCorrect,
      score: isCorrect ? prev.score + 1 : prev.score
    }));

    setTimeout(() => {
      if (quizState.currentQuestion < quizState.questions.length - 1) {
        setQuizState(prev => ({
          ...prev,
          currentQuestion: prev.currentQuestion + 1,
          selectedAnswer: null,
          isCorrect: null
        }));
      } else {
        setQuizState(prev => ({ ...prev, isFinished: true }));
      }
    }, 1500);
  };

  const [searchQuery, setSearchQuery] = useState('');

  const filteredBasic = BASIC_SYMBOLS.filter(s => s.name.toLowerCase().includes(searchQuery.toLowerCase()));
  const filteredSizes = UNIT_SIZES.filter(s => s.name.toLowerCase().includes(searchQuery.toLowerCase()));
  const filteredTypes = UNIT_TYPES.filter(s => s.name.toLowerCase().includes(searchQuery.toLowerCase()));
  const filteredEquip = EQUIPMENT_SYMBOLS.filter(s => s.name.toLowerCase().includes(searchQuery.toLowerCase()));
  const filteredControl = CONTROL_SYMBOLS.filter(s => s.name.toLowerCase().includes(searchQuery.toLowerCase()));
  const filteredInstallations = INSTALLATION_SYMBOLS.filter(s => s.name.toLowerCase().includes(searchQuery.toLowerCase()));
  const filteredMobility = MOBILITY_SYMBOLS.filter(s => s.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="min-h-screen bg-tactical-bg text-slate-200 font-sans tactical-grid">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 glass-panel px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-tactical-olive text-white p-2 rounded-sm border border-white/20">
              <Shield size={22} />
            </div>
            <div>
              <h1 className="text-xl font-mono font-bold tracking-tighter uppercase">Tactical Symbols</h1>
              <p className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.2em]">NATO Standard APP-6</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => setActiveTab('learn')}
              className={`text-xs font-mono uppercase tracking-widest transition-all ${activeTab === 'learn' ? 'text-tactical-accent' : 'text-slate-500 hover:text-slate-300'}`}
            >
              [ Навчання ]
            </button>
            <button 
              onClick={() => setActiveTab('reference')}
              className={`text-xs font-mono uppercase tracking-widest transition-all ${activeTab === 'reference' ? 'text-tactical-accent' : 'text-slate-500 hover:text-slate-300'}`}
            >
              [ Довідник ]
            </button>
            <button 
              onClick={startQuiz}
              className={`military-btn ${activeTab === 'quiz' ? 'military-btn-primary' : 'military-btn-outline'}`}
            >
              Тестування
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <AnimatePresence mode="wait">
          {activeTab === 'learn' && (
            <motion.div
              key="learn"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-20"
            >
              {/* Hero */}
              <section className="text-center space-y-6 max-w-4xl mx-auto">
                <div className="inline-block px-3 py-1 bg-tactical-olive/20 border border-tactical-olive text-tactical-olive text-[10px] font-mono uppercase tracking-[0.3em] rounded-full mb-4">
                  Operational Readiness
                </div>
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase italic">
                  Система умовних знаків
                </h2>
                <p className="text-lg text-slate-400 font-light leading-relaxed max-w-2xl mx-auto">
                  Професійний інструмент для вивчення стандартів НАТО. Опануйте графічне відображення бойової обстановки.
                </p>
                <div className="pt-8 flex justify-center gap-6">
                  <button onClick={startQuiz} className="military-btn military-btn-primary flex items-center gap-3">
                    Почати тест <ChevronRight size={18} />
                  </button>
                  <button onClick={() => setActiveTab('reference')} className="military-btn military-btn-outline">
                    Довідник
                  </button>
                </div>
              </section>

              {/* Modules */}
              <div className="grid md:grid-cols-3 gap-10">
                <div className="space-y-8">
                  <div className="flex items-center gap-4 border-b border-tactical-border pb-4">
                    <Target size={24} className="text-blue-500" />
                    <h3 className="text-lg font-mono font-bold uppercase tracking-widest">Приналежність</h3>
                  </div>
                  <div className="grid gap-4">
                    {BASIC_SYMBOLS.map(s => (
                      <div key={s.id} className="glass-panel p-4 hover:border-blue-500/50 transition-all group">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 flex items-center justify-center bg-slate-900/50 rounded border border-tactical-border">
                            <NATOIcon type="infantry" affiliation={s.id} />
                          </div>
                          <div>
                            <h4 className="font-bold text-sm uppercase tracking-tight">{s.name}</h4>
                            <p className="text-[10px] text-slate-500 font-mono">{s.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="flex items-center gap-4 border-b border-tactical-border pb-4">
                    <BookOpen size={24} className="text-emerald-500" />
                    <h3 className="text-lg font-mono font-bold uppercase tracking-widest">Ієрархія</h3>
                  </div>
                  <div className="grid gap-4">
                    {UNIT_SIZES.slice(0, 5).map(s => (
                      <div key={s.id} className="glass-panel p-4 hover:border-emerald-500/50 transition-all">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 flex items-center justify-center bg-slate-900/50 rounded border border-tactical-border">
                            <NATOIcon type="infantry" size={s.id} affiliation="friend" />
                          </div>
                          <div>
                            <h4 className="font-bold text-sm uppercase tracking-tight">{s.name}</h4>
                            <p className="text-[10px] text-slate-500 font-mono">{s.meaning}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="flex items-center gap-4 border-b border-tactical-border pb-4">
                    <Info size={24} className="text-amber-500" />
                    <h3 className="text-lg font-mono font-bold uppercase tracking-widest">Роди військ</h3>
                  </div>
                  <div className="grid gap-4">
                    {UNIT_TYPES.slice(0, 5).map(s => (
                      <div key={s.id} className="glass-panel p-4 hover:border-amber-500/50 transition-all">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 flex items-center justify-center bg-slate-900/50 rounded border border-tactical-border">
                            <NATOIcon type={s.id} affiliation="friend" />
                          </div>
                          <div>
                            <h4 className="font-bold text-sm uppercase tracking-tight">{s.name}</h4>
                            <p className="text-[10px] text-slate-500 font-mono">{s.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'quiz' && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              className="max-w-3xl mx-auto"
            >
              {!quizState.isFinished ? (
                <div className="glass-panel rounded-lg p-10 space-y-10">
                  <div className="flex justify-between items-center border-b border-tactical-border pb-6">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.3em]">Mission Progress</span>
                      <h4 className="text-sm font-mono font-bold">QUESTION {quizState.currentQuestion + 1} / {quizState.questions.length}</h4>
                    </div>
                    <div className="h-1.5 w-48 bg-slate-800 rounded-full overflow-hidden border border-white/5">
                      <div 
                        className="h-full bg-tactical-accent transition-all duration-700 ease-out" 
                        style={{ width: `${((quizState.currentQuestion + 1) / quizState.questions.length) * 100}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-10 py-6">
                    <div className="p-12 bg-slate-900/80 rounded-lg border border-tactical-border shadow-inner relative overflow-hidden">
                      <div className="absolute inset-0 tactical-grid opacity-20" />
                      <NATOIcon 
                        type={['type', 'equipment', 'control', 'installation', 'mobility'].includes(quizState.questions[quizState.currentQuestion].symbol.category) ? quizState.questions[quizState.currentQuestion].symbol.id : 'infantry'} 
                        size={quizState.questions[quizState.currentQuestion].symbol.category === 'size' ? quizState.questions[quizState.currentQuestion].symbol.id : undefined}
                        affiliation={quizState.questions[quizState.currentQuestion].symbol.category === 'basic' ? quizState.questions[quizState.currentQuestion].symbol.id : 'friend'}
                      />
                    </div>
                    <h3 className="text-2xl font-mono font-bold text-center uppercase tracking-tight">Ідентифікуйте об'єкт:</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {quizState.questions[quizState.currentQuestion].options.map((option: string) => {
                      const isSelected = quizState.selectedAnswer === option;
                      const isCorrect = option === quizState.questions[quizState.currentQuestion].answer;
                      
                      let btnClass = "w-full p-5 text-left rounded-sm border-2 font-mono text-sm uppercase tracking-wider transition-all flex items-center justify-between ";
                      if (!quizState.selectedAnswer) {
                        btnClass += "border-tactical-border bg-slate-800/50 hover:border-slate-400 hover:bg-slate-800";
                      } else if (isCorrect) {
                        btnClass += "border-emerald-500 bg-emerald-500/10 text-emerald-400";
                      } else if (isSelected && !isCorrect) {
                        btnClass += "border-red-500 bg-red-500/10 text-red-400";
                      } else {
                        btnClass += "border-tactical-border opacity-30";
                      }

                      return (
                        <button
                          key={option}
                          disabled={!!quizState.selectedAnswer}
                          onClick={() => handleAnswer(option)}
                          className={btnClass}
                        >
                          {option}
                          {quizState.selectedAnswer && isCorrect && <CheckCircle2 size={18} />}
                          {quizState.selectedAnswer && isSelected && !isCorrect && <XCircle size={18} />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div className="glass-panel rounded-lg p-16 text-center space-y-10">
                  <div className="w-24 h-24 bg-tactical-olive text-white rounded-full flex items-center justify-center mx-auto border-4 border-white/10 shadow-2xl">
                    <Trophy size={48} />
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-4xl font-black uppercase italic tracking-tighter">Місію виконано</h2>
                    <p className="text-slate-400 font-mono uppercase tracking-widest">Результат: {quizState.score} / {quizState.questions.length}</p>
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-4 justify-center">
                    <button onClick={startQuiz} className="military-btn military-btn-primary flex items-center justify-center gap-3">
                      <RefreshCw size={18} /> Перезапуск
                    </button>
                    <button onClick={() => setActiveTab('learn')} className="military-btn military-btn-outline">
                      База знань
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {activeTab === 'reference' && (
            <motion.div
              key="reference"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-16"
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-tactical-border pb-8">
                <div className="space-y-2">
                  <h2 className="text-4xl font-black uppercase italic tracking-tighter">Архів символів</h2>
                  <p className="text-slate-500 font-mono text-xs uppercase tracking-widest">Повна база даних стандартів APP-6</p>
                </div>
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                  <input 
                    type="text" 
                    placeholder="SEARCH_DATABASE..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 pr-6 py-3 bg-slate-900 border border-tactical-border rounded-sm w-full md:w-96 focus:outline-none focus:border-tactical-accent font-mono text-xs uppercase tracking-widest transition-all"
                  />
                </div>
              </div>

              <div className="space-y-20">
                {filteredBasic.length > 0 && (
                  <section className="space-y-8">
                    <div className="flex items-center gap-4">
                      <div className="w-1 h-8 bg-blue-500" />
                      <h3 className="text-xl font-mono font-bold uppercase tracking-[0.2em]">01. Приналежність</h3>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {filteredBasic.map(s => (
                        <div key={s.id} className="glass-panel p-8 rounded-sm space-y-6 group hover:bg-slate-800/50 transition-all">
                          <div className="flex justify-center py-6 bg-slate-900/50 rounded border border-white/5">
                            <NATOIcon type="infantry" affiliation={s.id} />
                          </div>
                          <div className="text-center space-y-2">
                            <h4 className="font-bold uppercase tracking-tight text-white">{s.name}</h4>
                            <p className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">{s.meaning}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {filteredSizes.length > 0 && (
                  <section className="space-y-8">
                    <div className="flex items-center gap-4">
                      <div className="w-1 h-8 bg-emerald-500" />
                      <h3 className="text-xl font-mono font-bold uppercase tracking-[0.2em]">02. Ієрархія підрозділів</h3>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
                      {filteredSizes.map(s => (
                        <div key={s.id} className="glass-panel p-8 rounded-sm space-y-6 group hover:bg-slate-800/50 transition-all">
                          <div className="flex justify-center py-6 bg-slate-900/50 rounded border border-white/5">
                            <NATOIcon type="infantry" size={s.id} affiliation="friend" />
                          </div>
                          <div className="text-center space-y-2">
                            <h4 className="font-bold uppercase tracking-tight text-white">{s.name}</h4>
                            <p className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">{s.meaning}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {filteredTypes.length > 0 && (
                  <section className="space-y-8">
                    <div className="flex items-center gap-4">
                      <div className="w-1 h-8 bg-amber-500" />
                      <h3 className="text-xl font-mono font-bold uppercase tracking-[0.2em]">03. Спеціалізація</h3>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {filteredTypes.map(s => (
                        <div key={s.id} className="glass-panel p-8 rounded-sm space-y-6 group hover:bg-slate-800/50 transition-all">
                          <div className="flex justify-center py-6 bg-slate-900/50 rounded border border-white/5">
                            <NATOIcon type={s.id} affiliation="friend" />
                          </div>
                          <div className="text-center space-y-2">
                            <h4 className="font-bold uppercase tracking-tight text-white">{s.name}</h4>
                            <p className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">{s.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {filteredEquip.length > 0 && (
                  <section className="space-y-8">
                    <div className="flex items-center gap-4">
                      <div className="w-1 h-8 bg-red-500" />
                      <h3 className="text-xl font-mono font-bold uppercase tracking-[0.2em]">04. Озброєння та техніка</h3>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {filteredEquip.map(s => (
                        <div key={s.id} className="glass-panel p-8 rounded-sm space-y-6 group hover:bg-slate-800/50 transition-all">
                          <div className="flex justify-center py-6 bg-slate-900/50 rounded border border-white/5">
                            <NATOIcon type={s.id} affiliation="friend" />
                          </div>
                          <div className="text-center space-y-2">
                            <h4 className="font-bold uppercase tracking-tight text-white">{s.name}</h4>
                            <p className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">{s.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {filteredControl.length > 0 && (
                  <section className="space-y-8">
                    <div className="flex items-center gap-4">
                      <div className="w-1 h-8 bg-purple-500" />
                      <h3 className="text-xl font-mono font-bold uppercase tracking-[0.2em]">05. Тактичні завдання та контроль</h3>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {filteredControl.map(s => (
                        <div key={s.id} className="glass-panel p-8 rounded-sm space-y-6 group hover:bg-slate-800/50 transition-all">
                          <div className="flex justify-center py-6 bg-slate-900/50 rounded border border-white/5">
                            <NATOIcon type={s.id} affiliation="friend" />
                          </div>
                          <div className="text-center space-y-2">
                            <h4 className="font-bold uppercase tracking-tight text-white">{s.name}</h4>
                            <p className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">{s.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {filteredInstallations.length > 0 && (
                  <section className="space-y-8">
                    <div className="flex items-center gap-4">
                      <div className="w-1 h-8 bg-pink-500" />
                      <h3 className="text-xl font-mono font-bold uppercase tracking-[0.2em]">06. Пункти управління та об'єкти</h3>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {filteredInstallations.map(s => (
                        <div key={s.id} className="glass-panel p-8 rounded-sm space-y-6 group hover:bg-slate-800/50 transition-all">
                          <div className="flex justify-center py-6 bg-slate-900/50 rounded border border-white/5">
                            <NATOIcon type={s.id} affiliation="friend" />
                          </div>
                          <div className="text-center space-y-2">
                            <h4 className="font-bold uppercase tracking-tight text-white">{s.name}</h4>
                            <p className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">{s.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {filteredMobility.length > 0 && (
                  <section className="space-y-8">
                    <div className="flex items-center gap-4">
                      <div className="w-1 h-8 bg-cyan-500" />
                      <h3 className="text-xl font-mono font-bold uppercase tracking-[0.2em]">07. Мобільність та пересування</h3>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {filteredMobility.map(s => (
                        <div key={s.id} className="glass-panel p-8 rounded-sm space-y-6 group hover:bg-slate-800/50 transition-all">
                          <div className="flex justify-center py-6 bg-slate-900/50 rounded border border-white/5">
                            <NATOIcon type={s.id} affiliation="friend" />
                          </div>
                          <div className="text-center space-y-2">
                            <h4 className="font-bold uppercase tracking-tight text-white">{s.name}</h4>
                            <p className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">{s.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {filteredBasic.length === 0 && filteredSizes.length === 0 && filteredTypes.length === 0 && filteredEquip.length === 0 && filteredControl.length === 0 && filteredInstallations.length === 0 && filteredMobility.length === 0 && (
                  <div className="text-center py-20 bg-slate-900/30 rounded border border-dashed border-tactical-border">
                    <p className="text-slate-500 font-mono uppercase tracking-[0.3em]">Нічого не знайдено за запитом "{searchQuery}"</p>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="border-t border-tactical-border py-16 px-6 mt-24 bg-slate-950/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Shield size={22} className="text-tactical-olive" />
              <span className="font-mono font-bold text-lg uppercase tracking-tighter">Tactical Symbols</span>
            </div>
            <p className="text-xs text-slate-500 font-mono max-w-xs leading-relaxed uppercase tracking-widest">
              Навчальна платформа розроблена для підвищення рівня тактичної підготовки. Всі матеріали відповідають стандартам NATO APP-6.
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm font-mono font-bold text-tactical-accent uppercase tracking-[0.2em]">Розробив: Поночовний Руслан</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-slate-700 uppercase tracking-[0.4em]">
          <span>© 2026 TACTICAL_LEARNING_SYSTEM</span>
          <span>SECURE_CONNECTION_ESTABLISHED</span>
        </div>
      </footer>
    </div>
  );
}
