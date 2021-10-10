import { useRouter, BlitzPage } from "blitz"
import { LoginForm } from "app/auth/components/LoginForm"
import FormLayout from "app/core/layouts/FormLayout"

const LoginPage: BlitzPage = () => {
  const router = useRouter()

  return (
    <div>
      <LoginForm
        onSuccess={() => {
          const next = router.query.next ? decodeURIComponent(router.query.next as string) : "/"
          router.push(next)
        }}
      />
    </div>
  )
}

LoginPage.redirectAuthenticatedTo = "/"
LoginPage.getLayout = (page) => <FormLayout title="Log In">{page}</FormLayout>

export default LoginPage
