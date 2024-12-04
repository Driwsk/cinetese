import LoginForm from "@/components/LoginForm"
import { useForm, SubmitHandler } from "react-hook-form";
import { ToastProvider } from '../../../hooks/use-Toast'

export default function Login() {
    return (
      
      <ToastProvider>
        <LoginForm />
      </ToastProvider>
    )
}