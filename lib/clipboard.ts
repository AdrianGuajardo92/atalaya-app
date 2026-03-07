/**
 * Copia texto al portapapeles con fallback para navegadores
 * que no soportan navigator.clipboard (HTTP, permisos denegados, etc.)
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  // Intentar API moderna primero
  if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Si falla por permisos, usar fallback
    }
  }

  // Fallback: textarea temporal + execCommand
  try {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.left = '-9999px';
    textarea.style.top = '-9999px';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    const success = document.execCommand('copy');
    document.body.removeChild(textarea);
    return success;
  } catch {
    return false;
  }
}
