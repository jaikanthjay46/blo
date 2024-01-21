import type { Address, BloImage, Palette } from "./types";

import { image } from "./image";
import { svg } from "./svg";

export type {
  Address,
  BloImage,
  BloImageData,
  Hsl,
  Palette,
  PaletteIndex,
} from "./types";

export function blo(address: Address, size: number = 64): string {
  return "data:image/svg+xml;base64," + btoa(bloSvg(address, size));
}

export function bloWithColor(address: Address, pallette: Palette, size: number = 64): string {
  return "data:image/svg+xml;base64," + btoa(svg(address, size, pallette));
}

export function bloSvg(address: Address, size: number = 64): string {
  return svg(address, size);
}

export function bloImage(address: Address): BloImage {
  return image(address);
}
