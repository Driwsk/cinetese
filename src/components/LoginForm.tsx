import * as React from "react";
import { login } from "@/app/login/actions";
import { useActionState } from "react";
import { InitState } from "@/app/stats/InitState";


export default function LoginForm() {
    const [state, action] = useActionState(login, InitState)
  return (
    <form action={action}>
      <input name="nickName" placeholder="Nome"></input>
      {state.errors?.name && <p>{state.errors.name}</p>}
      <input name="email" placeholder="email"></input>
      {state.errors?.email && <p>{state.errors.email}</p>}
      <input name="password" placeholder="senha"></input>
      {state.errors?.password && <p>{state.errors.password}</p>}

      <button type="submit">Login</button>
    </form>

  )

}