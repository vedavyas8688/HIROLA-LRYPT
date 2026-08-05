import ContactForm from "./ContactForm";

export default function FormFillingSection({
  bg = "cream",
  label = "Get in touch",
  heading = "Tell Us About   Your Requirement",
  intro = "Share your details and our team will connect with you to understand your solution, service, or engineering support needs.",
}) {
  return (
    <section className={`sec sec--${bg} form-fill`}>
      <style>{`
        .form-fill__wrap{
          display:grid;
          grid-template-columns:minmax(280px,.82fr) minmax(420px,1fr);
          gap:clamp(28px,5vw,72px);
          align-items:start;
        }
        .form-fill__copy{
          position:sticky;
          top:120px;
        }
        .form-fill__copy h2{
          max-width:12ch;
          margin:12px 0 0;
          font-size:clamp(2.1rem,4vw,4rem);
          line-height:1.02;
          text-transform:none;
        }
        .form-fill__copy p{
          max-width:42ch;
          margin:24px 0 0;
          color:var(--mute-cream);
          font-size:1.02rem;
          line-height:1.65;
        }
        .form-fill__panel{
          padding:0;
          border:0;
          background:transparent;
        }
        .form-fill .cform{
          gap:14px!important;
          background:var(--cream);
        }
        @media(max-width:900px){
          .form-fill__wrap{
            grid-template-columns:1fr;
          }
          .form-fill__copy{
            position:static;
          }
          .form-fill__copy h2{
            max-width:16ch;
          }
          .form-fill__panel{
            padding:0;
          }
        }
        @media(max-width:620px){
          .form-fill .row2{
            grid-template-columns:1fr!important;
          }
          .form-fill .cform__foot{
            align-items:stretch!important;
            flex-direction:column;
          }
          .form-fill .cform__foot .btn{
            width:100%;
            justify-content:center;
          }
        }
      `}</style>
      <div className="wrap form-fill__wrap">
        <div className="form-fill__copy" data-stagger="">
          {label && <span className="label" data-reveal="">{label}</span>}
          {heading && <h2 data-reveal="">{heading}</h2>}
          {intro && <p data-reveal="">{intro}</p>}
        </div>
        <div className="form-fill__panel" data-reveal="">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
