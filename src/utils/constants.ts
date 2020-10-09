import beadRed from '../assets/beads/red/bead-red.png'
import beadBlue from '../assets/beads/blue/bead-blue.png'
import beadGreen from '../assets/beads/green/bead-green.png'
import beadRedFlipped from '../assets/beads/red/bead-red-flipped.png'
import beadBlueFlipped from '../assets/beads/blue/bead-blue-flipped.png'
import beadGreenFlipped from '../assets/beads/green/bead-green-flipped.png'

export const SQUARE_SIZE: number = 62
export const BEADS: BeadType[] = ['Red', 'Blue', 'Green']
export enum BOARD_SIZES {
  'Small' = 6,
  'Medium' = 12,
}
export const BEAD = {
  none: '',
  Red: beadRed,
  RedFlipped: beadRedFlipped,
  Blue: beadBlue,
  BlueFlipped: beadBlueFlipped,
  Green: beadGreen,
  GreenFlipped: beadGreenFlipped,
}