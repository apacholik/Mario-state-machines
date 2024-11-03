import { createActorContext } from "@xstate/react";

import { marioMachine } from "../marioMachine/marioMachine";

const MarioMachineContext = createActorContext(marioMachine);

export default MarioMachineContext;
