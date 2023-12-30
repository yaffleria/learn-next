import { NextPage } from "next";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// https://fkhadra.github.io/react-toastify/how-to-style

const CustomToast = ({ closeToast }: any) => {
  return (
    <div>
      <h4>Something went wrong!</h4>
      <button onClick={closeToast}>Close</button>
    </div>
  );
};

const Toast: NextPage = () => {
  const notify = () => {
    toast("Basic notification");
    toast.success("Success notification", {
      position: toast.POSITION.TOP_CENTER,
    });
    toast.error("Error notification", {
      position: toast.POSITION.TOP_LEFT,
      theme: "light",
      hideProgressBar: true,
    });
    toast.warn(<CustomToast />, {
      position: toast.POSITION.BOTTOM_LEFT,
      autoClose: false,
    });
  };

  return (
    <div>
      <h1>Toast</h1>
      <button onClick={notify}>Notify!</button>
      <ToastContainer
        position={toast.POSITION.BOTTOM_CENTER}
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Toast;
