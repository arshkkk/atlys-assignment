import { Input } from "./Input";
import { Button } from "./Button";
import { Form } from "./Form/Form";
import { FormGroup } from "./Form/FormGroup";
import { FormLabel } from "./Form/FormLabel";
import { FormCard } from "./FormCard";
import { FormHeader } from "./FormHeader";
import Link from "next/link";

export const RegisterForm = ({ onClosed }: { onClosed?: () => void }) => {
  return (
    <FormCard onClosed={onClosed}>
      <FormHeader title="SIGN UP" subtitle="Create an account to continue" />

      <Form>
        <FormGroup>
          <FormLabel>Email </FormLabel>
          <Input placeholder="Enter your email" />
        </FormGroup>

        <FormGroup>
          <FormLabel>Username</FormLabel>
          <Input placeholder="Choose a preferred username" />
        </FormGroup>

        <FormGroup>
          <FormLabel>Password</FormLabel>
          <Input placeholder="Choose a strong password" type="password" />
        </FormGroup>

        <Button>Continue</Button>

        <FormLabel>
          <span className="text-placeholderText">Already have an account?</span>{" "}
          <Link href={"/login"}>Login {"->"}</Link>
        </FormLabel>
      </Form>
    </FormCard>
  );
};
