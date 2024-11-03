import MarioMachineContext from "../context/MarioMachineContext";
import { PowerUpItems as Items } from "../marioMachine/marioMachine";

const PowerUpItems = () => {
  const marioMachineStatus = MarioMachineContext.useSelector((state) => state);
  const marioActorRef = MarioMachineContext.useActorRef();

  const eventFactory = (type: Items) => () => {
    marioActorRef.send({ type });
  };

  return (
    <div className="power-up-items">
      <button type="button" disabled={!marioMachineStatus.can({ type: Items.capeFeather })} onClick={eventFactory(Items.capeFeather)}>
        Cap Feather <img src="/assets/SMW_Feather.webp" aria-hidden="true" />
      </button>
      <button type="button" disabled={!marioMachineStatus.can({ type: Items.fireFlower })} onClick={eventFactory(Items.fireFlower)}>
        Fire Flower <img src="/assets/SMW_Fire_Flower.webp" aria-hidden="true" />
      </button>
      <button type="button" disabled={!marioMachineStatus.can({ type: Items.superMushroom })} onClick={eventFactory(Items.superMushroom)}>
        Super Mushroom <img src="/assets/SMW_Mushroom.webp" aria-hidden="true" />
      </button>
    </div>
  );
};

export default PowerUpItems;
