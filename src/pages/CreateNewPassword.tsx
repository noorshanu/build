import Button from "components/Button";
import Input from "components/Input";
import Typography from "components/Typography";
import PageLayout from "layouts/PageLayout";
import { useForm } from "react-hook-form";

function LoginFormInput({ label, type, ...rest }: any) {
  return (
    <div className="mb-4">
      <label htmlFor={rest.name} className="block mb-2">
        {label}
      </label>
      <Input variant="outlined" type={type} id={rest.name} {...rest} />
    </div>
  );
}

function CreateNewPassword() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => console.log(data);
  return (
    <>
      <PageLayout>
        <section>
          <div className="container-wrapper">
            <div className="flex justify-center items-center">
              <div className="bg-[#2C2C32] max-w-xl mx-auto rounded-xl py-8 px-10">
                <div className="">
                  <Typography className=" text-green-haze-700 text-center text-2xl p-4 pb-1 font-bold ">
                    Create New Password
                  </Typography>
                  <Typography className="text-white text-center text-sm pb-1">
                    That’s it. Set up your new password
                  </Typography>

                  <div className="">
                    <div className="  w-full">
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <LoginFormInput
                          type="password"
                          className="bg-[#383940]"
                          placeholder="New password"
                          {...register("password", {
                            required: true,
                            maxLength: 20,
                          })}
                        />

                        <LoginFormInput
                          type="password"
                          className="bg-[#383940]"
                          placeholder="Confirm new password"
                          {...register("password", {
                            required: true,
                            maxLength: 20,
                          })}
                        />

                        <Button type="submit" className="w-full">
                          Login my account
                        </Button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </PageLayout>
    </>
  );
}

export default CreateNewPassword;
