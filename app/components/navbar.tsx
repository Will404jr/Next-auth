import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/about">About</Link>
      <Link href="/pricing">Pricing</Link>
      <Link href="/newsletter">Newsletter</Link>
    </>
  );
};

export default Navbar;
