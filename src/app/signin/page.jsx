"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { GrGoogle } from "react-icons/gr";

export default function SignInPage() {
  const onSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
    });

    console.log({ data, error });
  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
        provider: 'google'
    })
  }



  return (
  <div className="relative min-h-screen w-full flex items-center justify-center p-6 overflow-hidden bg-slate-50">
  {/* High-end Background Gradients */}
  <div className="absolute inset-0 z-0">
    <div className="absolute top-[-15%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-50/60 blur-[120px]" />
    <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-50/60 blur-[120px]" />
  </div>

  <Card className="relative z-10 w-full max-w-[420px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border-1 border-white/60 bg-white/80 backdrop-blur-xl px-8 py-10 rounded-[24px]">
    <div className="flex flex-col items-center text-center mb-10">
      <div className="h-12 w-12 bg-slate-900 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-slate-200">
        <Check className="text-white" size={24} />
      </div>
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">Welcome Back</h1>
      <p className="text-slate-500 mt-2 font-medium">Please enter your details to sign in.</p>
    </div>

    <Form className="flex flex-col gap-6" onSubmit={onSubmit} validationBehavior="native">
      <div className="flex flex-col gap-5">
        {/* Email Field */}
        <TextField
          isRequired
          name="email"
          type="email"
          labelPlacement="outside"
          className="w-full"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Email Address</Label>
          <Input 
            variant="flat" 
            placeholder="Type your email" 
            className="mt-1"
            classNames={{
                inputWrapper: "bg-white border-1 border-slate-200 group-data-[focus=true]:border-slate-900 h-12 rounded-xl transition-all shadow-sm"
            }}
          />
          <FieldError className="text-xs font-semibold text-rose-500 mt-1" />
        </TextField>

        {/* Password Field */}
        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          labelPlacement="outside"
          className="w-full"
          validate={(value) => {
            if (value.length < 8) return "Min 8 characters required";
            return null;
          }}
        >
          <div className="flex justify-between items-center ml-1">
            <Label className="text-xs font-bold uppercase tracking-wider text-slate-500">Password</Label>
            <button type="button" className="text-xs font-semibold text-indigo-600 hover:text-indigo-500 underline-offset-4 hover:underline transition-all">
                Forgot?
            </button>
          </div>
          <Input 
            variant="flat" 
            placeholder="••••••••" 
            className="mt-1"
            classNames={{
                inputWrapper: "bg-white border-1 border-slate-200 group-data-[focus=true]:border-slate-900 h-12 rounded-xl transition-all shadow-sm"
            }}
          />
          <FieldError className="text-xs font-semibold text-rose-500 mt-1" />
        </TextField>
      </div>

      <div className="flex flex-col gap-3 pt-2">
        <Button 
          type="submit" 
          className="w-full h-12 font-bold text-white bg-slate-900 hover:bg-slate-800 shadow-[0_10px_20px_rgba(0,0,0,0.1)] rounded-xl transition-all active:scale-[0.98]"
        >
          Sign In
        </Button>
      </div>
    </Form>

    <div className="relative my-8">
      <div className="absolute inset-0 flex items-center">
        <span className="w-full border-t border-slate-100"></span>
      </div>
      <div className="relative flex justify-center text-xs uppercase">
        <span className="bg-white/0 px-4 text-slate-400 font-bold tracking-widest backdrop-blur-sm">Or continue with</span>
      </div>
    </div>

    <Button 
      onClick={handleGoogleSignIn} 
      variant="bordered" 
      className="w-full h-12 font-semibold border-slate-200 hover:bg-slate-50 bg-white rounded-xl transition-all flex items-center justify-center gap-3"
    >
      <GrGoogle className="text-lg" />
      Sign in with Google
    </Button>

    <div className="mt-10 text-center">
      <p className="text-sm text-slate-500">
        Don&apos;t have an account?{" "}
        <span className="text-slate-900 font-bold cursor-pointer hover:underline underline-offset-4 decoration-2 decoration-indigo-500">
            Sign up for free
        </span>
      </p>
    </div>
  </Card>
</div>
  );
}