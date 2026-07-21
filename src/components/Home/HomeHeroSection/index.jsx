
const HomeHeroSection = () => {
  return (
    <section
      id="hero"
      className="homeHero"
      aria-labelledby="heroTitle"
    >
      <div className="container">
        <div className="homeHeroWrapper">

          <div className="homeHeroContent">

            <h1 id="heroTitle">
              Rəqəmsal Dünyada Sizin Güvənli Tərəfdaşınız
            </h1>

            <p>
              Biz biznesiniz üçün innovativ web və mobil həlləri
              müasir texnologiyalar vasitəsilə hazırlayırıq.
            </p>

            <a
              href="#contact"
              className="homeHeroBtn"
              aria-label="Əlaqə bölməsinə keç"
            >
              Bizimlə Əlaqə
            </a>

          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeHeroSection;