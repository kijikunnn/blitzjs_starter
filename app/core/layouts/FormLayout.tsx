import { ReactNode } from "react"
import { Head } from "blitz"

type LayoutProps = {
  title?: string
  children: ReactNode
}

const FormLayout = ({ title, children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title || "blitzjs_starter"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen w-3/5 mx-auto bg-blue-100">{children}</div>
    </>
  )
}

export default FormLayout
