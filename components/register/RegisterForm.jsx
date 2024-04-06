"use client";

import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  firstName: z.string().refine(
    (value) =>
      /[a-z]/.test(value) &&
      /[A-Z]/.test(value) && {
        message: "Fulde navn must include letters only",
      }
  ),
  email: z.string().email({
    message: "Invalid email address",
  }),
  password: z
    .string()
    .min(2, {
      message: "Password must be at least 6 characters.",
    })
    .max(10, {
      message: "Password must be at least 10 characters.",
    })
    .refine(
      (value) =>
        /[a-z]/.test(value) &&
        /[0-9]/.test(value) &&
        /[^a-zA-Z0-9]/.test(value),
      {
        message:
          "Password must include at least one letter, one number, and one special character.",
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

export default function RegisterForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values) {
    console.log(values);
  }

  return (
    <div className="mx-96 border border-[D3DEE8] h-auto px-32 py-12 my-12">
      <Form {...form}>
        <div className="text-center font-bold text-2xl mb-8">
          Opret bruger hos Din Mægler
        </div>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>firstName</FormLabel>
                <FormControl>
                  <Input placeholder="firstName" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email adresse</FormLabel>
                <FormControl>
                  <Input placeholder="Email adresse" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bekræft password</FormLabel>
                <FormControl>
                  <Input placeholder="Bekræft password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full rounded-sm bg-[#162A41] h-10">
            Opret bruger
          </Button>
        </form>
      </Form>
    </div>
  );
}
