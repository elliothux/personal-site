const normalizeSrc = (src) => {
  return src.startsWith('/') ? src.slice(1) : src;
};

export default function cloudflareLoader({ src, width, quality }) {
  if (src.startsWith('/')) {
    return src;
  }
  const params = [`w=${width}`];
  if (quality) {
    params.push(`quality=${quality}`);
  }
  const paramsString = params.join(',');
  return `//imagedelivery.net/Zw2NKlw6vpAEx4T5z1A_JQ/${src}/${paramsString}`;
}
