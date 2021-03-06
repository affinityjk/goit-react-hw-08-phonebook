import { Toaster } from "react-hot-toast";

function Toast() {
  return (
    <Toaster
      duration="5000"
      position="top-right"
      containerStyle={{ top: 100 }}
      toastOptions={{
        style: {
          border: "2px solid #ca1277",
          padding: "12px",
          color: "#ca1277",
        },
      }}
    />
  );
}

export default Toast;
