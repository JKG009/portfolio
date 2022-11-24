import React from "react";
import styled from "styled-components";

const ContactContainer = styled.div`
  max-width: var(--max-width);
  margin: auto;
  margin-bottom: -70px;
  padding: 100px 80px;
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

  @media (max-width: 840px) {
    width: 100%;
    margin-top: 1rem;
    grid-column: 1;
    grid-row: 2;
  }

  div {
    position: relative;
    width: 100%;
    height: 50px;
    margin-bottom: 20px;

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

      @media (max-width: 1430px) {
        height: 150px;
      }
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
  position: absolute;
  bottom: -60px;
  right: 0;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid var(--title);
  border-radius: var(--border-radius);
  color: var(--title);
  transition: background-color 0.5s ease;
  outline: none;

  :hover,
  :focus {
    background-color: var(--tint);
  }

  @media (max-width: 1300px) {
    bottom: -20px;
  }

  @media (max-width: 935px) {
    bottom: 0;
  }

  @media (max-width: 840px) {
    margin-left: auto;
    margin-right: auto;
    bottom: -10px;
    left: 0;
  }
`;

const Contact = () => {
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
            <input type="text" id="email" autocomplete="off" placeholder=" " />
            <label htmlFor="email">Name</label>
          </div>
          <div>
            <input type="text" id="email" autocomplete="off" placeholder=" " />
            <label htmlFor="email">Email</label>
          </div>
          <div>
            <textarea
              type="text"
              id="message"
              autocomplete="off"
              placeholder=" "
            />
            <label htmlFor="message">Message</label>
          </div>
          <ContactSubmit>Send</ContactSubmit>
        </ContactFormContainer>
      </div>
    </ContactContainer>
  );
};

export default Contact;
