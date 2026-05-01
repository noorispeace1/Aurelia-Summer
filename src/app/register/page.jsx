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
import { useRouter } from "next/navigation";

export default function RegisterPage() {

    const router = useRouter()

  const onSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const {data, error} = await authClient.signUp.email({
        email,
        password,
        name,
        image
                            })
    

    console.log({data, error})

    if(!error) {
        router.push('/')
    }

  };

  return (
  <div className="relative min-h-screen w-full flex items-center justify-center p-6 overflow-hidden">
  {/* High-end Background Elements */}
  <div className="absolute inset-0 z-0">
    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-100/50 blur-[120px]" />
    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-100/50 blur-[120px]" />
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150" />
  </div>

  <Card className="relative z-10 w-full max-w-[440px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-1 border-white/60 bg-white/70 backdrop-blur-xl px-8 py-10 rounded-[24px]">
    <div className="flex flex-col items-center text-center mb-10">
      <div className="h-12 w-12 bg-indigo-600 rounded-xl flex items-center justify-center mb-4 shadow-indigo-200 shadow-lg">
        <Check className="text-white" size={24} />
      </div>
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">Get Started</h1>
      <p className="text-slate-500 mt-2 font-medium">Create your professional account today.</p>
    </div>

    <Form className="flex flex-col gap-7" onSubmit={onSubmit} validationBehavior="native">
      <div className="flex flex-col gap-5">
        {/* Full Name */}
        <TextField isRequired name="name" type="text" labelPlacement="outside" className="w-full">
          <Label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Full Name</Label>
          <Input 
            variant="flat" 
            placeholder="Enter your name" 
            className="mt-1 group-data-[focus=true]:bg-white transition-all shadow-sm"
            classNames={{
                inputWrapper: "bg-white/50 border-1 border-slate-200 group-data-[focus=true]:border-indigo-500 h-12 rounded-xl"
            }}
          />
          <FieldError className="text-xs font-semibold text-rose-500 mt-1" />
        </TextField>

        {/* Profile Image */}
        <TextField isRequired name="image" type="text" labelPlacement="outside" className="w-full">
          <Label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Photo URL</Label>
          <Input 
            variant="flat" 
            placeholder="Type a URL to your profile image" 
            className="mt-1 group-data-[focus=true]:bg-white shadow-sm"
            classNames={{
                inputWrapper: "bg-white/50 border-1 border-slate-200 group-data-[focus=true]:border-indigo-500 h-12 rounded-xl"
            }}
          />
          <FieldError className="text-xs font-semibold text-rose-500 mt-1" />
        </TextField>

        {/* Email */}
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
          <Label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Email</Label>
          <Input 
            variant="flat" 
            placeholder="Type your email" 
            className="mt-1 group-data-[focus=true]:bg-white shadow-sm"
            classNames={{
                inputWrapper: "bg-white/50 border-1 border-slate-200 group-data-[focus=true]:border-indigo-500 h-12 rounded-xl"
            }}
          />
          <FieldError className="text-xs font-semibold text-rose-500 mt-1" />
        </TextField>

        {/* Password */}
        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          labelPlacement="outside"
          className="w-full"
          validate={(value) => {
            if (value.length < 8) return "Min 8 characters";
            if (!/[A-Z]/.test(value)) return "Missing uppercase";
            if (!/[0-9]/.test(value)) return "Missing number";
            return null;
          }}
        >
          <Label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Password</Label>
          <Input 
            variant="flat" 
            placeholder="••••••••" 
            className="mt-1 group-data-[focus=true]:bg-white shadow-sm"
            classNames={{
                inputWrapper: "bg-white/50 border-1 border-slate-200 group-data-[focus=true]:border-indigo-500 h-12 rounded-xl"
            }}
          />
          <Description className="text-[10px] text-slate-400 mt-2 font-medium">
            Must include at least 8 characters, one uppercase, and one number.
          </Description>
          <FieldError className="text-xs font-semibold text-rose-500 mt-1" />
        </TextField>
      </div>

      <div className="flex flex-col gap-4 mt-2">
        <Button 
          type="submit" 
          className="w-full h-12 font-bold text-white bg-slate-900 hover:bg-slate-800 shadow-[0_10px_20px_rgba(0,0,0,0.15)] rounded-xl transition-all active:scale-[0.97]"
        >
          Create Account
        </Button>
        <Button 
          type="reset" 
          variant="light" 
          className="w-full h-11 text-slate-400 hover:text-slate-600 font-semibold"
        >
          Reset form
        </Button>
      </div>
    </Form>
    
    <div className="mt-10 text-center">
      <p className="text-[11px] text-slate-400 font-medium leading-relaxed">
        By continuing, you agree to our <br />
        <span className="text-slate-600 underline underline-offset-4 cursor-pointer hover:text-indigo-600 transition-colors">Terms of Service</span> and <span className="text-slate-600 underline underline-offset-4 cursor-pointer hover:text-indigo-600 transition-colors">Privacy Policy</span>.
      </p>
    </div>
  </Card>
</div>
  );
}