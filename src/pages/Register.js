import Footer from "parts/Footer";
import RegisterForm from "parts/RegisterForm";
import React from "react";
import Header from "../parts/Header";

export default function Register({ history }) {
  return (
    <>
      <section className="container mx-auto pt-10">
        <Header onLight />
      </section>
      <section className="container mx-auto pt-10">
        <RegisterForm />
      </section>
      <section className="mt-24 bg-indigo-1000 py-12">
        <Footer />
      </section>
    </>
  );
}
