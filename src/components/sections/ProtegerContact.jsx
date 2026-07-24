import ContactForm from "./ContactForm";

export default function ProtegerContact() {
  return (
    <section className="proteger-contact">
      <style>{`
        .proteger-contact{display:flex;align-items:center;min-height:calc(100vh - 76px);padding:clamp(32px,4vw,54px) 0;background:var(--cream-2);color:var(--on-cream)}
        .proteger-contact__wrap{width:min(1320px,calc(100% - 80px));margin-inline:auto}
        .proteger-contact__head{margin-bottom:clamp(24px,3vw,34px)}
        .proteger-contact__eyebrow{display:block;margin-bottom:12px;font-size:.78rem;font-weight:700;letter-spacing:.13em;text-transform:uppercase}
        .proteger-contact h2{max-width:720px;margin:0;font-size:clamp(2rem,3.3vw,3.45rem);line-height:1.08;letter-spacing:-.04em;text-transform:none}
        .proteger-contact__grid{display:grid;grid-template-columns:minmax(0,.92fr) minmax(480px,1.08fr);gap:clamp(44px,7vw,92px);align-items:start}
        .proteger-contact__left{min-width:0}.proteger-contact__image{display:grid;grid-template-rows:minmax(0,1fr) auto;min-height:330px;max-height:360px;padding:0;overflow:hidden;border-radius:18px;background:var(--black)}
        .proteger-contact__image img{display:block;width:100%;height:100%;min-height:0;object-fit:cover}
        .proteger-contact__image-copy{padding:18px 20px;color:var(--white)}.proteger-contact__image-copy strong{display:block;margin-bottom:7px;font-size:1.18rem}.proteger-contact__image-copy span{color:var(--on-dark);font-size:.9rem;line-height:1.45}
        .proteger-contact .cform{gap:8px!important;padding:clamp(20px,2.4vw,30px);border:1px solid var(--line-cream);background:var(--cream)}
        .proteger-contact .cform .row2{gap:12px!important}.proteger-contact .f2{margin-bottom:7px}.proteger-contact .f2 label{margin-bottom:5px}.proteger-contact .f2 input,.proteger-contact .f2 select,.proteger-contact .f2 textarea{padding:10px 12px}.proteger-contact .f2 textarea{min-height:88px}.proteger-contact .cform__foot{margin-top:2px!important}
        @media(max-width:980px){.proteger-contact{min-height:0;padding:72px 0}.proteger-contact__wrap{width:calc(100% - 46px)}.proteger-contact__grid{grid-template-columns:1fr}.proteger-contact__image{min-height:350px;max-height:none}.proteger-contact .cform{width:100%}}
        @media(max-width:620px){.proteger-contact__wrap{width:calc(100% - 30px)}.proteger-contact__image{min-height:330px}.proteger-contact__image-copy{left:24px;right:24px;bottom:24px}.proteger-contact .cform{padding:24px 18px}.proteger-contact .row2{grid-template-columns:1fr!important}.proteger-contact .cform__foot{align-items:stretch!important;flex-direction:column}.proteger-contact .btn{width:100%}}
      `}</style>
      <div className="proteger-contact__wrap">
        <div className="proteger-contact__grid">
          <div className="proteger-contact__left">
            <div className="proteger-contact__head">
              <span className="proteger-contact__eyebrow">Contact Us</span>
              <h2>Let's Build More Reliable Operations Together</h2>
            </div>
            <div className="proteger-contact__image">
              <img src="/assets/img/proteger/solutioncard1.webp" alt="Proteger traceability solution" />
              <div className="proteger-contact__image-copy"><strong>Ready to modernise your operations?</strong><span>Tell our experts about your shopfloor goals and current challenges.</span></div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
