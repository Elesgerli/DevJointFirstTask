
const HomeAboutSection = () => {
  return (
    <section
      id="about"
      className="homeAbout"
      aria-labelledby="aboutTitle"
    >
      <div className="container">
        <h2 id="aboutTitle" className="homeAboutTitle">
          Haqqımızda
        </h2>
        <div className="homeAboutWrapper">
          <div className="homeAboutLeft">
            <h3>
              Niyə bizi seçməlisiniz?
            </h3>
            <p>
              10 ildən artıq təcrübəmizlə layihələrinizi
              vaxtında və yüksək keyfiyyətlə təhvil veririk.
              Sürət, təhlükəsizlik və əlçatanlıq bizim əsas
              prinsiplərimizdir.
            </p>

            <aside className="homeAboutAlert">
              <h4>
                Texniki Dəstək Linkimiz:
              </h4>
              <a
                href="https://novatech-solutions.az"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://novatech-solutions.az/super-long-url-tracking-token-id-9876543210qwertyuiopasdfghjklzxcvbnm1234567890
              </a>
            </aside>

          </div>
          <div className="homeAboutRight">

            <article className="homeAboutCard">
              <h3>150+</h3>
              <p>Uğurlu Layihə</p>
            </article>

            <article className="homeAboutCard">
              <h3>99%</h3>
              <p>Müştəri Məmnuniyyəti</p>
            </article>

          </div>

        </div>

      </div>
    </section>
  );
};

export default HomeAboutSection;