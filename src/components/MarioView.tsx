import MarioMachineContext from "../context/MarioMachineContext";
import { MarioStadiums } from "../marioMachine/marioMachine";

const MarioView = () => {
  const marioState = MarioMachineContext.useSelector<MarioStadiums>((state) => state.value as MarioStadiums);

  const stateDescription = getInfoFromState(marioState);

  return (
    <div className="mario-view">
      <p>Your current state:</p>
      <img height={32} src={stateDescription.imgSrc} alt={stateDescription.name} />
      <p aria-hidden="true">
        <strong>{stateDescription.name}</strong>
      </p>
    </div>
  );
};

function getInfoFromState(marioState: MarioStadiums) {
  switch (marioState) {
    case MarioStadiums.superMario:
      return {
        name: "Super Mario",
        imgSrc: "/assets/SMW_Mario_Super.png",
      };
    case MarioStadiums.capeMario:
      return {
        name: "Cape Mario",
        imgSrc: "/assets/SMWCapeMarioSprite.png",
      };
    case MarioStadiums.fireMario:
      return {
        name: "Fire Mario",
        imgSrc: "/assets/SMWFireMarioSprite.webp",
      };
    default:
      return {
        name: "Mario",
        imgSrc: "/assets/SMWSmallMarioSprite.webp",
      };
  }
}

export default MarioView;
