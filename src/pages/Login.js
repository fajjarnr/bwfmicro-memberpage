import Footer from "parts/Footer";
import LoginForm from "parts/LoginForm";
import React from "react";
import Header from "../parts/Header";

export default function Login() {
  return (
    <>
      <section className="container mx-auto pt-10">
        <Header onLight />
      </section>
      <section className="container mx-auto pt-10">
        <LoginForm />
      </section>
      <section className="mt-24 bg-indigo-1000 py-12">
        <Footer />
      </section>
    </>
  );
}
