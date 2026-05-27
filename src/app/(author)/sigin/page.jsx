"use client";

import React, { useState } from "react";
import { Button, Link, Card } from "@heroui/react";
import { Envelope, Eye, EyeSlash } from "@gravity-ui/icons";
import { PiLockLight } from "react-icons/pi";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: userData.email,
      password: userData.password,
    });

    setIsLoading(false);

    if (data) {
      toast.success("Successfully logged in!");
      router.push("/");
    }
    if (error) {
      toast.error(error.message || "Login failed");
    }
  };

  const signInWithGoogle = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  const signInWithGithub = async () => {
    await authClient.signIn.social({
      provider: "github",
    });
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-4 py-10 text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-112.5 w-112.5 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute bottom-[-15%] right-[-10%] h-112.5 w-112.5 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[42px_42px]" />
      </div>

      {/* Main Card - HeroUI custom background force black overriding */}
      <Card
        radius="3xl"
        className="relative z-10 w-full max-w-115 border border-zinc-800 shadow-2xl p-8 bg-zinc-950/90! backdrop-blur-xl"
        style={{ backgroundColor: "#09090b" }} // Incase HeroUI global client inline theme overrides
      >
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-indigo-500 to-violet-600 text-2xl font-bold text-white shadow-lg shadow-indigo-500/20">
            H
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Welcome Back
          </h1>
          <p className="mt-2 text-zinc-400">Sign in to your account</p>
        </div>

        {/* Social Buttons */}
        <div className="mb-8 grid grid-cols-2 gap-3">
          <Button
            onClick={signInWithGoogle}
            radius="xl"
            className="h-12 w-full bg-zinc-900 border border-zinc-700 font-medium text-white hover:bg-zinc-800 hover:border-zinc-600"
            startContent={<FaGoogle className="text-lg text-white" />}
          >
            Google
          </Button>
          <Button
            onClick={signInWithGithub}
            radius="xl"
            className="h-12 w-full bg-zinc-900 border border-zinc-700 font-medium text-white hover:bg-zinc-800 hover:border-zinc-600"
            startContent={<FaGithub className="text-lg text-white" />}
          >
            GitHub
          </Button>
        </div>

        {/* Divider */}
        <div className="mb-8 flex items-center gap-4">
          <div className="h-px flex-1 bg-zinc-800" />
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-600">
            OR CONTINUE WITH EMAIL
          </span>
          <div className="h-px flex-1 bg-zinc-800" />
        </div>

        {/* Form */}
        <form className="space-y-6" onSubmit={onSubmit}>
          {/* Email Input */}
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

          {/* Password Input */}
          <div className="space-y-2">
            <div className="flex justify-between">
              <p className="text-sm font-medium text-zinc-300">Password</p>
              <Link
                href="/forgot-password"
                className="text-sm font-medium text-indigo-400 hover:text-indigo-300"
              >
                Forgot Password?
              </Link>
            </div>
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

          {/* Remember Me */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              className="h-4 w-4 rounded border-zinc-600 bg-transparent text-indigo-500 focus:ring-indigo-500"
            />
            <label htmlFor="remember" className="ml-2 text-sm text-zinc-400">
              Remember me
            </label>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            radius="xl"
            isLoading={isLoading}
            className="h-14 w-full cursor-pointer bg-linear-to-r from-indigo-500 to-violet-600 text-base font-semibold text-white shadow-lg shadow-indigo-500/20 hover:brightness-110"
          >
            Sign In
          </Button>
        </form>

        <p className="mt-8 text-center text-sm text-zinc-500">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="font-medium text-indigo-400 hover:text-indigo-300"
          >
            Sign Up
          </Link>
        </p>
      </Card>
    </div>
  );
}
