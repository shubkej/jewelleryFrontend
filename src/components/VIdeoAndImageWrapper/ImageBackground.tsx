const ImageBackground = () => (
  <div
    className="bg-image"
    style={{
      backgroundColor:"black",
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: -1,
    }}
  />
);

export default ImageBackground;
