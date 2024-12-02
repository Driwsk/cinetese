'use server'
import {
    FormState,
    LoginFormSchema,
    SignupFormSchema,
  } from '@/app/_libs/definitions';



export async function Login(
    state: FormState,
    formData: FormData,
  ): Promise<FormState> {
    // 1. Validate form fields
    const validatedFields = SignupFormSchema.safeParse({
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
    });
}