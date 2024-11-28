import Pusher from "pusher-js";
import { endPoints } from "../api/API__information_conect";

const pusher = new Pusher("43b29e235cc2166822fc", {
  cluster: "ap2",
  authEndpoint: endPoints.post.pusher, 
});

export default pusher;
