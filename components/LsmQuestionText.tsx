import { getLsmQuestionLines } from '@/lib/lsmText';

interface LsmQuestionTextProps {
  text?: string;
  className?: string;
  numberClassName?: string;
  placeholder?: React.ReactNode;
}

export default function LsmQuestionText({
  text,
  className = 'text-text-body',
  numberClassName = 'text-text-tertiary',
  placeholder,
}: LsmQuestionTextProps) {
  const lines = getLsmQuestionLines(text || '');

  if (lines.length === 0) return placeholder;

  if (lines.length === 1) {
    return <p className={`${className} break-words`}>{lines[0]}</p>;
  }

  return (
    <div className="space-y-1.5">
      {lines.map((line, index) => (
        <div key={`${index}-${line}`} className="flex items-baseline gap-2">
          <span className={`${numberClassName} flex-shrink-0 font-mono text-sm`}>
            [{index + 1}]
          </span>
          <p className={`${className} min-w-0 break-words`}>{line}</p>
        </div>
      ))}
    </div>
  );
}
