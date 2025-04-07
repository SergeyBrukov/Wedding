import {toast} from "react-toastify";

export const enum EToastify {
  INFO = "info",
  SUCCESS = "success",
  WARNING = "warn",
  ERROR = "error"
}

export const enum EToastifyPosition {
  BOTTOM_CENTER = "bottom-center",
  BOTTOM_LEFT = "bottom-left",
  BOTTOM_RIGHT = "bottom-right",
  TOP_CENTER = "top-center",
  TOP_LEFT = "top-left",
  TOP_RIGHT = "top-right"
}

const defaultToastifyPosition = EToastifyPosition.TOP_CENTER;

export const notify = (text: string = "Something happened", type: EToastify,position?:EToastifyPosition ) => {
  switch (type) {
    case EToastify.INFO :
      return (
        toast.info(text, {
            position: position || defaultToastifyPosition,
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          }
        )
      )
    case EToastify.SUCCESS:
      return (
        toast.success(text, {
            position: position || defaultToastifyPosition,
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          }
        )
      )
    case EToastify.WARNING:
      return (
        toast.warn(text, {
            position: position || defaultToastifyPosition,
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          }
        )
      )
    case EToastify.ERROR:
      return (
        toast.error(text, {
            position: position || defaultToastifyPosition,
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          }
        )
      )

    default:
      return (
        toast(text, {
            position: position || defaultToastifyPosition,
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          }
        )
      )
  }
};
