import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://formsubmit.co/ajax/33ac819107be1861fe6334c5bd25287a", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: email,
        message: message,
      }),
    })
      .then((response) => response.json())
      .then(
        setEmail(""),
        setMessage(""),
        toast.success("Votre message à bien été envoyé.", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      )
      .catch((error) =>
        toast.error(
          { error },
          {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        )
      );
  };

  return (
    <div className="flex flex-row m-48 justify-center" id="Contact">
      <div className="bg-white mt-32 rounded-lg shadow-2xl shadow-current">
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <h1 className="text-4xl text-black text my-5 font-bold">Contact</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col m-10 w-60 sm:w-96"
        >
          <label name="email" className="text-black flex flex-col">
            Email
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Votre email..."
              required
              onChange={(e) => setEmail(e.target.value)}
              className="m-5 p-2 border-2 border-black rounded-lg focus:ring-2 ring-orange-400 ring-offset-4"
            />
          </label>
          <label name="message" className="text-black flex flex-col">
            Message
            <textarea
              type="text"
              name="message"
              placeholder="Votre message..."
              value={message}
              required
              onChange={(e) => setMessage(e.target.value)}
              className="h-48 m-5 p-2 border-2 border-black rounded-lg focus:ring-2 ring-orange-400 ring-offset-4"
            />
          </label>
          <input
            type="submit"
            value="Envoyer"
            className="w-36 m-5 border-2 border-black rounded-lg bg-orange-300 hover:bg-orange-400 hover:scale-110 transition duration-500 hover:border-black hover:cursor-pointer"
          />
          <input type="hidden" name="_captcha" value="false" />
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
