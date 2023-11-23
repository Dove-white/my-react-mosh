import { ReactNode } from "react";

interface props {
  children: ReactNode;
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
  dismiss?: string;
}

const Alert = ({ children, dismiss, color = "primary" }: props) => {
  return (
    <div className={"alert alert-" + color + " " + dismiss}>{children}</div>
  );
};

export default Alert;
