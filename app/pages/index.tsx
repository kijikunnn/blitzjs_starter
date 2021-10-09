import { Suspense } from "react"
import { Image, Link, BlitzPage, useMutation, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import logout from "app/auth/mutations/logout"
import logo from "public/logo.png"

/*
 * This file is just for a pleasant getting started page for your new app.
 * You can delete everything in here and start from scratch if you like.
 */

const UserInfo = () => {
  const currentUser = useCurrentUser()
  const [logoutMutation] = useMutation(logout)

  if (currentUser) {
    return (
      <>
        <button
          className="text-base bg-[#6700eb] px-6 py-3 text-[#f4f4f4] text-center hover:bg-[#45009d]"
          onClick={async () => {
            await logoutMutation()
          }}
        >
          Logout
        </button>
        <div>
          User id: <code>{currentUser.id}</code>
          <br />
          User role: <code>{currentUser.role}</code>
        </div>
      </>
    )
  } else {
    return (
      <>
        <Link href={Routes.SignupPage()}>
          <a className="text-base bg-[#6700eb] px-6 py-3 text-[#f4f4f4] text-center hover:bg-[#45009d]">
            <strong>Sign Up</strong>
          </a>
        </Link>
        <Link href={Routes.LoginPage()}>
          <a className="text-base bg-[#6700eb] px-6 py-3 text-[#f4f4f4] text-center hover:bg-[#45009d]">
            <strong>Login</strong>
          </a>
        </Link>
      </>
    )
  }
}

const Home: BlitzPage = () => {
  return (
    <div className="min-h-screen flex justify-center flex-col items-center">
      <main className="py-20 flex-1 flex flex-col justify-center items-center">
        <div className="mb-8 w-80">
          <Image src={logo} alt="blitzjs" />
        </div>
        <p className="text-xl mb-8">This is Blitz.js&#39;s starter code</p>
        <div className="mb-12 grid grid-flow-col gap-2">
          <Suspense fallback="Loading...">
            <UserInfo />
          </Suspense>
        </div>
        <div className=" grid grid-flow-col gap-2">
          <a
            className="text-base bg-[#6700eb] py-4 px-8 text-[#f4f4f4] text-center hover:bg-[#45009d]"
            href="https://blitzjs.com/docs/getting-started?utm_source=blitz-new&utm_medium=app-template&utm_campaign=blitz-new"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
          <a
            className="text-base  py-4 px-8 text-[#6700eb] text-center border-2 border-[#6700eb] hover:text-[#45009d] hover:border-[#45009d]"
            href="https://github.com/blitz-js/blitz"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github Repo
          </a>
          <a
            className="text-base  py-4 px-8 text-[#6700eb] text-center border-2 border-[#6700eb] hover:text-[#45009d] hover:border-[#45009d]"
            href="https://discord.blitzjs.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discord Community
          </a>
        </div>
      </main>
      <footer className="w-full h-16 border-t border-[#eaeaea] flex justify-center items-center bg-[#45009d]">
        <a
          className="flex justify-center items-center text-[#f4f4f4] no-underline"
          href="https://blitzjs.com?utm_source=blitz-new&utm_medium=app-template&utm_campaign=blitz-new"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Blitz.js
        </a>
      </footer>
    </div>
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home
