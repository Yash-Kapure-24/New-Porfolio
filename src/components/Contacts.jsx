import React, { useState, useRef } from "react";
import CustomHook from "./CustomHook";

function Contacts() {
  const [listContacts] = useState([
    {
      title: "Phone Number",
      value: "+91 9284221465",
    },
    {
      title: "Email",
      value: "yashkapure@gmail.com",
    },
    {
      title: "Address",
      value: "Malegaon, Nashik, Maharashtra, India",
    }

  ]);
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);

  return (
    <section className='contacts Contacts' ref={scrollTab}>
      <div className='title' ref={(el) => el && divs.current.push(el)}>
        This Way to Contact Me
      </div>
      <div className='des' ref={(el) => el && divs.current.push(el)}>
        Feel free to reach out to me for any inquiries, collaborations, or
        project discussions. I'm always open to connecting with like-minded
        individuals and exploring new opportunities.
      </div>
      <div className='list' ref={(el) => el && divs.current.push(el)}>
        {listContacts.map((value, key) => (
          <div className='item' key={key}>
            <h3>{value.title}</h3>
            <div>{value.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Contacts;
