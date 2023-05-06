export function hexToRgb(hex: string) {
  // Remove the hash symbol if present
  hex = hex.replace(/^#/, "");

  // Convert the three color components from hex to decimal
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  // Return the RGB color representation as a string
  return `rgb(${r}, ${g}, ${b})`;
}
