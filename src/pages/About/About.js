import NavigationBar from "../../components/NavigationBar";
import Footer from "../../components/Footer";
import "./About.css";

const About = () => {
  return (
    <div>
      <NavigationBar />
      <section className="about" id="about">
        <div className="about-container">
          <h1>Tentang Tegal Spatial</h1>
          <p>
            <b>WebGIS Tegal Spatial</b> dirancang sebagai platform untuk
            menyediakan informasi demografi dan kependudukan di Kabupaten Tegal
            secara spasial. Data kependudukan sangat penting untuk perencanaan
            pembangunan berkelanjutan, termasuk dalam bidang pendidikan,
            kesehatan, dan tenaga kerja. Informasi demografi dan kependudukan
            masih terbatas pada format tabular sehingga belum dapat dilakukan
            analisis keruangan. Aplikasi ini memudahkan dalam melakukan analisis
            keruangan menggunakan Sistem Informasi Geografis (SIG). Melalui
            penelitian ini, diharapkan dapat meningkatkan pemahaman dan
            komunikasi visual pembaca mengenai informasi kependudukan di
            Kabupaten Tegal.
          </p>
          <p>
            Data demografi dan kependudukan yang digunakan dalam penelitian ini
            bersumber dari{" "}
            <b>Dinas Kependudukan dan Pencatatan Sipil per 31 Desember 2023</b>.
            Data tersebut antara lain data geografis, kependudukan umum, jenis
            kelamin, status perkawinan, kelompok usia, pertumbuhan penduduk,
            agama, usia sekolah, tingkat Pendidikan, golongan darah, dan
            pekerjaan. Data jumlah titik fasilitas Pendidikan dan kesehatan
            Kabupaten Tegal bersumber dari publikasi{" "}
            <b>Badan Pusat Statistik</b> yaitu Kabupaten Tegal dalam Angka Tahun
            2023. Data spasial batas administrasi wilayah kecamatan Kabupaten
            Tegal dan data titik koordinat titik fasilitas bersumber dari
            inageoportal milik Badan Informasi Geospasial tahun 2023.
          </p>
          <p>
            WebGIS dibangun menggunakan framework <b>React JS</b> dan library{" "}
            <b>Mapbox GL JS</b> dengan tambahan dari Google Looker Studio
            sebagai pembuat dashboard.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
