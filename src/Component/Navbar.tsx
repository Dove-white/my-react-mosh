interface Props {
  countCartItems: number;
}

const Navbar = ({ countCartItems }: Props) => {
  return <div>Navbar: {countCartItems}</div>;
};

export default Navbar;
