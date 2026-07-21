

const HomeGallerySection = () => {
  const galleryData = [
    {
      id: 1,
      image: "/src/assets/images1.jpg",
      title: "Web Development",
    },
    {
      id: 2,
      image: "/src/assets/images2.jpg",
      title: "Software Engineering",
    },
    {
      id: 3,
      image: "/src/assets/images3.jpg",
      title: "UI / UX Design",
    },
       {
      id: 2,
      image: "/src/assets/images2.jpg",
      title: "Software Engineering",
    },
    {
      id: 3,
      image: "/src/assets/images3.jpg",
      title: "UI / UX Design",
    },
       {
      id: 2,
      image: "/src/assets/images2.jpg",
      title: "Software Engineering",
    },
    {
      id: 3,
      image: "/src/assets/images3.jpg",
      title: "UI / UX Design",
    },
       {
      id: 2,
      image: "/src/assets/images2.jpg",
      title: "Software Engineering",
    },
    {
      id: 3,
      image: "/src/assets/images3.jpg",
      title: "UI / UX Design",
    },
       {
      id: 2,
      image: "/src/assets/images2.jpg",
      title: "Software Engineering",
    },
    {
      id: 3,
      image: "/src/assets/images3.jpg",
      title: "UI / UX Design",
    },
       {
      id: 2,
      image: "/src/assets/images2.jpg",
      title: "Software Engineering",
    },
    {
      id: 3,
      image: "/src/assets/images3.jpg",
      title: "UI / UX Design",
    },
       {
      id: 2,
      image: "/src/assets/images2.jpg",
      title: "Software Engineering",
    },
    {
      id: 3,
      image: "/src/assets/images3.jpg",
      title: "UI / UX Design",
    },
  ];
  return (
    <section
      id="gallery"
      className="homeGallery"
      aria-labelledby="galleryTitle"
    >
      <div className="container">

        <h2
          id="galleryTitle"
          className="homeGalleryTitle"
        >
          Layihələrimiz (Qalereya)
        </h2>

        <div className="homeGalleryWrapper">

          {galleryData.map((item) => (

            <article
              className="homeGalleryCard"
              key={item.id}
            >

              <img
                src={item.image}
                alt={item.title}
              />

              <div className="homeGalleryOverlay">

                <h3>
                  {item.title}
                </h3>

              </div>

            </article>

          ))}

        </div>

      </div>
    </section>
  );
};

export default HomeGallerySection;