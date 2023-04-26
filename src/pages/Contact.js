// import React, { useState } from "react";
// import "bulma/css/bulma.css";


// const Contact = () => {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const handleEmailChange = (e) => setEmail(e.target.value);
//   const handleMessageChange = (e) => setMessage(e.target.value);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     SendEmail(email, message);
//     setEmail("");
//     setMessage("");
//   };

//   return (
//     <main>
//       <div>
//         <h2>
//         Send me an email via Nodemailer!
//         </h2>
//         <form onSubmit={handleSubmit}>
//         <input
//           class="input is-primary"
//           type="text"
//           placeholder="Enter your email"
//           value={email}
//           onChange={handleEmailChange}
//         ></input>
//         <textarea
//           class="textarea is-primary"
//           placeholder="Message"
//           value={message}
//           onChange={handleMessageChange}
//         ></textarea>
//         <div class="control">
//           <button class="button is-primary">Submit</button>
//         </div>
//       </form>
//       </div>
//     </main>
//   );
// };

// export default Contact;
