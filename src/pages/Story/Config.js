const config = {
  accessToken:
    "pk.eyJ1IjoiYW1hbGlhYXJpZmFoaCIsImEiOiJjbDNsOTlrcXYwaWQxM2lxYWt2ZmU4eGUyIn0.n3MrJgj9gN8li-IiQJOluA",
  theme: "light",
  use3dTerrain: false,
  auto: false,
  chapters: [
    {
      id: "slug-style-id",
      alignment: "left",
      hidden: false,
      style: "mapbox://styles/amaliaarifahh/clt6treci002a01pg5wd3e0wr",
      description: (
        <div
          style={{
            padding: "1px",
            margin: "0px",
            fontSize: "14px",
            color: "#27374D",
          }}
        >
          <b>Tegal Spatial</b> merupakan WebGIS interaktif yang menyajikan data
          demografi dan kependudukan Kabupaten Tegal dengan visualisasi 3D.
          Aplikasi ini menggunakan teknologi Sistem Informasi Geografis (SIG)
          untuk menampilkan data dalam konteks spasial. Dengan adanya aplikasi
          ini, diharapkan dapat menambah pengetahuan dan pengalaman baru bagi
          pembaca dalam memahami informasi demografi di Kabupaten Tegal.
        </div>
      ),
      location: {
        center: [108.97, -7.05],
        zoom: 9.5,
        pitch: 50,
        bearing: 6,
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      onChapterEnter: [
        {
          layer: "demografi-layer",
          opacity: 0,
          duration: 5000,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "second-identifier",
      alignment: "right",
      hidden: false,
      style: "mapbox://styles/amaliaarifahh/clxvs8k5k00af01pf5fk8fky8",
      title: (
        <div
          style={{
            padding: "1px",
            margin: "0px",
            color: "#27374D",
            textAlign: "left",
            fontSize: "10px",
          }}
        >
          <h2>Profil Kabupaten Tegal</h2>
        </div>
      ),
      description: (
        <div
          style={{
            padding: "1px",
            margin: "0px",
            fontSize: "14px",
            color: "#27374D",
          }}
        >
          <b>Kabupaten Tegal</b> termasuk salah satu wilayah di Jawa Tengah dan
          memiliki luas sebesar <b>983,9 km2</b> dengan <b>18 kecamatan</b>.
          Berdasarkan geografinya, Kabupaten Tegal memiliki daerah pantai di
          bagian utara, daerah dataran rendah yang meliputi sebagian besar
          wilayah, dan memiliki daerah dataran tinggi di bagian selatan dekat
          Gunung Slamet. Profil kependudukan di Kabupaten Tegal beragam di
          setiap kecamatan karena perbedaan letak dan geografinya.
        </div>
      ),
      location: {
        center: [109.39, -7.0],
        zoom: 9.4,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "third-identifier",
      alignment: "left",
      hidden: false,
      style: "mapbox://styles/amaliaarifahh/clxvs5r8600xk01qr89p808dt",
      title: (
        <div
          style={{
            padding: "1px",
            margin: "0px",
            color: "#27374D",
            textAlign: "left",
            fontSize: "10px",
          }}
        >
          <h2>Gambaran Umum Kependudukan Kabupaten Tegal</h2>
        </div>
      ),
      description: (
        <div
          style={{
            padding: "1px",
            margin: "0px",
            fontSize: "14px",
            color: "#27374D",
          }}
        >
          Berdasarkan data dari Dinas Kependudukan dan Pencatatan Sipil per 31
          Desember 2023, penduduk Kabupaten Tegal sebanyak <b>1.716.637 jiwa</b>{" "}
          dengan kepadatan penduduk sebesar <b>1.745 jiwa/km2</b>.
        </div>
      ),
      location: {
        center: [108.98, -7.02],
        zoom: 9.3,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "fourth-chapter",
      alignment: "fully",
      hidden: false,
      style: "mapbox://styles/amaliaarifahh/clw3im14102kh01qp24y8594p",
      title: (
        <div
          style={{
            padding: "1px",
            margin: "0px",
            color: "#27374D",
            textAlign: "left",
            fontSize: "10px",
          }}
        >
          <h2>Fitur Tegal Spatial</h2>
        </div>
      ),
      description: (
        <div
          style={{
            padding: "1px",
            margin: "0px",
            fontSize: "14px",
            color: "#27374D",
          }}
        >
          <b> Tegal Spatial </b> memiliki fitur utama <b>Visualisasi 3D</b> yang
          menampilkan data kependudukan dan demografi. Selain itu, WebGIS ini
          mempunyai fitur tambahan berupa{" "}
          <b>
            <i>Clustering</i>
          </b>
          , yaitu analisis persebaran titik fasilitas Pendidikan dan Kesehatan
          di Kabupaten Tegal. WebGIS juga dilengkapi dengan fitur{" "}
          <b>
            <i>Dashboard</i>
          </b>{" "}
          untuk menyajikan ringkasan data kependudukan umum dalam bentuk
          diagram. Setiap fitur dapat diakses melalui navigasi yang terdapat
          pada navbar WebGIS.
        </div>
      ),
      location: {
        center: [109.1972, -6.9999],
        zoom: 7,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
  ],
};

export default config;
