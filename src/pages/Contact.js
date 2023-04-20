import React from "react";
import "bulma/css/bulma.css";

const Contact = () => {
  return (
    <main>
      <div>
        Contact
        <input
          class="input is-primary"
          type="text"
          placeholder="Primary input"
        ></input>
        <textarea
          class="textarea is-primary"
          placeholder="Primary textarea"
        ></textarea>
        <div class="control">
          <button class="button is-primary">Submit</button>
        </div>
      </div>
    </main>
  );
};

export default Contact;
