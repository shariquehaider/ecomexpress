import { NavLink } from "react-router-dom";
import { BaggageClaim, KeyRound, MapPinHouse, Settings } from 'lucide-react';
import { Button } from "./ui/button";
import store from "@/store";
import { setTab } from "@/store/tabName";
type tabList = "#orders" | "#credentials" | "#address" | "#settings";


function Sidebar() {
  
  const handleTab = (tabName: tabList) => {
    store.dispatch(setTab(tabName))
  }

  return (
    <>
      <div className="sidebar p-[2rem_0] w-[15rem] border-t-[1px] border-r-[1px] border-white bg-black min-h-[100svh]">
        <div className="flex flex-col text-white gap-[1rem]">
          <div className="p-[1rem_2rem_0_1rem]">
            <p className="font-bold">Settings</p>
          </div>
          <hr className="text-white"/>
          <div className="flex flex-col items-start">
            <Button asChild variant={"link"} onClick={() => handleTab("#orders")}>
              <NavLink to="#orders"><BaggageClaim/>Orders</NavLink>
            </Button>
            <Button asChild variant={"link"} onClick={() => handleTab("#credentials")}>
              <NavLink to="#credentials"><KeyRound/>Login & Security</NavLink>
            </Button>
            <Button asChild variant={"link"} onClick={() => handleTab("#address")}>
              <NavLink to="#address"><MapPinHouse/>My Address</NavLink>
            </Button>
            <Button asChild variant={"link"} onClick={() => handleTab("#settings")}>
              <NavLink to="#settings"><Settings/>Account Settings</NavLink>
            </Button>
          </div>

        </div>
      </div>
    </>
  )
}

export default Sidebar