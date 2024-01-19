import './App.css'
import { SignedOut, SignedIn, SignInButton, SignOutButton } from "@clerk/clerk-react";

const Redirect = () => {
  // @todo auto redirect
  // window.location.pathname = "/"
  return (
    <>
      <a href="/"><button>Go to dashboard</button></a>
    </>
  )
}

function App() {

  return (
    <>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <Redirect /> or <SignOutButton />
      </SignedIn>
    </>
  )
}

export default App
