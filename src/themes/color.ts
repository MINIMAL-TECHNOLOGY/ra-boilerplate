import { Color } from '@mui/material'

export class BaseColor {
  // All Color in Figma
  static readonly BLACK: string = '#222'
  static readonly WHITE: string = '#fff'
  static readonly GREY_EEE: string = '#eee'
  static readonly GREY_E5E5E5: string = '#E5E5E5'
  static readonly GREY_9B9B9B: string = '#9B9B9B'
  static readonly GREY_404041: string = '#404041'
  static readonly BLUE: string = '#0A6EBD'
  static readonly GREEN_6AA339: string = '#6AA339'
  static readonly BEIGE: string = '#DDC390'
  static readonly SKY: string = '#ACD8FF'
  static readonly GREEN_D9D9D9: string = '#D9D9D9'
  static readonly RED: string = '#F33B3B'
  static readonly BLUE_3B82F6: string = '#3B82F6'

  // Main Color
  static readonly MAIN_COLOR = {
    grey: this.GREY_404041,
    white: this.WHITE,
  }

  // Sub Color
  static readonly SUB_COLOR = {
    green: this.GREEN_6AA339,
    beige: this.BEIGE,
    sky: this.SKY,
  }

  // Primary Color
  static readonly PRIMARY = {
    light: '#87b560',
    main: this.GREEN_6AA339,
    dark: '#4a7227',
  }

  // Color of Table
  static readonly TABLE = {
    active: this.BEIGE,
    selected: this.SKY,
  }
}

// Create a color palette: https://m2.material.io/inline-tools/color/
export const primaryColor: Color = {
  50: '#f1f9e9',
  100: '#ddeec9',
  200: '#c7e3a6',
  300: '#b0d882',
  400: '#9fd066',
  500: '#8ec74b',
  600: '#7fb743',
  700: BaseColor.PRIMARY.main,
  800: '#578f30',
  900: '#356d1f',
  A100: BaseColor.PRIMARY.main,
  A200: BaseColor.PRIMARY.main,
  A400: BaseColor.PRIMARY.main,
  A700: BaseColor.PRIMARY.main,
}
