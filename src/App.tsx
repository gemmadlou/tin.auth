import './App.css'
import { SignedOut, SignedIn, SignInButton, SignOutButton } from "@clerk/clerk-react";

function App() {

  return (
    <>
      <SignedOut>
        Must sign in. <br />
        <SignInButton />
      </SignedOut>
      <SignedIn>
        You're signed in. <br/>
        <SignOutButton />
      </SignedIn>
    </>
  )
}

export default App
