interface CellProps {
  cellCode: number,
  index: number,
  cellColor: any,
  mode: string
}

interface RowProps {
  size: number,
  rowCode: string,
  index: number,
  accomplishment: string,
  colorsCode: string | false,
  colors: string[] | false
}

interface KeysProps {
  levelCode: string,
  accomplishment: string
}

export type { CellProps, RowProps, KeysProps };
