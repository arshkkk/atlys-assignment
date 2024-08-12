import { Input } from "./Input";
import { Button } from "./Button";
import { Form } from "./Form/Form";
import { FormGroup } from "./Form/FormGroup";
import { FormLabel } from "./Form/FormLabel";
import { FormCard } from "./FormCard";
import { FormHeader } from "./FormHeader";
import Link from "next/link";

export const LoginForm = ({ onClosed }: { onClosed?: () => void }) => {
  return (
    <FormCard onClosed={onClosed}>
      <FormHeader title="WELCOME BACK" subtitle="Log into your account" />

      <Form>
        <FormGroup>
          <FormLabel>Email or Username</FormLabel>
          <Input placeholder="Enter your email or username" />
        </FormGroup>

        <FormGroup>
          <div className="flex justify-between items-center">
            <FormLabel>Password</FormLabel>
            <FormLabel className="text-xs">Forgot password?</FormLabel>
          </div>
          <Input placeholder="Enter your password" type="password" />
        </FormGroup>

        <Button>Login now</Button>

        <FormLabel>
          <span className="text-placeholderText">Not registered yet?</span>{" "}
          <Link href="/register">Register {"->"}</Link>
        </FormLabel>
      </Form>
    </FormCard>
  );
};
