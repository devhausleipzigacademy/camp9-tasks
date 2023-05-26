"use client";

import { FormEvent, useState } from "react";
import Button from "../shared/Button";
import Input from "../shared/Input";

function SignInForm() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)} className="py-10 w-full">
        <div className="flex mb-8 justify-between">
          <div className="pr-2">
            <div className="text-lg mb-4 ml-2 text-slate-400">First Name</div>
            <Input
              required
              placeholder="First Name"
              value={formState.firstName}
              className="border-solid border-gray border-2 px-6 py-2 text-lg rounded-3xl w-full"
              onChange={(e) =>
                setFormState((s) => ({ ...s, firstName: e.target.value }))
              }
            />
          </div>
          <div className="pl-2">
            <div className="text-lg mb-4 ml-2 text-slate-400">Last Name</div>
            <Input
              required
              placeholder="Last Name"
              value={formState.lastName}
              className="border-solid border-gray border-2 px-6 py-2 text-lg rounded-3xl w-full"
              onChange={(e) =>
                setFormState((s) => ({ ...s, lastName: e.target.value }))
              }
            />
          </div>
          <div className="mb-8">
            <div className="text-lg mb-4 ml-2 text-slate-400">Email</div>
            <Input
              required
              type="email"
              placeholder="Email"
              value={formState.email}
              className="border-solid border-gray border-2 px-6 py-2 text-lg rounded-3xl w-full"
              onChange={(e) =>
                setFormState((s) => ({ ...s, email: e.target.value }))
              }
            />
          </div>
          <div className="mb-8">
            <div className="text-lg mb-4 ml-2 text-slate-400">Password</div>
            <Input
              required
              value={formState.password}
              type="password"
              placeholder="Password"
              className="border-solid border-gray border-2 px-6 py-2 text-lg rounded-3xl w-full"
              onChange={(e) =>
                setFormState((s) => ({ ...s, password: e.target.value }))
              }
            />
          </div>
        </div>
        <div>
          <Button type="submit">SignIn</Button>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
