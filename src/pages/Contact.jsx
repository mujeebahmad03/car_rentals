import { HeroPages } from "@/components";
import {
  IconMail,
  IconMailOpened,
  IconPhone,
  IconLocation,
} from "@tabler/icons-react";

function Contact() {
  return (
    <>
      <section className="contact-page">
        <HeroPages name="Contact" />
        <div className="container">
          <div className="contact-div">
            <div className="contact-div__text">
              <h2>Need additional information?</h2>
              <p>
                A multifaceted professional skilled in multiple fields of
                research, development as well as a learning specialist. Over 15
                years of experience.
              </p>
              <a href="/">
                <IconPhone /> &nbsp; (123) 456-7869
              </a>
              <a href="/">
                <IconMail /> &nbsp; carrental@carmail.com
              </a>
              <a href="/">
                <IconLocation />
                &nbsp; Belgrade, Serbia
              </a>
            </div>
            <div className="contact-div__form">
              <form>
                <label>
                  Full Name <b>*</b>
                </label>
                <input type="text" placeholder='E.g: "Joe Shmoe"' />

                <label>
                  Email <b>*</b>
                </label>
                <input type="email" placeholder="youremail@example.com" />

                <label>
                  Tell us about it <b>*</b>
                </label>
                <textarea placeholder="Write Here.." />

                <button type="submit">
                  <IconMailOpened />
                  &nbsp; Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="book-banner">
          <div className="book-banner__overlay" />
          <div className="container">
            <div className="text-content">
              <h2>Book a car by getting in touch with us</h2>
              <span>
                <IconPhone width={40} height={40} />
                <h3>(123) 456-7869</h3>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
