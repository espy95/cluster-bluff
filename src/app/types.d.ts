type BoardType = 'Small' | 'Medium'
type BeadType = 'Red' | 'RedFlipped' | 'Blue' | 'BlueFlipped' | 'Green' | 'GreenFlipped' | 'none'
type AmountType = {[key: string]: number}
type GridType = {row: number, col: number}
type SquareType = BeadType[][]