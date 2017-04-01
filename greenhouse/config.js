import { split, map, join } from "lodash";
import { config } from "axs";
import palx from "palx";

const blue = "#0474f3";
export const palette = palx(blue);

config.set({ colors: palette });

export const colors = {
  pink: palette.pink[5],
  red: palette.red[5],
  orange: palette.orange[5],
  green: palette.teal[7],
  blue,
  navy: palette.blue[8],

  white: "#ffffff",
  snow: palette.gray[0],
  smoke: palette.gray[2],
  grey: palette.gray[7],
  greyDark: palette.gray[8],
  black: palette.gray[9]
};

export const toRGB = (hex: string) => {
  const match = hex.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
  if (!match) {
    return [0, 0, 0];
  }

  let colorString = match[0];

  if (match[0].length === 3) {
    colorString = join(
      map(split(colorString, ""), char => {
        return char + char;
      })
    );
  }

  const integer = parseInt(colorString, 16);
  const r = integer >> 16 & 0xff;
  const g = integer >> 8 & 0xff;
  const b = integer & 0xff;

  return [r, g, b];
};

export const makeRGBA = (rgb: Array<number>, opacity: number): string => {
  return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${opacity || 1})`;
};

export const toRGBA = (hex: string, opacity: number): string => {
  return makeRGBA(toRGB(hex), opacity);
};

export const fontFamily = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif";
