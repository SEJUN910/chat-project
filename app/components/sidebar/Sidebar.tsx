import React from "react";
import DesktopSideBar from "./DesktopSidebar";
import MobileFooter from "./MobileFooter";
import getCurrenUser from "@/app/actions/getCurrentUser";

async function SideBar({ children }: {
    children: React.ReactNode
}) {

    const currenUser = await getCurrenUser()

    return ( 
        <div className="h-full">
            <DesktopSideBar currenUser={currenUser!}/>
            <MobileFooter />
            <main className="lg:pl-20 h-full">
                {children} 
            </main>
        </div>
    );
}
 
export default SideBar;