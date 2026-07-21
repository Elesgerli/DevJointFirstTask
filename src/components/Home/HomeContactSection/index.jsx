
const HomeContactSection = () => {
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

                <form className="homeContactForm">

                    <div className="homeContactGroup">

                        <label htmlFor="fullname">
                            Ad və Soyad *
                        </label>

                        <input
                            id="fullname"
                            type="text"
                            placeholder="Əli Məmmədov"
                            required
                        />

                    </div>

                    <div className="homeContactGroup">

                        <label htmlFor="email">
                            Elektron poçt *
                        </label>

                        <input
                            id="email"
                            type="email"
                            placeholder="example@gmail.com"
                            required
                        />

                    </div>

                    <div className="homeContactGroup">

                        <label htmlFor="message">
                            Mesajınız *
                        </label>

                        <textarea
                            id="message"
                            rows="6"
                            placeholder="Layihəniz haqqında qısa məlumat..."
                            required
                        ></textarea>

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