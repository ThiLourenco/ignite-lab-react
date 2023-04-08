import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import { useCreateSubscriberMutation } from "../graphql/generated";

import codeMockup from '../../src/assets/code-mockup.png';

interface SubscriberFormData {
  name: string;
  email: string;
}

export function Landing(): JSX.Element {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<SubscriberFormData>({
    name: "",
    email: "",
  });
  const [createSubscriber, { loading }] = useCreateSubscriberMutation();

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: FormEvent): Promise<void> => {
    event.preventDefault();
    await createSubscriber({
      variables: formData,
    });
    navigate("/event");
  };

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center ">
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
        <div className="max-w-[640px]">
          <Logo />

          <h1 className="mt-40 text-[2.5rem] leading-tight">
            Construa uma{" "}
            <strong className="text-blue-500">aplicação completa</strong>, do
            zero, com <strong className="text-blue-500">React</strong>
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            O React é uma biblioteca JavaScript de código aberto com foco em
            criar interfaces de usuário em páginas web. É mantido pelo Facebook,
            Instagram, outras empresas e uma comunidade de desenvolvedores
            individuais. É utilizado nos sites da Netflix, Imgur, Feedly, Airbnb,
            SeatGeek, HelloSign, Walmart e outros.
          </p>
        </div>

        <div className="w-full md:max-w-[390px] p-8 bg-gray-700 border border-gray-500 rounded">
          <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>

          <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full">
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="text"
              name="name"
              placeholder="Seu nome completo"
              value={formData.name}
              onChange={handleInputChange}
            />
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="email"
              name="email"
              placeholder="Digite seu e-mail"
              value={formData.email}
              onChange={handleInputChange}
            />

            <button
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
              disabled={loading}
              type="submit"
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>
      <section>
        <img src={codeMockup} className="mt-10" alt="" />
      </section>
    </div>
  );
}
