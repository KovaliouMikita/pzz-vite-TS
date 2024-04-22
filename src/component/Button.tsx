interface ButtonProps {
  children: string;
  onClick?: () => void | string | boolean;
  isActive?: boolean;
}

export default function Button({ children, onClick, isActive }: ButtonProps) {
  return (
    <button
      className={isActive ? "button active" : "button "}
      onClick={onClick}
    >
      {" "}
      {children}
    </button>
  );
}
