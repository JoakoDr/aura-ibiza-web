import "../styles/instagram.css";

const posts = [
  {
    image: "/images/instagram/insta1.webp",
    link: "https://www.instagram.com/auraibiza.concierge/",
    caption: "Azimut 86 THE JUNGLE"
  },
  {
    image: "/images/instagram/insta2.webp",
    link: "https://www.instagram.com/auraibiza.concierge/",
    caption: "How to plan your Ibiza Summer"
  },
  {
    image: "/images/instagram/insta3.webp",
    link: "https://www.instagram.com/auraibiza.concierge/",
    caption: "VIP nightlife & concierge"
  }
];

function InstagramFeed() {
  return (
    <section className="instagram-section">

      <div className="instagram-header">

        <p>
          FOLLOW US
        </p>

        <h2>
          Latest Instagram
          <br />
          experiences
        </h2>

        <a
          href="https://www.instagram.com/auraibiza.concierge/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @auraibiza.concierge
        </a>

      </div>

      <div className="instagram-grid">

        {posts.map((post, index) => (

          <a
            key={index}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-card"
          >

            <img
              src={post.image}
              alt={post.caption}
            />

            <div className="instagram-overlay">

              <span>
                {post.caption}
              </span>

            </div>

          </a>

        ))}

      </div>

    </section>
  );
}

export default InstagramFeed;