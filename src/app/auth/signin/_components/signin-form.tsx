"use client";

import { useForm } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { type SigninInput, SigninSchema } from "@/validators/signin-validator";
import { signinUserAction } from "@/actions/signin-user-action";
import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import {
  OAuthSigninButtons,
  OAuthSigninButtonsSkeleton,
} from "@/components/oauth-signin-buttons";
import { ForgotPasswordForm } from "./forgot-password-form";

export const SigninForm = () => {
  const form = useForm<SigninInput>({
    resolver: valibotResolver(SigninSchema),
    defaultValues: { email: "", password: "" },
  });

  const { handleSubmit, control, formState, setError } = form;

  const submit = async (values: SigninInput) => {
    const res = await signinUserAction(values);

    if (res.success) {
      window.location.href = "/dashboard";
    } else {
      switch (res.statusCode) {
        case 401:
          setError("password", { message: res.error });
          break;
        case 500:
        default:
          const error = res.error || "Internal Server Error";
          setError("password", { message: error });
      }
    }
  };

  return (
    <div className="h-screen w-full lg:grid lg:grid-cols-2">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">SignIn</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <div className="grid gap-4">
            <Form {...form}>
              <form
                onSubmit={handleSubmit(submit)}
                className="max-w-[400px] space-y-8"
                autoComplete="false"
              >
                <FormField
                  control={control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="e.g. john.smith@example.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="e.g. ********"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={formState.isSubmitting}
                  className="w-full"
                >
                  Sign in
                </Button>
              </form>

              <Suspense fallback={<OAuthSigninButtonsSkeleton />}>
                <OAuthSigninButtons />
              </Suspense>
            </Form>
          </div>
          <div className="mt-4 text-center text-xs">
            Don&apos;t have an account?{" "}
            <Link href="/auth/signup" className="underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full h-screen relative pt-[100%]">
        <Image
          src="/images/login_bg.png"
          alt="profile"
          fill
          className="w-full h-full top-0 left-0 object-cover"
        />
      </div>
    </div>
  );
};
