import "../../../assets/css/modals/companyModal.css"


const aboutUs = [
    {
        title: "About",
        caption: "Discover our vision, mission and team"
    },
    {
        title: "Careers",
        caption: "Build Web3 with us"
    },
    {
        title: "News",
        caption: "Company and product items"
    },
    {
        title: "Support",
        caption: "Get help 24/7"
    },
    {
        title: "Security",
        caption: "Learn about our industry-leading protection"
    },
    {
        title: "Partners",
        caption: "Explore our world-class portfolio of partners"
    }
]
  
  export default function CompanyModal({ setCompanyMo2 }) {
    return (
      <div
        className="CMContainer"
        onMouseOver={() => setCompanyMo2(true)}
        onMouseLeave={() => setCompanyMo2(false)}
      >
        <h1 className="about">About us</h1>
          <ul className="flex items-start gap-10">
          { aboutUs.map((item, index) => {
          return (
                    <li key={index}>
                      <h3>{item.title}</h3>
                      <p>{item.caption}</p>
                    </li>
          );
        })}
          </ul>
      </div>
    );
  }