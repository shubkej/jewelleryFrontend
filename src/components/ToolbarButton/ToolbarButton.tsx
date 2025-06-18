import { Tooltip } from "@mui/material";

const ToolbarButton = ({ IconComponent, onClick, isActive, name }: any) => {
  return (
    <Tooltip title={name} placement="top" leaveDelay={0}>
      <div
        className={`toolbar-button ${isActive ? "toolbar-button-active" : ""}`}
        onClick={onClick}>
        <IconComponent />
      </div>
    </Tooltip>
  );
};

export default ToolbarButton;
