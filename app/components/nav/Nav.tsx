import Link from "next/link";
import Container from "../Container";

const Nav = () => {
  return (
    <div className="sticky top-0 w-full bg-slate-500 z-30 shadow-sm">
      <Container>
        <div className="flex justify-between">
            <Link href="/">BharatEnterPrises</Link>
            <div className="search">Search</div>
            <div>
              <Link href="/">CartCount</Link>
               <Link href="/">UserMenu</Link>
            </div>
            
        </div>
      

      </Container>
    </div>
  );
};

export default Nav;
