"use client";

import { Description, Label, Radio, RadioGroup } from "@heroui/react";
import React, { useState } from "react";
import { Button, Checkbox, Link, Card } from "@heroui/react";
import { Envelope, Eye, EyeSlash, Person } from "@gravity-ui/icons";
import { PiLockLight } from "react-icons/pi";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);

  const serachParams = useSearchParams();
  const redirectTo = serachParams.get("redirect") || "/";
  console.log("Redirect to bt to page ", redirectTo);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    if (userData.password !== userData.confirmPassword) {
      return toast.error("Passwords do not match!");
    }

    const { data, error } = await authClient.signUp.email({
      name: userData.fullName,
      email: userData.email,
      password: userData.password,
      role: userData.role,
    });

    if (data) {
      toast.success("Successful Signup!");
      router.push(redirectTo);
    }
    if (error) {
      toast.error(error.message || "Something went wrong!");
    }
  };

  const signinWithGoogle = async () => {
    await authClient.signIn.social({ provider: "google" });
  };

  const signinWithGithub = async () => {
    await authClient.signIn.social({ provider: "github" });
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-4 py-10 text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-112.5 w-112.5 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute bottom-[-15%] right-[-10%] h-112.5 w-112.5 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[42px_42px]" />
      </div>

      <Card
        radius="3xl"
        className="relative z-10 w-full max-w-115 border border-zinc-800 bg-zinc-950/90 backdrop-blur-xl shadow-2xl p-8"
      >
        <div className="mb-8 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-indigo-500 to-violet-600 shadow-lg shadow-indigo-500/20">
            <Person className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Create Account
          </h1>
          <p className="mt-2 text-zinc-400">
            Create your account and get started
          </p>
        </div>

        <div className="mb-8 grid grid-cols-2 gap-3">
          <Button
            onClick={signinWithGoogle}
            radius="xl"
            className="h-12 w-full bg-zinc-900 border border-zinc-700 font-medium text-white hover:bg-zinc-800 hover:border-zinc-600"
            startContent={<FaGoogle className="text-lg text-white" />}
          >
            Google
          </Button>
          <Button
            onClick={signinWithGithub}
            radius="xl"
            className="h-12 w-full bg-zinc-900 border border-zinc-700 font-medium text-white hover:bg-zinc-800 hover:border-zinc-600"
            startContent={<FaGithub className="text-lg text-white" />}
          >
            GitHub
          </Button>
        </div>

        <div className="mb-8 flex items-center gap-4">
          <div className="h-px flex-1 bg-zinc-800" />
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-600">
            OR CONTINUE WITH EMAIL
          </span>
          <div className="h-px flex-1 bg-zinc-800" />
        </div>

        <form className="space-y-6" onSubmit={onSubmit}>
          <div className="space-y-2">
            <p className="text-sm font-medium text-zinc-300">Full Name</p>
            <div className="relative h-14 w-full rounded-xl border-2 border-zinc-700 bg-[#0A0A0A] transition-all hover:border-zinc-600 focus-within:border-indigo-500 focus-within:shadow-[0_0_0_4px_rgba(99,102,241,0.15)]">
              <input
                name="fullName"
                type="text"
                placeholder="Enter your full name"
                className="h-full w-full rounded-xl bg-transparent px-4 pl-12 text-white placeholder:text-zinc-500 outline-none"
                required
              />
              <Person className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium text-zinc-300">Email Address</p>
            <div className="relative h-14 w-full rounded-xl border-2 border-zinc-700 bg-[#0A0A0A] transition-all hover:border-zinc-600 focus-within:border-indigo-500 focus-within:shadow-[0_0_0_4px_rgba(99,102,241,0.15)]">
              <input
                name="email"
                type="email"
                placeholder="Enter your email address"
                className="h-full w-full rounded-xl bg-transparent px-4 pl-12 text-white placeholder:text-zinc-500 outline-none"
                required
              />
              <Envelope className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium text-zinc-300">Password</p>
            <div className="relative h-14 w-full rounded-xl border-2 border-zinc-700 bg-[#0A0A0A] transition-all hover:border-zinc-600 focus-within:border-indigo-500 focus-within:shadow-[0_0_0_4px_rgba(99,102,241,0.15)]">
              <input
                name="password"
                type={isPasswordVisible ? "text" : "password"}
                placeholder="Enter your password"
                className="h-full w-full rounded-xl bg-transparent px-4 pl-12 pr-12 text-white placeholder:text-zinc-500 outline-none"
                required
              />
              <PiLockLight className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />
              <button
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 outline-none"
                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              >
                {isPasswordVisible ? <EyeSlash /> : <Eye />}
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium text-zinc-300">
              Confirm Password
            </p>
            <div className="relative h-14 w-full rounded-xl border-2 border-zinc-700 bg-[#0A0A0A] transition-all hover:border-zinc-600 focus-within:border-indigo-500 focus-within:shadow-[0_0_0_4px_rgba(99,102,241,0.15)]">
              <input
                name="confirmPassword"
                type={isConfirmPasswordVisible ? "text" : "password"}
                placeholder="Confirm your password"
                className="h-full w-full rounded-xl bg-transparent px-4 pl-12 pr-12 text-white placeholder:text-zinc-500 outline-none"
                required
              />
              <PiLockLight className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />
              <button
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 outline-none"
                onClick={() =>
                  setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
                }
              >
                {isConfirmPasswordVisible ? <EyeSlash /> : <Eye />}
              </button>
            </div>
          </div>

          {/*  Role Selection  */}
          <div className="flex flex-col gap-4">
            <Label className="text-white">Subscription plan</Label>
            <RadioGroup
              defaultValue="seeker"
              name="role"
              orientation="horizontal"
            >
              <Radio value="seeker">
                <Radio.Control>
                  <Radio.Indicator />
                </Radio.Control>
                <Radio.Content>
                  <Label className="text-white">Job Seeker</Label>
                </Radio.Content>
              </Radio>
              <Radio value="recruiter">
                <Radio.Control>
                  <Radio.Indicator />
                </Radio.Control>
                <Radio.Content>
                  <Label className="text-white">Recruiter</Label>
                </Radio.Content>
              </Radio>
            </RadioGroup>
          </div>

          <div className="pt-2">
            <Checkbox size="sm" classNames={{ label: "text-sm text-zinc-400" }}>
              I agree to the{" "}
              <Link href="#" className="text-indigo-400 hover:underline">
                Terms
              </Link>{" "}
              &{" "}
              <Link href="#" className="text-indigo-400 hover:underline">
                Privacy Policy
              </Link>
            </Checkbox>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            radius="xl"
            className="h-14 cursor-pointer w-full bg-linear-to-r from-indigo-500 to-violet-600 text-base font-semibold text-white shadow-lg shadow-indigo-500/20 hover:brightness-110"
          >
            SignUp
          </Button>
        </form>

        <p className="mt-8 text-center text-sm text-zinc-500">
          Already have an account?{" "}
          <Link
            href={`/sigin?redirect=${redirectTo}`}
            className="font-medium text-indigo-400 hover:text-indigo-300"
          >
            Sign In
          </Link>
        </p>
      </Card>
    </div>
  );
}
