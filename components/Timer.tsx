'use client';

import { useState, useEffect, useRef } from 'react';

export default function Timer() {
  const [totalSeconds, setTotalSeconds] = useState(60 * 60); // 60 minutos por defecto
  const [isRunning, setIsRunning] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [meetingOrder, setMeetingOrder] = useState<'normal' | 'inverted'>('normal');
  const [realStartTime, setRealStartTime] = useState<string>('');
  const [position, setPosition] = useState(() => {
    // Cargar posición guardada desde localStorage
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('atalaya-timer-position');
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch {
          return { x: 20, y: 20 };
        }
      }
    }
    return { x: 20, y: 20 };
  });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const timerRef = useRef<HTMLDivElement>(null);

  // Actualizar el timer cada segundo
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning && totalSeconds > 0) {
      interval = setInterval(() => {
        setTotalSeconds(prev => Math.max(0, prev - 1));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, totalSeconds]);

  // Formatear tiempo a MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const calculateMinutes = () => {
    if (!realStartTime) return 0;

    const now = new Date();
    const [startHours, startMinutes] = realStartTime.split(':').map(Number);
    const startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), startHours, startMinutes);

    const endHours = 17;
    const endMinutes = meetingOrder === 'normal' ? 39 : 4;
    const endDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), endHours, endMinutes);

    const diffMs = endDate.getTime() - startDate.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    return diffMins > 0 ? diffMins : 0;
  };

  // Manejar guardado de configuración
  const handleTimeSubmit = () => {
    const calculatedMinutes = calculateMinutes();
    setTotalSeconds(calculatedMinutes * 60);
    setIsEditing(false);
    setIsRunning(true);
  };

  // Manejar drag con mouse
  const handleMouseDown = (e: React.MouseEvent) => {
    if (isEditing) return;
    setIsDragging(true);
    const rect = timerRef.current?.getBoundingClientRect();
    if (rect) {
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    // Guardar posición en localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('atalaya-timer-position', JSON.stringify(position));
    }
  };

  // Manejar drag con touch (tableta/móvil)
  const handleTouchStart = (e: React.TouchEvent) => {
    if (isEditing) return;
    setIsDragging(true);
    const touch = e.touches[0];
    const rect = timerRef.current?.getBoundingClientRect();
    if (rect) {
      setDragOffset({
        x: touch.clientX - rect.left,
        y: touch.clientY - rect.top
      });
    }
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (isDragging) {
      const touch = e.touches[0];
      setPosition({
        x: touch.clientX - dragOffset.x,
        y: touch.clientY - dragOffset.y
      });
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    // Guardar posición en localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('atalaya-timer-position', JSON.stringify(position));
    }
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleTouchEnd);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
        window.removeEventListener('touchmove', handleTouchMove);
        window.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, [isDragging, dragOffset]);

  return (
    <div
      ref={timerRef}
      style={{
        position: 'fixed',
        left: `${position.x}px`,
        top: `${position.y}px`,
        zIndex: 9999,
        cursor: isDragging ? 'grabbing' : 'grab',
        touchAction: 'none'
      }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      className="bg-slate-800 dark:bg-[#1C1919] text-white rounded-lg shadow-2xl p-1.5 sm:p-3 min-w-[90px] sm:min-w-[140px] select-none overflow-hidden border border-slate-700 dark:border-[#3A3A37]"
    >
      {isEditing ? (
        <div className="flex flex-col gap-2 p-1 w-48 sm:w-56" onClick={e => e.stopPropagation()} onMouseDown={e => e.stopPropagation()} onTouchStart={e => e.stopPropagation()}>
          <div className="flex flex-col gap-1">
            <div className="text-[10px] sm:text-xs text-slate-300 dark:text-[#8B8980] font-medium pb-1 border-b border-slate-600 dark:border-[#3A3A37] mb-1">
              Orden del programa:
            </div>
            <button
              type="button"
              onClick={() => { setMeetingOrder('normal'); setRealStartTime('16:30'); }}
              className="flex items-center gap-2 cursor-pointer text-[11px] sm:text-xs text-left"
            >
              <span className={`w-3 h-3 rounded-full border-2 flex-shrink-0 ${meetingOrder === 'normal' ? 'border-slate-400 bg-slate-400' : 'border-slate-500 dark:border-[#6B6960] bg-transparent'}`} />
              <span className={meetingOrder === 'normal' ? 'text-white' : 'text-slate-200 dark:text-[#A8A69D]'}>Normal (Después del discurso)</span>
            </button>
            <button
              type="button"
              onClick={() => { setMeetingOrder('inverted'); setRealStartTime('16:05'); }}
              className="flex items-center gap-2 cursor-pointer text-[11px] sm:text-xs text-left"
            >
              <span className={`w-3 h-3 rounded-full border-2 flex-shrink-0 ${meetingOrder === 'inverted' ? 'border-slate-400 bg-slate-400' : 'border-slate-500 dark:border-[#6B6960] bg-transparent'}`} />
              <span className={meetingOrder === 'inverted' ? 'text-white' : 'text-slate-200 dark:text-[#A8A69D]'}>Invertido (Antes del discurso)</span>
            </button>
          </div>

          <div className="flex flex-col gap-1.5 mt-1">
            {/* Display del valor seleccionado */}
            <div className="text-center">
              <div className="text-xl font-mono font-bold text-white leading-none">
                {realStartTime
                  ? `${parseInt(realStartTime.split(':')[0]) > 12 ? parseInt(realStartTime.split(':')[0]) - 12 : realStartTime.split(':')[0]}:${realStartTime.split(':')[1]}`
                  : `4:${meetingOrder === 'normal' ? '30' : '05'}`}
                <span className="text-[10px] text-slate-400 dark:text-[#8B8980] font-normal ml-1">PM</span>
              </div>
              <div className="text-[10px] text-emerald-400 font-medium mt-0.5">
                {calculateMinutes() > 0 ? `${calculateMinutes()} min` : 'Selecciona la hora'}
              </div>
            </div>

            {/* Slider + botones +/- */}
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => {
                  const minVal = meetingOrder === 'normal' ? 25 : 0;
                  const currentMin = realStartTime ? parseInt(realStartTime.split(':')[1]) : (meetingOrder === 'normal' ? 30 : 5);
                  if (currentMin > minVal) setRealStartTime(`16:${(currentMin - 1).toString().padStart(2, '0')}`);
                }}
                className="w-10 h-12 md:w-8 md:h-8 rounded-lg md:rounded-md bg-slate-700 dark:bg-[#30302E] hover:bg-slate-600 dark:hover:bg-[#3A3A37] active:bg-slate-500 flex items-center justify-center text-base md:text-sm font-bold text-slate-300 dark:text-[#8B8980] flex-shrink-0 transition-colors"
              >
                −
              </button>
              <input
                type="range"
                min={meetingOrder === 'normal' ? 25 : 0}
                max={meetingOrder === 'normal' ? 45 : 15}
                step={1}
                value={realStartTime ? parseInt(realStartTime.split(':')[1]) : (meetingOrder === 'normal' ? 30 : 5)}
                onChange={(e) => setRealStartTime(`16:${parseInt(e.target.value).toString().padStart(2, '0')}`)}
                className="timer-slider flex-1 min-w-0 h-1.5 appearance-none bg-transparent cursor-pointer"
              />
              <button
                type="button"
                onClick={() => {
                  const maxVal = meetingOrder === 'normal' ? 45 : 15;
                  const currentMin = realStartTime ? parseInt(realStartTime.split(':')[1]) : (meetingOrder === 'normal' ? 30 : 5);
                  if (currentMin < maxVal) setRealStartTime(`16:${(currentMin + 1).toString().padStart(2, '0')}`);
                }}
                className="w-10 h-12 md:w-8 md:h-8 rounded-lg md:rounded-md bg-slate-700 dark:bg-[#30302E] hover:bg-slate-600 dark:hover:bg-[#3A3A37] active:bg-slate-500 flex items-center justify-center text-base md:text-sm font-bold text-slate-300 dark:text-[#8B8980] flex-shrink-0 transition-colors"
              >
                +
              </button>
            </div>

            {/* Marcas de referencia */}
            <div className="flex justify-between text-[9px] text-slate-500 dark:text-[#6B6960] font-mono px-8">
              {meetingOrder === 'normal'
                ? [25, 30, 35, 40, 45].map(m => <span key={m}>:{m}</span>)
                : [0, 5, 10, 15].map(m => <span key={m}>:{m.toString().padStart(2, '0')}</span>)
              }
            </div>
          </div>

          <div className="flex gap-1 mt-1">
            <button
              onClick={handleTimeSubmit}
              className="flex-1 bg-emerald-600 hover:bg-emerald-700 px-2 py-1.5 rounded text-xs transition-colors font-medium cursor-pointer"
            >
              ✓
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="flex-1 bg-slate-600 dark:bg-[#3A3A37] hover:bg-slate-700 dark:hover:bg-[#4A4A45] px-2 py-1.5 rounded text-xs transition-colors font-medium cursor-pointer"
            >
              ✕
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-1 sm:gap-2">
          {/* Tiempo */}
          <div
            className={`text-base sm:text-2xl font-mono font-bold text-center ${totalSeconds <= 60 ? 'text-red-400' : 'text-white'
              }`}
          >
            {formatTime(totalSeconds)}
          </div>

          {/* Controles */}
          <div className="flex gap-0.5 sm:gap-1 justify-center" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setIsRunning(!isRunning)}
              className="bg-slate-700 dark:bg-[#30302E] hover:bg-slate-800 dark:hover:bg-[#3A3A37] px-2 sm:px-3 py-0.5 sm:py-1 rounded text-[10px] sm:text-xs font-medium shadow-sm"
            >
              {isRunning ? '⏸' : '▶'}
            </button>
            <button
              onClick={() => {
                setIsRunning(false);
                setTotalSeconds(60 * 60);
              }}
              className="bg-slate-600 dark:bg-[#3A3A37] hover:bg-slate-700 dark:hover:bg-[#4A4A45] px-2 sm:px-3 py-0.5 sm:py-1 rounded text-[10px] sm:text-xs font-medium shadow-sm"
            >
              ↻
            </button>
            <button
              onClick={() => {
                setRealStartTime(meetingOrder === 'normal' ? '16:30' : '16:05');
                setIsEditing(true);
              }}
              className="bg-slate-600 dark:bg-[#3A3A37] hover:bg-slate-700 dark:hover:bg-[#4A4A45] px-2 sm:px-3 py-0.5 sm:py-1 rounded text-[10px] sm:text-xs font-medium shadow-sm"
            >
              ⚙
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
