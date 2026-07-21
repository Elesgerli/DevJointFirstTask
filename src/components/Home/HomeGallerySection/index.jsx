import image1 from "../assets/images1.jpg";
import image2 from "../assets/images2.jpg";
import image3 from "../assets/images3.jpg";

const HomeGallerySection = () => {
 const galleryData = [
    { id: 1, image: image1, title: "Web Development" },
    { id: 2, image: image2, title: "Software Engineering" },
    { id: 3, image: image3, title: "UI / UX Design" },
    { id: 4, image: image2, title: "Software Engineering" },
    { id: 5, image: image3, title: "UI / UX Design" },
    { id: 6, image: image2, title: "Software Engineering" },
    { id: 7, image: image3, title: "UI / UX Design" },
    { id: 8, image: image2, title: "Software Engineering" },
    { id: 9, image: image3, title: "UI / UX Design" },
    { id: 10, image: image2, title: "Software Engineering" },
    { id: 11, image: image3, title: "UI / UX Design" },
    { id: 12, image: image2, title: "Software Engineering" },
    { id: 13, image: image3, title: "UI / UX Design" },
    { id: 14, image: image2, title: "Software Engineering" },
    { id: 15, image: image3, title: "UI / UX Design" },
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