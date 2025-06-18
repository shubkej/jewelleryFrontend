const ModalStyles = {
    modalStyle: {
      position: "absolute" as "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "100%",
      maxWidth: "420px",
      bgcolor: "background.paper",
      border: "0px solid #000",
      boxShadow: "0px 0px 3.7px 0px #00000030",
      p: { xs: 2, sm: 4 },
      overflow: "hidden",
      borderRadius: "15px",
      maxHeight: `calc(100% - 10dvh)`,
      "@media (max-width: 1024px)": {
        maxWidth: "calc(100% - 5dvh)",
      },
    },
    mainWrapper: {
      width: "100%",
      height: "100%",
    },
    header: {
      width: "100%",
      display: "flex",
      alignItems: "start",
      justifyContent: "space-between",
    },
    closeIconButton: {
      position: "absolute",
      top: 0,
      right: 0,
      color: "black",
    },
    body: {
      width: "100%",
      height: "100%",
      backgroundColor: "#fff",
      overflow: "auto",
      maxHeight: `calc(100dvh - 20dvh - 69px)`,
      "@media (max-width: 1024px)": {
      },
    },
  };
  export default ModalStyles;
  