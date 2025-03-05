import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Toast = () => {
  return (
    <ToastContainer
      position="top-center"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      toastStyle={{
        backgroundColor: "white",
        color: "black",
        border: "1px solid black",
        boxShadow: "2px 2px 5px rgba(0,0,0,0.2)",
      }}
    />
  );
};

// Function to trigger toasts
export const showToast = (message : string, type = "success") => {
  if (type === "success") {
    toast.success(message, {
      style: { backgroundColor: "white", color: "black", border: "1px solid black" },
    });
  } else if (type === "error") {
    toast.error(message, {
      style: { backgroundColor: "white", color: "black", border: "1px solid black" },
    });
  }
};
