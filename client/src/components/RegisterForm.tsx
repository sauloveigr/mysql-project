import { registerUser } from "../services/apiService";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { WrapperSection } from "./atoms/WrapperSection";

type FormProps = {
   email: string;
   password: string;
};

const RegisterForm = () => {
   const { register, handleSubmit, control, reset } = useForm<FormProps>({
      defaultValues: {
         email: "",
         password: "",
      },
   });

   const onSubmit: SubmitHandler<FormProps> = async (data) => {
      try {
         reset();
         await registerUser({
            email: data.email,
            password: data.password,
         });
      } catch (error) {
         console.error("Error during registration:", error);
      }
   };

   return (
      <WrapperSection>
         <article className="grid gap-8 w-full">
            <h1 className="text-4xl font-bold">Sign Up</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
               <div className="grid gap-3">
                  <Controller
                     name="email"
                     control={control}
                     render={({ field }) => (
                        <input
                           {...field}
                           {...(register("email"), { required: true })}
                           type="text"
                           placeholder="Enter Email"
                           className="bg-white rounded-md px-5 py-3 outline-none"
                        />
                     )}
                  />
                  <Controller
                     name="password"
                     control={control}
                     render={({ field }) => (
                        <input
                           {...field}
                           {...(register("password"), { required: true })}
                           type="password"
                           placeholder="•••••••"
                           className="bg-white rounded-md px-5 py-3 outline-none"
                        />
                     )}
                  />
               </div>
               <button
                  className="bg-primary-blue w-full text-white rounded-md px-5 py-3 outline-none mt-16 font-semibold"
                  type="submit"
               >
                  Sign Up
               </button>
            </form>
            <div className="grid gap-4 justify-center">
               <hr className="w-56 h-[1px] border-t-0 bg-light-grey/35 " />
               <span className="text-xs text-light-grey">Or continue with</span>
            </div>
            <p className="max-w-56 m-auto">
               If you already have an account, you can
               <a className="cursor-pointer text-primary-blue"> Login here!</a>
            </p>
         </article>
      </WrapperSection>
   );
};

export default RegisterForm;
