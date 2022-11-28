import React, { useState, useEffect } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";

const ContactContainer = styled.div`
  max-width: var(--max-width);
  margin: auto;
  padding: 160px 80px;
  height: 625px;

  @media (max-width: 1024px) {
    height: 600px;
  }

  @media (max-width: 840px) {
    height: 800px;
  }

  @media (max-width: 600px) {
    height: 850px;
  }

  h2 {
    color: var(--darker-white);
    font-size: clamp(26px, 5vw, var(--fs-heading));
    margin-bottom: 30px;

    :after {
      content: "";
      display: block;
      position: relative;
      top: -20px;
      left: 180px;
      width: 350px;
      height: 3px;
      margin-left: 20px;
      background-color: var(--lightest-navy);
    }
  }

  > div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 2;

    @media (max-width: 840px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 350px;
    }
  }

  @media (max-width: 1024px) {
    padding: 60px 0;
    h2 {
      :after {
        width: calc(100vw - 50vw);
      }
    }
  }

  @media (max-width: 600px) {
    h2 {
      :after {
        width: calc(100vw - 60vw);
        margin-left: -20px;
      }
    }
  }

  @media (max-width: 420px) {
    h2 {
      :after {
        margin-left: -40px;
      }
    }
  }
`;

const ContactDetailsText = styled.div`
  grid-column: 1;
  padding: 1rem 2rem;

  @media (max-width: 840px) {
    grid-row: 1;
    padding: 0.5rem 1rem;
    margin-bottom: 10px;
  }

  @media (max-width: 375px) {
    padding: 0;
  }

  h3 {
    color: var(--title);
    font-family: var(--font-mono);
    font-size: var(--fs-xl);
    margin-bottom: 1rem;
  }

  p {
    color: var(--grey);
    font-size: var(--fs-md);
    line-height: 2;
  }

  span {
    color: var(--darkest-white);
    font-size: var(--fs-lg);
    font-weight: 700;
  }
`;

const ContactFormContainer = styled.form`
  position: relative;
  grid-column: 2;
  text-align: right;

  @media (max-width: 840px) {
    width: 100%;
    margin-top: 1rem;
    grid-column: 1;
    grid-row: 2;
    text-align: center;
  }

  div {
    position: relative;
    width: 100%;
    height: 50px;
    margin-bottom: 30px;

    > input,
    textarea {
      width: 100%;
      height: 100%;
      border: 2px solid var(--darker-white);
      border-radius: var(--border-radius);
      font-size: inherit;
      color: var(--darker-white);
      outline: none;
      padding: 1.25rem;
      background: none;

      :hover,
      :focus {
        border-color: var(--title);
      }
    }

    > textarea {
      height: fit-content;
      resize: none;
    }

    > label {
      position: absolute;
      left: 1rem;
      top: 0.8rem;
      padding: 0 0.6rem;
      font-size: var(--fs-sm);
      color: var(--darkest-white);
      transition: var(--transition-ease-faster);
      cursor: text;
      background-color: var(--navy);
    }

    input:focus ~ label,
    textarea:focus ~ label,
    input:not(:placeholder-shown):not(:focus) ~ label,
    textarea:not(:placeholder-shown):not(:focus) ~ label {
      top: -0.5rem;
      font-size: var(--fs-xxs);
      left: 0.8rem;
    }
  }
`;

const ContactSubmit = styled.button`
  font-family: var(--font-mono);
  font-size: var(--fs-md);
  width: 200px;
  height: 40px;
  margin-top: 20px;
  cursor: pointer;
  border: 1px solid var(--title);
  border-radius: var(--border-radius);
  color: ${({ formSent }) => (formSent ? "var(--white)" : "var(--title)")};
  transition: background-color 0.5s ease;
  outline: none;
  background-color: ${({ formSent, emailJsErr }) =>
    emailJsErr ? "var(--red)" : formSent ? "var(--green)" : "transparent"};

  :hover:enabled,
  :focus:enabled {
    background-color: var(--tint);
  }

  :disabled {
    cursor: default;
  }
`;

const ContactErrorMessage = styled.p`
  color: var(--red);
  text-align: right;
  position: absolute;
  right: 0;
  top: -25px;
`;

const ContactHoneypot = styled.div`
  display: none;
`;

