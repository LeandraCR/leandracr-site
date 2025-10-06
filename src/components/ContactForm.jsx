// src/components/ContactForm.jsx
import React from 'react';

const ContactForm = () => {
  return (
    <section className="bg-[#040024] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-12">
          FALE <span className="text-[#9100fe]">COMIGO.</span>
        </h2>

        <form 
          action="https://formsubmit.co/lee.ramss15@gmail.com" 
          method="POST"
          className="flex flex-col gap-6"
        >
          <input 
            type="text" 
            name="nome" 
            placeholder="Seu nome completo:" 
            required
            className="w-full bg-[#0a062e] border-2 border-transparent focus:border-[#9100fe] p-4 rounded-xl text-white outline-none transition-all duration-300"
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Seu e-mail:" 
            required
            className="w-full bg-[#0a062e] border-2 border-transparent focus:border-[#9100fe] p-4 rounded-xl text-white outline-none transition-all duration-300"
          />
          <input 
            type="text" 
            name="celular" 
            placeholder="Seu celular:"
            className="w-full bg-[#0a062e] border-2 border-transparent focus:border-[#9100fe] p-4 rounded-xl text-white outline-none transition-all duration-300"
          />
          <textarea 
            name="mensagem" 
            placeholder="Sua mensagem" 
            required
            className="w-full bg-[#0a062e] border-2 border-transparent focus:border-[#9100fe] p-4 rounded-xl text-white outline-none transition-all duration-300 h-40 resize-none"
          ></textarea>

          {/* Campos ocultos do FormSubmit */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://leandracr.github.io/leandracr-site/obrigado.html" />
          
          <div className="text-center">
            <input 
              type="submit" 
              value="ENVIAR"
              className="py-3 px-10 bg-[#9100fe] text-white text-lg font-semibold rounded-full hover:scale-105 hover:shadow-lg hover:shadow-[#9100fe]/40 transition-all duration-300 cursor-pointer"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;