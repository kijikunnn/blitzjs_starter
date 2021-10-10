import { useRouter, BlitzPage, Routes } from "blitz"
import FormLayout from "app/core/layouts/FormLayout"
import { SignupForm } from "app/auth/components/SignupForm"

const SignupPage: BlitzPage = () => {
  const router = useRouter()

  return (
    <div>
      <SignupForm onSuccess={() => router.push(Routes.Home())} />
    </div>
  )
}

SignupPage.redirectAuthenticatedTo = "/"
SignupPage.getLayout = (page) => <FormLayout title="Sign Up">{page}</FormLayout>

export default SignupPage
