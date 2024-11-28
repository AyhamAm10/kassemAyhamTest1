import { NOTIFICATION_TYPE, Store } from "react-notifications-component";


export  const AddNotification = (title:string | null , message:string | null , type:NOTIFICATION_TYPE | undefined ) => {
    Store.addNotification({
      title,
      message,
      type , // success، danger، info ,  default
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__flipInX"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 3000,
        onScreen: true
      }
    });
  };