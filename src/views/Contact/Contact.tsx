import style from "./Contact.module.sass";

function Contact() {
  return (
    <div className={style.container}>
      <div className={style.text_container}>
        <div className={style.title}>Contact us</div>
        <div className={style.subtitle}>
          Reach out to us directly!
          <br></br>
          We are here to help and answer any questions you may have!
        </div>
      </div>
      <div className={style.text_container}>
        <div className={style.title}>Contact Information</div>
        <div className={style.subtitle}>
          Address: 1234 Ceramic Way, Artville, CA 90210, USA
          <br></br>
          Phone Number: +1 (555) 123-4567
          <br></br>
          Email: contact@virtualporcelaingallery.com
        </div>
      </div>
    </div>
  );
}

export default Contact;
