import { TextareaAutosize } from "@mui/material";

const QueryTextarea = ({
  placeholder = "Add your query here...",
  minRows = 4,
  width = "500px",
  value,
  onChange,
  ...props
}) => {
  return (
    <TextareaAutosize
      minRows={minRows}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{
        width: width,
        padding: "12px 16px",
        border: "2px solid #e0e0e0",
        borderRadius: "12px",
        fontFamily: "inherit",
        fontSize: "14px",
        lineHeight: "1.5",
        resize: "none",
        outline: "none",
        transition: "border-color 0.2s ease",
        boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
      }}
      onFocus={(e) => {
        e.target.style.borderColor = "#1976d2";
        e.target.style.backgroundColor = "#ffffff";
      }}
      onBlur={(e) => {
        e.target.style.borderColor = "#e0e0e0";
        e.target.style.backgroundColor = "#fafafa";
      }}
      {...props}
    />
  );
};

export default QueryTextarea;
