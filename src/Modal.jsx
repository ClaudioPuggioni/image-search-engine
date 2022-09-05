import * as React from "react";

export default function Modal({ imgInfo }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <img onClick={handleOpen} src={imgInfo.urls.thumb} alt={`${imgInfo.alt_description}-thumb`} />
      <div
        className="modalBox"
        onClick={handleClose}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          display: !open ? "none" : "flex",
          height: "100vh",
          width: "100vw",
          backgroundColor: "rgba(0, 0, 0, 0.873)",
        }}
      >
        <img
          src={imgInfo.urls.full}
          alt={`${imgInfo.alt_description}-full`}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            maxHeight: "90%",
            maxWidth: "90%",
            border: "3px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        />
      </div>
    </div>
  );
}
