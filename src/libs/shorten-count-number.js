export function shortenCountNumber(count) {
  if (typeof count !== "number") return "";
  if (count < 1000) return count;
  if (count < 1000000) return `${+(count / 1000).toFixed(1)}k`;
  if (count < 1000000000) return `${+(count / 1000000).toFixed(1)}mln`;
  else return `> 1 billion`;
}
