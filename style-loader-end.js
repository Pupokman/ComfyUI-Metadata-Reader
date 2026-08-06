(() => {
  const parts = window.__CMR_STYLE_PARTS || [];
  let total = 0;
  const decoded = parts.map(part => {
    const binary = atob(part);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
    total += bytes.length;
    return bytes;
  });
  const merged = new Uint8Array(total);
  let offset = 0;
  for (const bytes of decoded) { merged.set(bytes, offset); offset += bytes.length; }
  const style = document.createElement('style');
  style.textContent = new TextDecoder('utf-8').decode(merged);
  document.head.appendChild(style);
  delete window.__CMR_STYLE_PARTS;
})();
