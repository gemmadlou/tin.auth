import './App.css'
import { SignedOut, SignedIn, SignInButton, SignOutButton, OrganizationSwitcher } from "@clerk/clerk-react";

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
        <OrganizationSwitcher />
        <br />
        <Redirect /> or <SignOutButton />
      </SignedIn>
    </>
  )
}

export default App
