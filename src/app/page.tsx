"use-client";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from "@clerk/nextjs";
import React from "react";

const Homepage = () => {
  return (
    <div className="flex justify-center items-center gap-7">
      Homepage
      <SignedIn>
        <SignOutButton />
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </div>
  );
};

export default Homepage;
