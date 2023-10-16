export class BaseColor {
  static readonly black: string = '#000'
  static readonly white: string = '#FFF'

  static readonly primary = {
    lighter: '#DABCD6', // Sub magenta
    light: '#B571A2',
    main: '#732169',
  }

  static readonly font = {
    sub: '#9B9B9B',
    main: '#595959',
  }

  static readonly grey = {
    ground: '#EEE',
    dark: '#4E4E4E',
    main: '#D8D8D8',
  }

  static readonly table = {
    active: '#EBF6D5',
    selected: '#F0E4D9',
  }

  static readonly calendar = {
    red: '#E75353',
  }

  static readonly csListStatuses = {
    today: '#F67280',
    incomplete: '#82AAE3',
    complete: '#319DA0',
  }

  static readonly noticeTags = {
    container: '#F55050',
    defective: '#86A3B8',
    general: '#E8D2A6',
  }

  static readonly attendanceStatuses = {
    grey: this.grey.dark,
    blue: '#4690F2',
    green: '#12C645',
    yellow: '#EEBD0D',
    red: '#E72525',
  }

  static readonly approvalStatuses = {
    approved: '#A3EF80',
    waiting: '#F7D765',
    rejected: '#FE8282',
    canceled: this.grey.ground,
  }

  static readonly companyCardStatuses = {
    unregistered: '#ECE0FD',
    editable: this.white,
    closed: this.grey.ground,
  }
}

// Create a color palette: https://m2.material.io/inline-tools/color/
export const primaryColor = {
  50: '#F6E5F2',
  100: '#EBBDE0',
  200: '#E193CC',
  300: '#DB69B7',
  400: '#D949A5',
  500: '#DA2692',
  600: '#C8268B',
  700: '#B12682',
  800: '#9A2479',
  900: BaseColor.primary.main,
  A100: BaseColor.primary.main,
  A200: BaseColor.primary.main,
  A400: BaseColor.primary.main,
  A700: BaseColor.primary.main,
}

