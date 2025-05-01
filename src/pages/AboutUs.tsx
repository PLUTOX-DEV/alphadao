import Header from "../component/Header";


const AboutUs = () => {

    const sections = [
        {
          title: "About",
          description:
            "Learn more about who we are, what drives us, and the vision behind our DAO.",
          link: "/about.html",
        },
        {
          title: "Our Mission",
          description:
            "Discover the core mission and values that guide our decentralized efforts.",
          link: "/mission",
        },
        {
          title: "Governance",
          description:
            "Understand how governance works within our DAO and how decisions are made.",
          link: "/governance",
        },
        {
          title: "Tokenomics",
          description:
            "Dive into our token model, distribution, and how it powers the DAO.",
          link: "/tokenomics",
        },
        {
          title: "Core Team",
          description:
            "Meet the contributors and community members behind our project.",
          link: "/team",
        },
        {
          title: "Get Involved",
          description:
            "Find out how you can participate, contribute, or collaborate with us.",
          link: "/get-involved",
        },
      ];
      
  return (
    <>
    <Header/>
    <section className="min-h-screen bg-gradient-to-br from-purple-900 to-black p-8 text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map(({ title, description, link }) => (
          <div
            key={title}
            className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            <p className="text-white/80 mb-4">{description}</p>
            <a
              href={link}
              className="inline-block text-purple-300 hover:text-white font-medium transition"
            >
              Read More →
            </a>
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default AboutUs;