'use client'

import LoginGoogle from "./loginGoogle";

export default function CardLogin() {
  return (
    <>
      <div className="flex items-top justify-center min-h-screen bg-gray-300 w-1/2">
        <div className="card-body">
          <h2 className="text-black text-2xl text-center">Faça seu Login</h2>
          <div className="w-full flex flex-col gap-4 border-b p-4">
          <input type="email" placeholder="digite seu email aqui"></input>
          <input type="password" placeholder="digite sua senha aqui"></input>
          </div>
          <div className="card-actions justify-end">
            <button className="bg-blue-500 text-white p-2 rounded-lg ">login</button>
          </div>
          <div className="bg-gray-100 p-4 text-center">
            <button type="submit" onClick={LoginGoogle}></button>
          </div>
        </div>
      </div>
    </>
  );
}
