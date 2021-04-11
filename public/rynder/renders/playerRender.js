const playerRender = ({ ctx, playerObject }) => {
  ctx.fillStyle = playerObject.state.color;
  ctx.fillRect(
    playerObject.state.position.x,
    playerObject.state.position.y,
    playerObject.state.width,
    playerObject.state.height
  );
};

export default playerRender;
