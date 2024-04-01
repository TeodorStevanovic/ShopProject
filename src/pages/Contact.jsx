import React from 'react';

const ContactPage = () => {
  return (
    <div className=" w-full min-h-screen flex flex-col flex-wrap justify-center items-center mt-2 text-2xl  py-2 text-center font-bodyFont">
      <h1 className=" mt-7 mb-7 bg-black text-white">Contact</h1>

        <p>Contact Information:</p>

          <iframe
            className=" w-full h-80 grow"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d23132.07734193301!2d21.361499156117514!3d43.554262010630936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2srs!4v1711815494534!5m2!1sen!2srs"
          ></iframe>

          <p>Adress: Kosovska 45 37000 Krusevac</p>
          <p>Mobile: 064/119-49-50</p>
          <p>Fax: 037/443-932</p>
          <p>E-mail: de-cart@gmail.com</p>
        </div>
  );
};

export default ContactPage;
