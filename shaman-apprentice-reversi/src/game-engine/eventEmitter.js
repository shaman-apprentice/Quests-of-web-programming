import EventEmitter from "events"
import handleMove from "./handleMove"

const eventEmitter = new EventEmitter()

const eventTypes = {
  move: "move",
};

eventEmitter.on(eventTypes.move, handleMove)

export { eventEmitter, eventTypes }
