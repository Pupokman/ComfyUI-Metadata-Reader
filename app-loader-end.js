(() => {
  const parts = window.__CMR_PARTS || [];
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
  delete window.__CMR_PARTS;
  (0, eval)(new TextDecoder('utf-8').decode(merged));
})();
