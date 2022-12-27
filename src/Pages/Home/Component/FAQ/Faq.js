import React from "react";
import Accordion from "../../../../Components/Accordion/Accordion";
import Email from "../../../../Components/email_form/Email";
import "./faq.css";

const Faq = () => {
  return (
    <div className="faqs">
      <h1>Frequently Asked Questions</h1>
      <Accordion/>
      <Email/>
    </div>
  );
};

export default Faq;
