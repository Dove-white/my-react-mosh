import { ReactNode } from "react";

interface props {
  children: string;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "dark"
    | "light"
    | "info"
    | "warning"
    | "danger"
    | ReactNode;
  onClick?: () => void;
}

const Button = ({ children, color = "primary", onClick }: props) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
