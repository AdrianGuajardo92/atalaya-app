'use client';

import { useState, useEffect, useRef } from 'react';

export default function Timer() {
  const [totalSeconds, setTotalSeconds] = useState(60 * 60); // 60 minutos por defecto
  const [isRunning, setIsRunning] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [delayMinutes, setDelayMinutes] = useState('1');
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

  // Manejar cambio de tiempo con retraso
  const handleTimeChange = () => {
    const delay = parseInt(delayMinutes) || 0;
    const startTime = 60 - delay; // 60 minutos menos el retraso
    setTotalSeconds(Math.max(0, startTime * 60)); // No permitir negativos
    setIsEditing(false);
    setIsRunning(false);
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
      className="bg-slate-800 text-white rounded-lg shadow-2xl p-1.5 sm:p-3 min-w-[90px] sm:min-w-[140px] select-none"
    >
      {isEditing ? (
        <div className="flex flex-col gap-1 sm:gap-2" onClick={e => e.stopPropagation()}>
          <div className="text-[10px] sm:text-xs text-slate-300 text-center">
            Retraso
          </div>
          <select
            value={delayMinutes}
            onChange={(e) => setDelayMinutes(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleTimeChange();
              if (e.key === 'Escape') setIsEditing(false);
            }}
            className="bg-slate-700 text-white px-1 sm:px-2 py-0.5 sm:py-1 rounded text-center text-xs sm:text-sm w-full cursor-pointer"
            autoFocus
          >
            <option value="1">1 min</option>
            <option value="2">2 min</option>
            <option value="3">3 min</option>
            <option value="4">4 min</option>
            <option value="5">5 min</option>
            <option value="6">6 min</option>
            <option value="7">7 min</option>
            <option value="8">8 min</option>
            <option value="9">9 min</option>
            <option value="10">10 min</option>
          </select>
          <div className="hidden sm:block text-xs text-slate-400 text-center">
            Iniciar: {Math.max(0, 60 - (parseInt(delayMinutes) || 0))} min
          </div>
          <div className="flex gap-1">
            <button
              onClick={handleTimeChange}
              className="flex-1 bg-emerald-600 hover:bg-emerald-700 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-[10px] sm:text-xs"
            >
              ✓
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="flex-1 bg-slate-600 hover:bg-slate-700 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-[10px] sm:text-xs"
            >
              ✕
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-1 sm:gap-2">
          {/* Tiempo */}
          <div
            className={`text-base sm:text-2xl font-mono font-bold text-center ${
              totalSeconds <= 60 ? 'text-red-400' : 'text-white'
            }`}
          >
            {formatTime(totalSeconds)}
          </div>

          {/* Controles */}
          <div className="flex gap-0.5 sm:gap-1 justify-center" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setIsRunning(!isRunning)}
              className="bg-slate-700 hover:bg-slate-800 px-2 sm:px-3 py-0.5 sm:py-1 rounded text-[10px] sm:text-xs font-medium shadow-sm"
            >
              {isRunning ? '⏸' : '▶'}
            </button>
            <button
              onClick={() => {
                setIsRunning(false);
                setTotalSeconds(60 * 60);
              }}
              className="bg-slate-600 hover:bg-slate-700 px-2 sm:px-3 py-0.5 sm:py-1 rounded text-[10px] sm:text-xs font-medium shadow-sm"
            >
              ↻
            </button>
            <button
              onClick={() => {
                setDelayMinutes('1');
                setIsEditing(true);
              }}
              className="bg-slate-600 hover:bg-slate-700 px-2 sm:px-3 py-0.5 sm:py-1 rounded text-[10px] sm:text-xs font-medium shadow-sm"
            >
              ⚙
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
