'use client';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "../../hooks/use-Toast"; 

const formSchema = z.object({
  email: z.string().email({ message: "E-mail inválido" }), 
  password: z.string().min(1, { message: "Senha obrigatória" }),
});

type Form = z.infer<typeof formSchema>;

export default function LoginForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { showToast } = useToast(); // Assuming proper initialization of useToast

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: Form) => {
    try {
      setLoading(true);
      const res = await signIn("credentials", {
        ...values,
      });
      if (res?.ok) {
        showToast({
          description: "Sucesso",
          variant: "",
          title: "",
          id: 0
        });
        router.push("/");
      } else {
        throw new Error("Erro ao logar");
      }
    } catch (error) {
      showToast({
        variant: "destructive",
        title: "Erro",
        description: "E-mail ou senha inválidos",
        id: 0
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex flex-col justify-center h-screen items-center">
      <div className="card bg-blue-500 w-96 shadow-xl p-3">
        <h1 className="text-center">Entrar</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            placeholder="Email"
            {...register("email", {
              required: true,
            })}
          />
          {errors.email?.message && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
          <input
            type="password"
            placeholder="senha"
            {...register("password", {
              required: true,
            })}
          />
          {errors.email?.message && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
          <button type="submit" disabled={loading}>
            {loading ? "Carregando..." : "Entrar"}
          </button>
        </form>
      </div>
    </section>
  );
}
