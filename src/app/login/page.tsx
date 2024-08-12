import { LoginForm } from "@/components/LoginForm";
import Logo from "../../icons/logo.svg";

export default function Login() {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="flex flex-col items-center gap-10 w-full">
        <Logo className="w-10 h-10" />
        <LoginForm />
      </div>
    </div>
  );
}
