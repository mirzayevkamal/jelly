import { createContainer } from "unstated-next";

function MainProvider() {
  // You will do all your API calls here
  // and return it in return {} statement to be avilable to all the components
  return {
    //Return smth here
  };
}

let JellyProvider = createContainer(MainProvider);

export default JellyProvider;
