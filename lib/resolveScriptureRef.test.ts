import { describe, it, expect } from 'vitest';
import { parseScriptureReferences } from './resolveScriptureRef';

describe('resolveScriptureRef', () => {
  it('parsea referencia simple', () => {
    expect(parseScriptureReferences('Filip. 1:10')).toEqual(['Filipenses 1:10']);
  });

  it('parsea múltiples refs separadas por punto y coma', () => {
    const refs = parseScriptureReferences('Mat. 6:33; Mar. 12:30');
    expect(refs).toContain('Mateo 6:33');
    expect(refs).toContain('Marcos 12:30');
  });

  it('parsea compare con', () => {
    const refs = parseScriptureReferences('compare con Génesis 2:16, 17; 3:6');
    expect(refs.length).toBeGreaterThan(0);
  });
});
