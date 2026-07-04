import { describe, it, expect } from 'vitest';
import { buildReferenceLookup, parseScriptureReferences, resolveScriptureFromParenthetical } from './resolveScriptureRef';

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

  it('parsea compare con después de otra referencia', () => {
    expect(parseScriptureReferences('Hech. 5:29; compare con Génesis 2:16, 17; 3:6')).toEqual([
      'Hechos 5:29',
      'Génesis 2:16',
      'Génesis 2:17',
      'Génesis 3:6',
    ]);
  });

  it('parsea referencias compuestas con lea', () => {
    expect(parseScriptureReferences('lea Proverbios 18:22; Is. 48:17, 18')).toEqual([
      'Proverbios 18:22',
      'Isaías 48:17',
      'Isaías 48:18',
    ]);
  });

  it('expande rangos de versículos', () => {
    expect(parseScriptureReferences('2 Cor. 6:14-18; Efes. 5:10, 11')).toEqual([
      '2 Corintios 6:14',
      '2 Corintios 6:15',
      '2 Corintios 6:16',
      '2 Corintios 6:17',
      '2 Corintios 6:18',
      'Efesios 5:10',
      'Efesios 5:11',
    ]);
  });

  it('parsea lee y abreviaturas compactas de publicaciones', () => {
    expect(parseScriptureReferences('lee Mateo 6:33; 1Co 10:21; 2Co 6:14-15; Ef 5:10, 11')).toEqual([
      'Mateo 6:33',
      '1 Corintios 10:21',
      '2 Corintios 6:14',
      '2 Corintios 6:15',
      'Efesios 5:10',
      'Efesios 5:11',
    ]);
  });

  it('parsea compara con en español', () => {
    expect(parseScriptureReferences('compara con Proverbios 18:17')).toEqual(['Proverbios 18:17']);
  });

  it('prefiere textos individuales exactos sobre una tarjeta combinada', () => {
    const lookup = buildReferenceLookup([
      { reference: 'Isaías 48:17', text: 'Texto del versículo 17.' },
      { reference: 'Isaías 48:18', text: 'Texto del versículo 18.' },
      { reference: 'Isaías 48:17, 18', text: 'Texto combinado que no debe duplicarse.' },
    ]);
    const resolved = resolveScriptureFromParenthetical(
      'lea Proverbios 18:22; Is. 48:17, 18',
      new Map(),
      {},
      lookup
    );

    expect(resolved?.verses).toEqual([
      { reference: 'Isaías 48:17', text: 'Texto del versículo 17.' },
      { reference: 'Isaías 48:18', text: 'Texto del versículo 18.' },
    ]);
  });

  it('registra cada versículo de una tarjeta con rango', () => {
    const lookup = buildReferenceLookup([
      { reference: '2 Corintios 6:14-18', text: 'Texto combinado.' },
    ]);

    expect(lookup.get('2 Corintios 6:14')?.text).toBe('Texto combinado.');
    expect(lookup.get('2 Corintios 6:18')?.text).toBe('Texto combinado.');
  });
});
