"use client";

import React, { FormEvent, useState } from "react";
import Input from "../shared/Input";
import Button from "../shared/Button";

function SignUpForm() {
  const [formState, setFormState] = useState({ email: "", password: "" });
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
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
      <Button>SignUp</Button>
    </form>
  );
}

export default SignUpForm;
