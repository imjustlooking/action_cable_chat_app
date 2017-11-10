App.room = App.cable.subscriptions.create("RoomChannel", {
  connected() {
    alert('x is connected')
  },
    // Called when the subscription is ready for use on the server

  disconnected() {},
    // Called when the subscription has been terminated by the server

  received(data) {
    alert(`new message:
      data.content is ${data.content}
    data.username is ${data.username}` )
  }
}
);
    // Called when there's incoming data on the websocket for this channel
