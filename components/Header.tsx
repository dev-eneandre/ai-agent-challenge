"use client";

import Link from "next/link";
import AgentPulse from "./AgentPulse";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";

function Header() {
  return (
    <header className="sticky top-0 z-50 left-0 right-0  border-b border-r-gray-50/5 backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16">
        {/* left  */}
        <div>
          <Link className="flex items-center gap-4" href="/">
            <AgentPulse size="small" color="green" />
            <span className="text-xl font-semibold bg-gradient-to-r from-[#003900] to-[#007200] bg-clip-text text-transparent">
              CreatorsTube
            </span>
          </Link>
        </div>

        {/* right */}
        <div className="flex gap-x-4 items-center">
            <SignedIn>
                <Link href={"/manage-plan"}>
                <Button variant="outline" className="mr-4 bg-gradient-to-r from-[#003900] to-[#007200]  text-transparent bg-clip-text">Manage Plan</Button>
                </Link>

                <div className="p-2 w-10 flex items-center justify-center rounded-full border bg-[#003900]/10 border-[#007200]/10">
                    <UserButton />
                </div>
            </SignedIn>

            <SignedOut>
                <SignInButton mode="modal">
                    <Button variant="ghost" className="bg-gradient-to-r from-[#003900] to-[#007200]  text-transparent bg-clip-text">
                        Sign In
                    </Button>
                </SignInButton>
            </SignedOut>
        </div>
        </div>

      </div>
    </header>
  );
}
export default Header;
