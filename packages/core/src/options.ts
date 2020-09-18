export enum KeyType {
  None = -1,
  CtrlOrAlt,
  Ctrl,
  Shift,
  Alt
}

export enum KeydownType {
  None = -1,
  Document,
  Canvas,
}

export interface Options {
  cacheLen?: number;
  extDpiRatio?: number;
  width?: string | number;
  height?: string | number;
  color?: string;
  activeColor?: string;
  hoverColor?: string;
  isHideHoverRect?: boolean;
  isHideActiveRect?: boolean;
  hoverDockColor?: string;
  dragColor?: string;
  animateColor?: string;
  font?: {
    color?: string;
    fontFamily?: string;
    fontSize?: number;
    lineHeight?: number;
    textAlign?: string;
    textBaseline?: string;
  };
  rotateCursor?: string;
  hoverCursor?: string;
  hideActiveLineCP?: boolean;
  hideInput?: boolean;
  hideRotateCP?: boolean;
  hideSizeCP?: boolean;
  hideAnchor?: boolean;
  onlySizeX?: boolean;
  onlySizeY?: boolean;
  alwaysAnchor?: boolean;
  disableEmptyLine?: boolean;
  disableRepeatLine?: boolean;
  disableScale?: boolean;
  disableMoveOutParent?: boolean;
  disableDockLine?: boolean;
  playIcon?: string;
  pauseIcon?: string;
  fullScreenIcon?: string;
  loopIcon?: string;
  translateKey?: KeyType;
  scaleKey?: KeyType;
  minScale?: number;
  maxScale?: number;
  autoExpandDistance?: number;
  keydown?: KeydownType;
  on?: (event: string, data: any) => void;
}

export const DefalutOptions: Options = {
  cacheLen: 30,
  font: {
    color: '#222',
    fontFamily: '"Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial',
    fontSize: 12,
    lineHeight: 1.5,
    textAlign: 'center',
    textBaseline: 'middle'
  },
  color: '#222',
  hoverColor: '#fa541c',
  isHideHoverRect: false,
  isHideActiveRect: false,
  hoverDockColor: '#fa541c',
  dragColor: '#1890ff',
  activeColor: '#1890ff',
  rotateCursor: '/assets/img/rotate.cur',
  hoverCursor: 'pointer',
  minScale: 0.25,
  maxScale: 5,
  autoExpandDistance: 200,
  keydown: KeydownType.Document
};
