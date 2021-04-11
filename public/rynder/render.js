import ctx from "./context";
import playerRender from "./renders/playerRender";

// types of state = {
//     players: [],
//     fruits: [],
//     enemies: [],
//     unavailableIDs: [],
// }

const renderPlayers = (playersArray) => {
  let i = 0;
  let len = playersArray.length;
  while (i < len) {
    let player = playersArray[i];
    playerRender({ ctx, player });
    i++;
  }
};

const Render = (state) => {
  renderPlayers(state.players);
};

export default Render;