const Contact = () => {
  const serviceID = process.env.REACT_APP_SERVICE_ID;
  const templateID = process.env.REACT_APP_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;

  const [form, setForm] = useState({
    name: "",
    nameErr: null,
    email: "",
    emailErr: null,
    message: "",
    messageErr: null,
    formSent: false,
    loading: false,
    emailJsErr: false,
    number: "",
  });
  const [disableBtn, setDisableBtn] = useState(true);

  const {
    name,
    email,
    message,
    nameErr,
    emailErr,
    messageErr,
    formSent,
    loading,
    emailJsErr,
    number,
  } = form;

  const btnText = () => {
    if (emailJsErr) {
      return "Error";
    }
    if (loading) {
      return "Please Wait";
    }
    if (formSent) {
      return "Sent";
    }
    return "Send";
  };

  useEffect(() => {
    if (
      nameErr === false &&
      emailErr === false &&
      messageErr === false &&
      !formSent
    ) {
      setDisableBtn(false);
    } else {
      setDisableBtn(true);
    }
  }, [nameErr, emailErr, messageErr, formSent]);

  const handleInput = (inputId, value) => {
    setForm((state) => ({ ...state, [inputId]: value }));
    if (inputId === "name" || "message") {
      value.split(" ").join("") === ""
        ? setForm((state) => ({
            ...state,
            [`${inputId}Err`]: `Please include a ${inputId}.`,
          }))
        : setForm((state) => ({
            ...state,
            [`${inputId}Err`]: false,
          }));
    }
    if (inputId === "email") {
      /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(value) !== true
        ? setForm((state) => ({
            ...state,
            emailErr: "Please include a valid email.",
          }))
        : setForm((state) => ({
            ...state,
            emailErr: false,
          }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisableBtn(true);

    if (number === "") {
      setForm((state) => ({
        ...state,
        loading: true,
      }));
      emailjs.send(serviceID, templateID, form, publicKey).then(
        () => {
          setForm((state) => ({
            ...state,
            name: "",
            email: "",
            message: "",
            formSent: true,
            loading: false,
          }));
          setDisableBtn(true);
        },
        () => {
          setForm((state) => ({
            ...state,
            formSent: true,
            loading: false,
            emailJsErr: true,
          }));
          alert(
            "Message failed to send. Please message me directly via email and I will get back to you! Sorry for the inconvenience."
          );
        }
      );
    } else {
      setForm((state) => ({
        ...state,
        loading: true,
      }));
      setTimeout(() => {
        setForm((state) => ({
          ...state,
          name: "",
          email: "",
          message: "",
          number: "",
          formSent: true,
          loading: false,
        }));
      }, 3000);
    }
  };

  return (
    <ContactContainer>
      <h2>Contact Me</h2>
      <div>
        <ContactDetailsText>
          <h3>I am currently looking for new opportunities!</h3>
          <p>
            Whether it is a job position, an interest in collaborating on a
            project, questions about me or one of my projects, or just want to
            say hi.
          </p>
          <p>
            Don't hesitiate to
            <span> Get in touch!</span>
          </p>
          <p>Drop me a message and I'll get back to you as soon as I can.</p>
        </ContactDetailsText>
        <ContactFormContainer>
          <div>
            {nameErr !== "" && (
              <ContactErrorMessage>{nameErr}</ContactErrorMessage>
            )}
            <input
              type="text"
              id="name"
              value={name}
              autoComplete="off"
              placeholder=" "
              onChange={(e) => handleInput(e.target.id, e.target.value)}
              style={nameErr ? { borderColor: "var(--red)" } : null}
            />
            <label htmlFor="name">Name</label>
          </div>
          <ContactHoneypot>
            <input
              type="tel"
              id="number"
              value={number}
              autoComplete="off"
              placeholder=" "
              onChange={(e) => handleInput(e.target.id, e.target.value)}
            />
            <label htmlFor="number">Phone Number</label>
          </ContactHoneypot>
          <div>
            {nameErr !== "" && (
              <ContactErrorMessage>{emailErr}</ContactErrorMessage>
            )}
            <input
              type="text"
              id="email"
              value={email}
              autoComplete="off"
              placeholder=" "
              onChange={(e) => handleInput(e.target.id, e.target.value)}
              style={emailErr ? { borderColor: "var(--red)" } : null}
            />
            <label htmlFor="email">Email</label>
          </div>
          <div>
            <ContactErrorMessage>{messageErr}</ContactErrorMessage>
            <textarea
              type="text"
              id="message"
              value={message}
              autoComplete="off"
              placeholder=" "
              onChange={(e) => handleInput(e.target.id, e.target.value)}
              style={messageErr ? { borderColor: "var(--red)" } : null}
            />
            <label htmlFor="message">Message</label>
          </div>
          <ContactSubmit
            formSent={formSent}
            emailJsErr={emailJsErr}
            disabled={disableBtn}
            onClick={(e) => handleSubmit(e)}
          >
            {btnText()}
          </ContactSubmit>
        </ContactFormContainer>
      </div>
    </ContactContainer>
  );
};

export default Contact;
