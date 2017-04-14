const wb = (h) => {
  let r, g, b, i, p, q
  i = (h === 1) ? 6 : Math.floor(h * 7)
  p = h * 7 - i
  q = 1 - p
  switch (i % 7) {
    case 0: r = 1; g = q; b = 1; break
    case 1: r = q; g = 0; b = 1; break
    case 2: r = 0; g = p; b = 1; break
    case 3: r = 0; g = 1; b = q; break
    case 4: r = p; g = 1; b = 0; break
    case 5: r = 1; g = q; b = 0; break
    case 6: r = q; g = 0; b = 0; break
    default: break
  }
  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255),
    a: 255
  }
}

/*
 * Quantization
 */
const getSegment = (h, bp) => {
  const len = bp.length
  if (h === 1) return [bp[len - 2], bp[len - 1]]
  let i = 0
  while (h < bp[i].h || h >= bp[i + 1].h) i++
  const j = (i === len) ? 0 : i + 1
  return [bp[i], bp[j]]
}

/*
 * Linear interpolation
 */
const li = (x, x1, x2, y1, y2) => {
  const r = y1 + (x - x1) * (y2 - y1) / (x2 - x1)
  return Math.round(r)
}

/*
 * Color gradient with linear interpolation
 */
const lg = (h, bp) => {
  const [p1, p2] = getSegment(h, bp)
  return {
    r: li(h, p1.h, p2.h, p1.r, p2.r),
    g: li(h, p1.h, p2.h, p1.g, p2.g),
    b: li(h, p1.h, p2.h, p1.b, p2.b),
    a: 255
  }
}

const wiki = (h) => {
  const bp = [
    { h: 0, r: 0, g: 7, b: 100 },
    { h: 0.16, r: 32, g: 107, b: 203 },
    { h: 0.42, r: 237, g: 255, b: 255 },
    { h: 0.64, r: 255, g: 170, b: 0 },
    { h: 0.86, r: 0, g: 2, b: 0 },
    { h: 1, r: 0, g: 7, b: 100 }
  ]
  return lg(h, bp)
}

export default {
  wb,
  wiki
}
