type Color = string;
type ColorScale = [Color, Color, Color, Color, Color];

export interface Activity {
  date: string;
  count: number;
  level: number;
}
export type ThemeInput =
  | {
      light: ColorScale | [from: Color, to: Color];
      dark?: ColorScale | [from: Color, to: Color];
    }
  | {
      light?: ColorScale | [from: Color, to: Color];
      dark: ColorScale | [from: Color, to: Color];
    };
