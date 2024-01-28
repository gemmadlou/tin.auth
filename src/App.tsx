import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import { SignedOut, SignedIn, SignInButton, SignOutButton, OrganizationSwitcher } from "@clerk/clerk-react";

const Redirect = () => {
  window.location.pathname = "/"
  return (
    <>
    </>
  )
}

const Callback = () => {
  return (
    <>
      <SignedIn>
        <Redirect />
      </SignedIn>
    </>
  )
}

const GoToDashboard = () => {
  return (
    <>
      <a href="/"><button>Go to dashboard</button></a>
    </>
  )
}

const Session = () => {
  return (
    <div>
      <SignedOut>
        <SignInButton redirectUrl='/session/callback' />
      </SignedOut>
      <SignedIn>
        <OrganizationSwitcher />
        <br />
        <GoToDashboard /> or <SignOutButton />
      </SignedIn>
    </div>
  )
}

const Iframe = () => {
  return (
    <>
      <SignedIn></SignedIn>
    </>
  )
}

function App() {

  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path="/session" element={<Session />} />
          <Route path="/session/iframe" element={<Iframe />} />
          <Route path="/session/callback" element={<Callback />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
