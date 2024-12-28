import { useState } from "react";

const Contact = () => {
  const [fvalues, setfValues] = useState("");
  const [lvalues, setlValues] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className=" h-[55vh] flex items-center justify-center">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="name">
          <label for="fname" className="mr-3 text-xl">
            First name:
          </label>
          <br />
          <input
            type="text"
            id="fname"
            name="fname"
            value={fvalues}
            onChange={(e) => setfValues(e.target.value)}
            placeholder="First Name"
            className="border-2 border-gray-300 outline-none px-2 py-1"
          />
          <br />
          <label for="lname" className="mr-3 text-xl">
            Last name:
          </label>
          <br />
          <input
            type="text"
            id="lname"
            onChange={(e) => setlValues(e.target.value)}
            name="lname"
            value={lvalues}
            placeholder="Last Name"
            className="border-2 border-gray-300 outline-none px-2 py-1"
          />
        </div>

        <div className="email mt-2">
          <label for="email" className="mr-3 text-xl">
            E-mail :
          </label>{" "}
          <br />
          <input
            type="email"
            id="email"
            className="border-2 border-gray-300 outline-none px-2 py-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>

        <div className="message mt-2 flex flex-col">
          <label htmlFor="textArea">Message :</label>
          <textarea
            name="text-area"
            id="textArea"
            className="border-2 border-gray-300 outline-none p-2 capitalize"
          />
        </div>
        <div className="submit mt-2 text-center">
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
