import { Link } from "react-router-dom";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ShoppingCart, Search, CircleX } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useSelector } from "react-redux";

function Navbar() {
  const [switchToggle, setSwitchToggle] = useState<boolean>(false);
  const [searchText, setSearchText ] = useState<string>("");
  const { isAuthenticated } = useSelector((state: any) =>  state.userLogin)


  const searchOnChange = (event: React.FormEvent<HTMLInputElement>) => {
    setSearchText(event.currentTarget.value)
  }

  const handleClick = () => {
    console.log(searchText)
  }

  function toggleBar() {
    switchToggle ? setSwitchToggle(false) : setSwitchToggle(true);
  }

  return (
    <div>
      <div className="navbar">
        <div className="pt-[2px] pl-[3%]">
          <Link to="/"><h1 className="text-white text-[2rem]">E-Com <span className="text-[red]">Express</span></h1></Link>
        </div>
        <div className="search">
          <Input type="text" placeholder="Search Ecom Express" value={searchText} onChange={searchOnChange}/>
          <Button type="button" onClick={handleClick} variant={"secondary"}><Search /></Button>
        </div>
        <div className="extras">
          {!isAuthenticated && <Button asChild><Link to="/login">Login</Link></Button>}
          {isAuthenticated && <>
            <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant={"outline"} className="">Account & Lists</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-black text-white">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-white" />
              <DropdownMenuGroup>
                <DropdownMenuItem><Button asChild variant={"link"}><Link to="/account">My Profile</Link></Button></DropdownMenuItem>
                <DropdownMenuItem><Button asChild variant={"link"}><Link to="/account/orders">My Orders</Link></Button></DropdownMenuItem>
                <DropdownMenuItem><Button asChild variant={"link"}><Link to="/account/wishlist">My Wishlist</Link></Button></DropdownMenuItem>
                <DropdownMenuItem><Button asChild variant={"link"}><Link to="/account/address">My Address</Link></Button></DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator className="bg-white" />
              <DropdownMenuGroup className="pl-[1rem]">
                <DropdownMenuItem>
                  Settings
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Log out
                  <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          </>}
          <Button asChild className={cn('flex flex-col')}><Link to='/cart'><ShoppingCart />My Cart</Link></Button>
        </div>
        <div className="mobile-search">
          <div className={switchToggle ? "active" : ""}>
            <Input type="text" placeholder="Search Ecom Express"  value={searchText} onChange={searchOnChange}/>
            <Button variant={"outline"} onClick={handleClick}><Search/></Button>
          </div>
          <Button variant={switchToggle ? "destructive" : "outline"} onClick={toggleBar}>{switchToggle ? <CircleX/> : <Search/>}</Button>
        </div>
      </div>
    </div>
  )
}

export default Navbar