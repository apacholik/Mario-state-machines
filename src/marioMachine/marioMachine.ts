import { createMachine } from "xstate";

// https://mario.fandom.com/wiki/Super_Mario_World#Power-up

export const enum MarioStadiums {
  mario = "mario",
  superMario = "superMario",
  fireMario = "fireMario",
  capeMario = "capeMario",
}

export const enum PowerUpItems {
  capeFeather = "capeFeather",
  fireFlower = "fireFlower",
  superMushroom = "superMushroom",
}

export const marioMachine = createMachine({
  id: "mario",
  initial: MarioStadiums.mario,
  states: {
    [MarioStadiums.mario]: {
      on: {
        [PowerUpItems.capeFeather]: {
          target: MarioStadiums.capeMario,
        },
        [PowerUpItems.fireFlower]: {
          target: MarioStadiums.fireMario,
        },
        [PowerUpItems.superMushroom]: {
          target: MarioStadiums.superMario,
        },
      },
    },
    [MarioStadiums.superMario]: {
      on: {
        [PowerUpItems.capeFeather]: {
          target: MarioStadiums.capeMario,
        },
        [PowerUpItems.fireFlower]: {
          target: MarioStadiums.fireMario,
        },
      },
    },
    [MarioStadiums.fireMario]: {
      on: {
        [PowerUpItems.capeFeather]: {
          target: MarioStadiums.capeMario,
        },
        [PowerUpItems.superMushroom]: {
          target: MarioStadiums.superMario,
        },
      },
    },
    [MarioStadiums.capeMario]: {
      on: {
        [PowerUpItems.fireFlower]: {
          target: MarioStadiums.fireMario,
        },
        [PowerUpItems.superMushroom]: {
          target: MarioStadiums.superMario,
        },
      },
    },
  },
});
