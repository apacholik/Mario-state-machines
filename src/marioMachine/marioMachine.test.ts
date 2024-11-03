import { expect, test, describe } from "bun:test";
import { createActor } from "xstate";
import { MarioStadiums, PowerUpItems, marioMachine } from "./marioMachine";

describe("Mario state transfer", () => {
  test("Mario to Super Mario", () => {
    const marioActor = createActor(marioMachine).start();
    marioActor.send({ type: PowerUpItems.superMushroom });

    const state = marioActor.getSnapshot();
    expect(state.value).toEqual(MarioStadiums.superMario);
  });

  test("Super Mario to Cape Mario", () => {
    // Arrange
    const marioActor = createActor(marioMachine).start();
    marioActor.send({ type: PowerUpItems.superMushroom });

    // Act
    marioActor.send({ type: PowerUpItems.capeFeather });
    const state = marioActor.getSnapshot();

    // Assert
    expect(state.value).toEqual(MarioStadiums.capeMario);
  });

  test("Mario to Cape Mario", () => {
    const marioActor = createActor(marioMachine).start();
    marioActor.send({ type: PowerUpItems.capeFeather });

    const state = marioActor.getSnapshot();
    expect(state.value).toEqual(MarioStadiums.capeMario);
  });

  test("Fire Mario to Cape Mario", () => {
    // Arrange
    const marioActor = createActor(marioMachine).start();
    marioActor.send({ type: PowerUpItems.fireFlower });

    // Act
    marioActor.send({ type: PowerUpItems.capeFeather });
    const state = marioActor.getSnapshot();

    // Assert
    expect(state.value).toEqual(MarioStadiums.capeMario);
  });

  test("Cape Mario to Fire Mario", () => {
    // Arrange
    const marioActor = createActor(marioMachine).start();
    marioActor.send({ type: PowerUpItems.capeFeather });

    // Act
    marioActor.send({ type: PowerUpItems.fireFlower });
    const state = marioActor.getSnapshot();

    // Assert
    expect(state.value).toEqual(MarioStadiums.fireMario);
  });

  test("Mario to Fire Mario", () => {
    const marioActor = createActor(marioMachine).start();
    marioActor.send({ type: PowerUpItems.fireFlower });

    const state = marioActor.getSnapshot();
    expect(state.value).toEqual(MarioStadiums.fireMario);
  });

  test("Super Mario to Fire Mario", () => {
    // Arrange
    const marioActor = createActor(marioMachine).start();
    marioActor.send({ type: PowerUpItems.superMushroom });

    // Act
    marioActor.send({ type: PowerUpItems.fireFlower });
    const state = marioActor.getSnapshot();

    // Assert
    expect(state.value).toEqual(MarioStadiums.fireMario);
  });
});
