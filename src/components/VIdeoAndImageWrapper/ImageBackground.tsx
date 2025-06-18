const ImageBackground = () => (
  <div
    className="bg-image"
    style={{
      backgroundColor:"black",
      // backgroundImage: "url('/background.jpg')",
      // backgroundSize: 'cover',
      // backgroundPosition: 'center',
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
