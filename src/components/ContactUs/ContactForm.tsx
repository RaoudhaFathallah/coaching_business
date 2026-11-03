"use client";

import React from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import GoogleMap from "./GoogleMap";
import Input from "../FormHelpers/Input";
import TextArea from "../FormHelpers/TextArea";
import Button from "../FormHelpers/Button";
import { useLanguage } from "@/providers/LanguageProvider";

const ContactForm: React.FC = () => {
  const { t } = useLanguage();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      comment: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    // console.log(data);
    toast.success(t("contactPage.successMessage"));
    reset();
  };

  return (
    <>
      <div className="py-[50px] md:py-[60px] lg:py-[140px]">
        <div className="container mx-auto">
          <div className="grid items-center gap-[30px] lg:gap-[40px] xl:gap-[50px] 2xl:gap-[100px] grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
            <div>
              {/* GoogleMap */}
              <GoogleMap />
            </div>

            <div>
              <h2 className="text-bold text-[25px] md:text-[30px] lg:text-[40px] xl:text-[48px] leading-none mb-[20px]">
                {t("contactPage.formTitle")}
              </h2>

              <form
                className="space-y-[25px]"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="grid gap-[25px] grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                  <Input
                    id="email"
                    placeholder={t("contactPage.emailPlaceholder")}
                    register={register}
                    errors={errors}
                    required
                  />
                  <Input
                    id="name"
                    placeholder={t("contactPage.namePlaceholder")}
                    register={register}
                    errors={errors}
                    required
                  />
                </div>

                <TextArea
                  id="comment"
                  placeholder={t("contactPage.messagePlaceholder")}
                  register={register}
                  errors={errors}
                  required
                />

                <Button
                  label={t("contactPage.submitButton")}
                  classAtts="
                    bg-[#717FF8] 
                    text-[#fff] 
                    text-[16px] 
                    font-semibold 
                    block 
                    w-full 
                    py-[15px] 
                    sm:py-[17px] 
                    px-[21px] 
                    sm:px-[30px] 
                    leading-none 
                    border 
                    border-[#717FF8] 
                    transition 
                    duration-500 
                    ease-in-out 
                    hover:bg-[#000] 
                    hover:border-[#000] 
                    hover:text-[#fff]"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
