interface Props {
  countCartItems: number;
}

const Navbar = ({ countCartItems }: Props) => {
  return <div>Cart: {countCartItems}</div>;
};

export default Navbar;
