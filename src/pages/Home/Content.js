import ContentData from "../../pages/Home/ContentData";
import Map from "../../assets/image/map.png";
import Dashboard from "../../assets/image/dashboard.png";

function Content() {
  return (
    <div>
      <section className="content" id="content">
        <h1> Fitur </h1>
        <div className="content-data">
          <ContentData
            image={Map}
            heading="Map"
            text="Fitur ini menampilkan data demografi dan kependudukan Kabupaten Tegal secara umum dalam konteks spasial yaitu melalui visualisasi map dengan keunggulan 3D sehingga lebih menarik dan mudah dimengerti"
          />
          <ContentData
            image={Dashboard}
            heading="Dashboard"
            text="Fitur ini menampilkan data demografi dan kependudukan Kabupaten Tegal secara umum dalam konteks spasial yaitu melalui visualisasi map dengan keunggulan 3D sehingga lebih menarik dan mudah dimengerti"
          />
        </div>
      </section>
    </div>
  );
}

export default Content;
