"use client";

import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";

const formSchema = z.object({
  email: z.string().email({
    message: "ugyldig emailadresse.",
  }),
  password: z
    .string()
    .min(6, {
      message: "Adgangskoden skal være på mindst 6 tegn.",
    })
    .max(10, {
      message: "Adgangskoden skal være mindre end 10 tegn.",
    })
    .refine(
      (value) =>
        /[a-z]/.test(value) &&
        /[0-9]/.test(value) &&
        /[^a-zA-Z0-9]/.test(value),
      {
        message:
          "Adgangskoden skal indeholde mindst ét ​​bogstav, ét tal og ét specialtegn.",
      }
    ),
});

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export default function LoginForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
    mode: "onChange",
  });

  // 2. Define a submit handler.
  function onSubmit(values) {
    console.log(values);
  }

  return (
    <div className="mx-96 border border-[D3DEE8] h-auto px-32 py-12 my-12">
      <Form {...form}>
        <div className="text-center font-bold text-2xl mb-8">
          Log ind på din konto
        </div>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field , fieldState: { error }}) => (
              <FormItem>
                <FormLabel>Email adresse</FormLabel>
                <FormControl>
                  <Input placeholder="Email adresse" {...field} />
                </FormControl>
                <FormMessage>{error?.message}</FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field , fieldState: { error }}) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Password" {...field} />
                </FormControl>
                <FormMessage>{error?.message}</FormMessage>
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full rounded-sm bg-[#162A41] h-10">
            Log ind
          </Button>
          <div>
            Log ind med
            <div className="flex mt-4 justify-between">
              <Button className="bg-[#DD4B39] rounded w-36">Google</Button>
              <Button className="bg-[#3B5999] rounded w-36">Facebook</Button>
              <Button className="bg-[#162A41] rounded w-36">Twitter</Button>
            </div>
            <div className="flex items-center justify-center mt-5 text-sm gap-1">
              <p>Har du ikke en konto?</p>
              <Link href="/auth/register">
              <p className="text-sky-500"> Opret bruger.</p>
              </Link>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
