import logo from "/src/pizz.png";

interface HeaderProps {
  onChange: (arg0: string) => void;
  activeSection: string;
}

export default function Header({ onChange, activeSection }: HeaderProps) {
  return (
    <>
      <header>
        <img src={logo} alt="react" />

        {activeSection === "OrderPage" && (
          <h1 onClick={() => onChange("main")}> Menu</h1>
        )}
      </header>
    </>
  );
}
