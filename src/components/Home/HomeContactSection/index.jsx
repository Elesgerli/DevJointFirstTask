import { useState } from "react";
import toast from "react-hot-toast";

const HomeContactSection = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const emailRegex =
    /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.fullname.trim()) {
      newErrors.fullname = "Ad və soyad tələb olunur.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Elektron poçt tələb olunur.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Düzgün email daxil edin.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Mesaj boş buraxıla bilməz.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      toast.success("Mesaj uğurla göndərildi.");

      setFormData({
        fullname: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <section
      id="contact"
      className="homeContact"
      aria-labelledby="contactTitle"
    >
      <div className="container">
        <h2
          id="contactTitle"
          className="homeContactTitle"
        >
          Bizimlə Əlaqə
        </h2>

        <form
          className="homeContactForm"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="homeContactGroup">
            <label htmlFor="fullname">
              Ad və Soyad *
            </label>

            <input
              id="fullname"
              name="fullname"
              type="text"
              placeholder="Əli Məmmədov"
              value={formData.fullname}
              onChange={handleChange}
            />

            {errors.fullname && (
              <span className="error">
                {errors.fullname}
              </span>
            )}
          </div>

          <div className="homeContactGroup">
            <label htmlFor="email">
              Elektron poçt *
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="example@gmail.com"
              value={formData.email}
              onChange={handleChange}
            />

            {errors.email && (
              <span className="error">
                {errors.email}
              </span>
            )}
          </div>

          <div className="homeContactGroup">
            <label htmlFor="message">
              Mesajınız *
            </label>

            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Layihəniz haqqında qısa məlumat..."
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            {errors.message && (
              <span className="error">
                {errors.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="homeContactButton"
          >
            Göndər
          </button>
        </form>
      </div>
    </section>
  );
};

export default HomeContactSection;