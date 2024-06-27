import React, { useEffect, useState } from "react";
import TopicItem from "./TopicItem";

// || STYLE
import "./topicsection.css";

//|| ICON
import desaIcon from "../../../assets/icon/Kependudukan/jumlah-desa.png";
import luasIcon from "../../../assets/icon/Kependudukan/luas-wilayah.png";
import populasiIcon from "../../../assets/icon/Kependudukan/populasi.png";
import kepalakeluargaIcon from "../../../assets/icon/Kependudukan/kepala-keluarga.png";
import kepadatanIcon from "../../../assets/icon/Kependudukan/kepadatan.png";
import perpindahanIcon from "../../../assets/icon/Kependudukan/perpindahan.png";
import kematianIcon from "../../../assets/icon/Kependudukan/kematian.png";
import lakilakiIcon from "../../../assets/icon/Kependudukan/laki-laki.png";
import perempuanIcon from "../../../assets/icon/Kependudukan/perempuan.png";
import kawinIcon from "../../../assets/icon/Kependudukan/kawin.png";
import belumKawinIcon from "../../../assets/icon/Kependudukan/belum-kawin.png";
import ceraiHidupIcon from "../../../assets/icon/Kependudukan/cerai.png";
import ceraiMatiIcon from "../../../assets/icon/Kependudukan/cerai.png";
import kelahiranIcon from "../../../assets/icon/Kependudukan/kelahiran.png";
import pertumbuhanIcon from "../../../assets/icon/Kependudukan/pertumbuhan.png";
import islamIcon from "../../../assets/icon/Kependudukan/islam.png";
import kristenIcon from "../../../assets/icon/Kependudukan/kristen.png";
import katolikIcon from "../../../assets/icon/Kependudukan/katolik.png";
import hinduIcon from "../../../assets/icon/Kependudukan/hindu.png";
import budhaIcon from "../../../assets/icon/Kependudukan/buddha.png";
import konghucuIcon from "../../../assets/icon/Kependudukan/konghucu.png";
import tidakBekerjaIcon from "../../../assets/icon/Kependudukan/tidak-kerja.png";
import pelajarIcon from "../../../assets/icon/Kependudukan/pelajar.png";
import sekolahIcon from "../../../assets/icon/Kependudukan/usia-sekolah.png";
import tidakSekolahIcon from "../../../assets/icon/Kependudukan/tidak-sekolah.png";
import goldarIcon from "../../../assets/icon/Kependudukan/goldar.png";
import wiraswastaIcon from "../../../assets/icon/Kependudukan/wiraswasta.png";
import nelayanIcon from "../../../assets/icon/Kependudukan/nelayan.png";
import perdaganganIcon from "../../../assets/icon/Kependudukan/perdagangan.png";
import pensiunanIcon from "../../../assets/icon/Kependudukan/pensiunan.png";
import pengacaraIcon from "../../../assets/icon/Kependudukan/pengacara.png";
import rumahTanggaIcon from "../../../assets/icon/Kependudukan/rumah-tangga.png";
import guruIcon from "../../../assets/icon/Kependudukan/guru.png";
import perawatIcon from "../../../assets/icon/Kependudukan/rumah-tangga.png";
import kelompokUsiaIcon from "../../../assets/icon/Kependudukan/kelompok-usia.png";

const KependudukanSection = ({
  demografiData,
  activeCounty,
  activeLayer,
  onChangeLayer,
}) => {
  // State Data Kependudukan
  const [geografis, setGeografis] = useState(null);
  const [kependudukanUmum, setKependudukanUmum] = useState(null);
  const [jenisKelamin, setJenisKelamin] = useState(null);
  const [statusPernikahan, setStatusPernikahan] = useState(null);
  const [agama, setAgama] = useState(null);
  const [usia, setUsia] = useState(null);
  const [pertumbuhan, setPertumbuhan] = useState(null);
  const [usiaSekolah, setUsiaSekolah] = useState(null);
  const [pendidikan, setPendidikan] = useState(null);
  const [golonganDarah, setGolonganDarah] = useState(null);
  const [profesi, setProfesi] = useState(null);

  useEffect(() => {
    if (demografiData) {
      //Fungsi event listener active County
      const grafikData = demografiData.features.find(
        (p) => p.properties["WADMKC"] === activeCounty
      );
      // Destructuring Properti Kependudukan
      if (grafikData) {
        const {
          //Geografis
          "Jumlah Kelurahan": kelurahan,
          "Jumlah Desa": desa,
          "Luas Wilayah": luas,

          //Kependudukan Umum
          "Jumlah Penduduk": populasi,
          "Kepala Keluarga": kk,
          "Kepadatan Penduduk": kepadatan,
          "Perpindahan Penduduk": perpindahan,
          "Jumlah Meninggal": meninggal,

          //Jenis Kelamin
          "Penduduk Laki-Laki": laki_laki,
          "Penduduk Perempuan": perempuan,

          //Status Pernikahan
          "Belum Kawin": belum_kawin,
          Kawin: kawin,
          "Cerai Hidup": cerai_hidup,
          "Cerai Mati": cerai_mati,

          //Agama
          Islam: islam,
          Kristen: kristen,
          Katholik: katholik,
          Hindu: hindu,
          Buddha: budha,
          Konghucu: konghucu,

          //Usia
          "Usia 0-4 Tahun": usia_0_4,
          "Usia 5-9 Tahun": usia_5_9,
          "Usia 10-14 Tahun": usia_10_14,
          "Usia 15-19 Tahun": usia_15_19,
          "Usia 20-24 Tahun": usia_20_24,
          "Usia 25-29 Tahun": usia_25_29,
          "Usia 30-34 Tahun": usia_30_34,
          "Usia 35-39 Tahun": usia_35_39,
          "Usia 40-44 Tahun": usia_40_44,
          "Usia 45-49 Tahun": usia_45_49,
          "Usia 50-54 Tahun": usia_50_54,
          "Usia 55-59 Tahun": usia_55_59,
          "Usia 60-64 Tahun": usia_60_64,
          "Usia 65-69 Tahun": usia_65_69,
          "Usia 70-74 Tahun": usia_70_74,
          "Usia 75 Tahun ke Atas": usia_75,

          // Pertumbuhan
          "Lahir Tahun 2019": lahir_2019,
          "Lahir Sebelum Tahun 2019": sebelum_2019,
          "Lahir Tahun 2020": lahir_2020,
          "Lahir Sebelum Tahun 2020": sebelum_2020,
          "Lahir Tahun 2021": lahir_2021,
          "Lahir Sebelum Tahun 2021": sebelum_2021,
          "Lahir Tahun 2022": lahir_2022,
          "Lahir Sebelum Tahun 2022": sebelum_2022,
          "Pertumbuhan 2019": pertumbuhan_2019,
          "Pertumbuhan 2020": pertumbuhan_2020,
          "Pertumbuhan 2021": pertumbuhan_2021,
          "Pertumbuhan 2019": pertumbuhan_2022,

          // Usia Sekolah
          "Usia Sekolah 5-6 Tahun": sekolah_5_6,
          "Usia Sekolah 7-12 Tahun": sekolah_7_12,
          "Usia Sekolah 13-15 Tahun": sekolah_13_15,
          "Usia Sekolah 16-18 Tahun": sekolah_16_18,

          // Pendidikan
          "Tidak/Belum Sekolah": tidak_sekolah,
          "Belum Tamat SD": belum_SD,
          "Tamat SD": SD,
          SLTP: smp,
          SLTA: sma,
          "D1 dan D2": d1_dan_d2,
          D3: d3,
          S1: s1,
          S2: s2,
          S3: s3,

          // Golongan Darah
          "Golongan Darah A": Gol_A,
          "Golongan Darah B": Gol_B,
          "Golongan Darah AB": Gol_AB,
          "Golongan Darah O": Gol_O,
          "Golongan Darah Tidak Diketahui": Gol_tidak,

          // Pekerjaan
          "Belum/Tidak Bekerja": tidak_bekerja,
          Nelayan: nelayan,
          "Pelajar dan Mahasiswa": pelajar,
          Pensiunan: pensiun,
          Perdagangan: dagang,
          "Mengurus Rumah Tangga": irt,
          Wiraswasta: wiraswasta,
          Guru: guru,
          Peraawat: perawat,
          Pengacara: pengacara,
          "Pekerjaan Lain": pekerjaan_lain,
        } = grafikData.properties;

        // Menyimpan data sebagai objek
        const geografis = [kelurahan, desa, luas];
        const kependudukan_umum = [
          populasi,
          kk,
          kepadatan,
          perpindahan,
          meninggal,
        ];
        const jenis_kelamin = [laki_laki, perempuan];
        const status_pernikahan = [belum_kawin, kawin, cerai_hidup, cerai_mati];
        const agama = [islam, kristen, katholik, hindu, budha, konghucu];
        const usia = [
          usia_0_4,
          usia_5_9,
          usia_10_14,
          usia_15_19,
          usia_20_24,
          usia_25_29,
          usia_30_34,
          usia_35_39,
          usia_40_44,
          usia_45_49,
          usia_50_54,
          usia_55_59,
          usia_60_64,
          usia_65_69,
          usia_70_74,
          usia_75,
        ];
        const pertumbuhan = [
          lahir_2019,
          sebelum_2019,
          lahir_2020,
          sebelum_2020,
          lahir_2021,
          sebelum_2021,
          lahir_2022,
          sebelum_2022,
          pertumbuhan_2019,
          pertumbuhan_2020,
          pertumbuhan_2021,
          pertumbuhan_2022,
        ];
        const usiaSekolah = [
          sekolah_5_6,
          sekolah_7_12,
          sekolah_13_15,
          sekolah_16_18,
        ];
        const pendidikan = [
          tidak_sekolah,
          belum_SD,
          SD,
          smp,
          sma,
          d1_dan_d2,
          d3,
          s1,
          s2,
          s3,
        ];
        const golongan_darah = [Gol_A, Gol_B, Gol_AB, Gol_O, Gol_tidak];
        const profesi = [
          tidak_bekerja,
          nelayan,
          pelajar,
          pensiun,
          dagang,
          irt,
          wiraswasta,
          guru,
          perawat,
          pengacara,
          pekerjaan_lain,
        ];

        //Set variabel data dalam state
        setGeografis(geografis);
        setKependudukanUmum(kependudukan_umum);
        setJenisKelamin(jenis_kelamin);
        setStatusPernikahan(status_pernikahan);
        setAgama(agama);
        setUsia(usia);
        setPertumbuhan(pertumbuhan);
        setUsiaSekolah(usiaSekolah);
        setPendidikan(pendidikan);
        setGolonganDarah(golongan_darah);
        setProfesi(profesi);
      }
    }
  }, [demografiData, activeCounty]);

  return (
    <div>
      <section className="topic-container">
        <h2>Geografis</h2>
        {/* <TopicItem
          topicText={"Jumlah Kelurahan"}
          data={geografis && geografis[0]}
          label={"Kelurahan"}
          layer={"Jumlah Kelurahan"}
          icon={desaIcon}
          onChangeLayer={onChangeLayer}
          activeLayer={activeLayer}
        /> */}
        <TopicItem
          topicText={"Jumlah Desa"}
          data={geografis && geografis[1]}
          label={"Desa"}
          layer={"Jumlah Desa"}
          icon={desaIcon}
          onChangeLayer={onChangeLayer}
          activeLayer={activeLayer}
        />
        <TopicItem
          topicText={"Luas Wilayah"}
          data={geografis && geografis[2]}
          label={"km2"}
          layer={"Luas Wilayah"}
          icon={luasIcon}
          onChangeLayer={onChangeLayer}
          activeLayer={activeLayer}
        />
        <h2>Kependudukan Umum</h2>
        <TopicItem
          topicText={"Jumlah Penduduk"}
          data={kependudukanUmum && kependudukanUmum[0]}
          label={"orang"}
          layer={"Jumlah Penduduk"}
          icon={populasiIcon}
          onChangeLayer={onChangeLayer}
          activeLayer={activeLayer}
        />
        <TopicItem
          topicText={"Kepala Keluarga"}
          data={kependudukanUmum && kependudukanUmum[1]}
          label={"keluarga"}
          layer={"Kepala Keluarga"}
          icon={kepalakeluargaIcon}
          onChangeLayer={onChangeLayer}
          activeLayer={activeLayer}
        />
        <TopicItem
          topicText={"Kepadatan Penduduk"}
          data={kependudukanUmum && kependudukanUmum[2]}
          label={"jiwa/km2"}
          layer={"Kepadatan Penduduk"}
          icon={kepadatanIcon}
          onChangeLayer={onChangeLayer}
          activeLayer={activeLayer}
        />
        <TopicItem
          topicText={"Perpindahan Penduduk"}
          data={kependudukanUmum && kependudukanUmum[3]}
          label={"orang"}
          layer={"Perpindahan Penduduk"}
          icon={perpindahanIcon}
          onChangeLayer={onChangeLayer}
          activeLayer={activeLayer}
        />
        <TopicItem
          topicText={"Jumlah Meninggal"}
          data={kependudukanUmum && kependudukanUmum[4]}
          label={"orang"}
          layer={"Jumlah Meninggal"}
          icon={kematianIcon}
          onChangeLayer={onChangeLayer}
          activeLayer={activeLayer}
        />
      </section>
      <section className="topic-container">
        <h2>Jenis Kelamin</h2>
        <div className="two-column">
          <TopicItem
            topicText={"Laki-Laki"}
            data={jenisKelamin && jenisKelamin[0]}
            label={"orang"}
            layer={"Penduduk Laki-Laki"}
            icon={lakilakiIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
          <TopicItem
            topicText={"Perempuan"}
            data={jenisKelamin && jenisKelamin[1]}
            label={"orang"}
            layer={"Penduduk Perempuan"}
            icon={perempuanIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
        </div>
      </section>
      <section className="topic-container">
        <h2>Status Perkawinan</h2>
        <div className="two-column">
          <TopicItem
            topicText={"Belum Kawin"}
            data={statusPernikahan && statusPernikahan[0]}
            label={"orang"}
            layer={"Belum Kawin"}
            icon={belumKawinIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
          <TopicItem
            topicText={"Kawin"}
            data={statusPernikahan && statusPernikahan[1]}
            label={"orang"}
            layer={"Kawin"}
            icon={kawinIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
          <TopicItem
            topicText={"Cerai Hidup"}
            data={statusPernikahan && statusPernikahan[2]}
            label={"orang"}
            layer={"Cerai Hidup"}
            icon={ceraiHidupIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
          <TopicItem
            topicText={"Cerai Mati"}
            data={statusPernikahan && statusPernikahan[3]}
            label={"orang"}
            layer={"Cerai Mati"}
            icon={ceraiMatiIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
        </div>
      </section>
      <section className="topic-container">
        <h2>Kelompok Usia</h2>
        <div className="two-column">
          <TopicItem
            topicText={"0-4 Tahun"}
            data={usia && usia[0]}
            label={"orang"}
            layer={"Usia 0-4 Tahun"}
            icon={kelompokUsiaIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
          <TopicItem
            topicText={"5-9 Tahun"}
            data={usia && usia[1]}
            label={"orang"}
            layer={"Usia 5-9 Tahun"}
            icon={kelompokUsiaIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
          <TopicItem
            topicText={"10-14 Tahun"}
            data={usia && usia[2]}
            label={"orang"}
            layer={"Usia 10-14 Tahun"}
            icon={kelompokUsiaIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
          <TopicItem
            topicText={"15-19 Tahun"}
            data={usia && usia[3]}
            label={"orang"}
            layer={"Usia 15-19 Tahun"}
            icon={kelompokUsiaIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
          <TopicItem
            topicText={"20-24 Tahun"}
            data={usia && usia[4]}
            label={"orang"}
            layer={"Usia 20-24 Tahun"}
            icon={kelompokUsiaIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
          <TopicItem
            topicText={"25-29 Tahun"}
            data={usia && usia[5]}
            label={"orang"}
            layer={"Usia 25-29 Tahun"}
            icon={kelompokUsiaIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
          <TopicItem
            topicText={"30-34 Tahun"}
            data={usia && usia[6]}
            label={"orang"}
            layer={"Usia 30-34 Tahun"}
            icon={kelompokUsiaIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
          <TopicItem
            topicText={"35-39 Tahun"}
            data={usia && usia[7]}
            label={"orang"}
            layer={"Usia 35-39 Tahun"}
            icon={kelompokUsiaIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
          <TopicItem
            topicText={"40-44 Tahun"}
            data={usia && usia[8]}
            label={"orang"}
            layer={"Usia 40-44 Tahun"}
            icon={kelompokUsiaIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
          <TopicItem
            topicText={"45-49 Tahun"}
            data={usia && usia[9]}
            label={"orang"}
            layer={"Usia 45-49 Tahun"}
            icon={kelompokUsiaIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
          <TopicItem
            topicText={"50-54 Tahun"}
            data={usia && usia[10]}
            label={"orang"}
            layer={"Usia 50-54 Tahun"}
            icon={kelompokUsiaIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
          <TopicItem
            topicText={"55-59 Tahun"}
            data={usia && usia[11]}
            label={"orang"}
            layer={"Usia 55-59 Tahun"}
            icon={kelompokUsiaIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
          <TopicItem
            topicText={"60-64 Tahun"}
            data={usia && usia[12]}
            label={"orang"}
            layer={"Usia 60-64 Tahun"}
            icon={kelompokUsiaIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
          <TopicItem
            topicText={"65-69 Tahun"}
            data={usia && usia[13]}
            label={"orang"}
            layer={"Usia 65-69 Tahun"}
            icon={kelompokUsiaIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
          <TopicItem
            topicText={"70-74 Tahun"}
            data={usia && usia[14]}
            label={"orang"}
            layer={"Usia 70-74 Tahun"}
            icon={kelompokUsiaIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
          <TopicItem
            topicText={">75 Tahun"}
            data={usia && usia[15]}
            label={"orang"}
            layer={"Usia 75 Tahun ke Atas"}
            icon={kelompokUsiaIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
        </div>
      </section>
      <section className="topic-container">
        <h2>Pertumbuhan Penduduk</h2>
        <div className="two-column">
          <TopicItem
            topicText={"Lahir Tahun 2019"}
            data={pertumbuhan && pertumbuhan[0]}
            label={"kelahiran"}
            layer={"Lahir Tahun 2019"}
            icon={kelahiranIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
          <TopicItem
            topicText={"Lahir Sebelum 2019"}
            data={pertumbuhan && pertumbuhan[1]}
            label={"kelahiran"}
            layer={"Lahir Sebelum Tahun 2019"}
            icon={kelahiranIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
          <TopicItem
            topicText={"Lahir Tahun 2020"}
            data={pertumbuhan && pertumbuhan[2]}
            label={"kelahiran"}
            layer={"Lahir Tahun 2020"}
            icon={kelahiranIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
          <TopicItem
            topicText={"Lahir Sebelum 2020"}
            data={pertumbuhan && pertumbuhan[3]}
            label={"kelahiran"}
            layer={"Lahir Sebelum Tahun 2020"}
            icon={kelahiranIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
          <TopicItem
            topicText={"Lahir Tahun 2021"}
            data={pertumbuhan && pertumbuhan[4]}
            label={"kelahiran"}
            layer={"Lahir Tahun 2021"}
            icon={kelahiranIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
          <TopicItem
            topicText={"Lahir Sebelum 2021"}
            data={pertumbuhan && pertumbuhan[5]}
            label={"kelahiran"}
            layer={"Lahir Sebelum Tahun 2021"}
            icon={kelahiranIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
          <TopicItem
            topicText={"Lahir Tahun 2022"}
            data={pertumbuhan && pertumbuhan[6]}
            label={"kelahiran"}
            layer={"Lahir Tahun 2022"}
            icon={kelahiranIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
          <TopicItem
            topicText={"Lahir Sebelum 2022"}
            data={pertumbuhan && pertumbuhan[7]}
            label={"kelahiran"}
            layer={"Lahir Sebelum Tahun 2022"}
            icon={kelahiranIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
          <TopicItem
            topicText={"Pertumbuhan 2019"}
            data={pertumbuhan && pertumbuhan[8]}
            label={"%"}
            layer={"Pertumbuhan 2019"}
            icon={pertumbuhanIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
          <TopicItem
            topicText={"Pertumbuhan 2020"}
            data={pertumbuhan && pertumbuhan[9]}
            label={"%"}
            layer={"Pertumbuhan 2020"}
            icon={pertumbuhanIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
          <TopicItem
            topicText={"Pertumbuhan 2021"}
            data={pertumbuhan && pertumbuhan[10]}
            label={"%"}
            layer={"Pertumbuhan 2021"}
            icon={pertumbuhanIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
          <TopicItem
            topicText={"Pertumbuhan 2022"}
            data={pertumbuhan && pertumbuhan[11]}
            label={"%"}
            layer={"Pertumbuhan 2022"}
            icon={pertumbuhanIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
        </div>
      </section>
      <section className="topic-container">
        <h2>Agama</h2>
        <div className="two-column">
          <TopicItem
            topicText={"Islam"}
            data={agama && agama[0]}
            label={"orang"}
            layer={"Islam"}
            icon={islamIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
          <TopicItem
            topicText={"Kristen"}
            data={agama && agama[1]}
            label={"orang"}
            layer={"Kristen"}
            icon={kristenIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
          <TopicItem
            topicText={"Katholik"}
            data={agama && agama[2]}
            label={"orang"}
            layer={"Katholik"}
            icon={katolikIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
          <TopicItem
            topicText={"Hindu"}
            data={agama && agama[3]}
            label={"orang"}
            layer={"Hindu"}
            icon={hinduIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
          <TopicItem
            topicText={"Budha"}
            data={agama && agama[4]}
            label={"orang"}
            layer={"Buddha"}
            icon={budhaIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
          <TopicItem
            topicText={"Konghucu"}
            data={agama && agama[5]}
            label={"orang"}
            layer={"Konghucu"}
            icon={konghucuIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
        </div>
      </section>
      <section className="topic-container">
        <h2>Usia Sekolah</h2>
        <div>
          <TopicItem
            topicText={"Usia Sekolah 5-6 Tahun"}
            data={usiaSekolah && usiaSekolah[0]}
            label={"orang"}
            layer={"Usia Sekolah 5-6 Tahun"}
            icon={sekolahIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
          <TopicItem
            topicText={"Usia Sekolah 7-12 Tahun"}
            data={usiaSekolah && usiaSekolah[1]}
            label={"orang"}
            layer={"Usia Sekolah 7-12 Tahun"}
            icon={sekolahIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
          <TopicItem
            topicText={"Usia Sekolah 13-15 Tahun"}
            data={usiaSekolah && usiaSekolah[2]}
            label={"orang"}
            layer={"Usia Sekolah 13-15 Tahun"}
            icon={sekolahIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
          <TopicItem
            topicText={"Usia Sekolah 16-18 Tahun"}
            data={usiaSekolah && usiaSekolah[3]}
            label={"orang"}
            layer={"Usia Sekolah 16-18 Tahun"}
            icon={sekolahIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
        </div>
      </section>
      <section className="topic-container">
        <h2>Tingkat Pendidikan</h2>
        <div className="two-column">
          <TopicItem
            topicText={"Tidak/Belum Sekolah"}
            data={pendidikan && pendidikan[0]}
            label={"orang"}
            layer={"Tidak/Belum Sekolah"}
            icon={tidakSekolahIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
          <TopicItem
            topicText={"Belum Tamat SD"}
            data={pendidikan && pendidikan[1]}
            label={"orang"}
            layer={"Belum Tamat SD"}
            icon={tidakSekolahIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
          <TopicItem
            topicText={"Tamat SD"}
            data={pendidikan && pendidikan[2]}
            label={"orang"}
            layer={"Tamat SD"}
            icon={pelajarIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
          <TopicItem
            topicText={"SLTP"}
            data={pendidikan && pendidikan[3]}
            label={"orang"}
            layer={"SLTP"}
            icon={pelajarIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
          <TopicItem
            topicText={"SLTA"}
            data={pendidikan && pendidikan[4]}
            label={"orang"}
            layer={"SLTA"}
            icon={pelajarIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
          <TopicItem
            topicText={"D1 dan D2"}
            data={pendidikan && pendidikan[5]}
            label={"orang"}
            layer={"D1 dan D2"}
            icon={pelajarIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
          <TopicItem
            topicText={"D3"}
            data={pendidikan && pendidikan[6]}
            label={"orang"}
            layer={"D3"}
            icon={pelajarIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
          <TopicItem
            topicText={"S1"}
            data={pendidikan && pendidikan[7]}
            label={"orang"}
            layer={"S1"}
            icon={pelajarIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
          <TopicItem
            topicText={"S2"}
            data={pendidikan && pendidikan[8]}
            label={"orang"}
            layer={"S2"}
            icon={pelajarIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
          <TopicItem
            topicText={"S3"}
            data={pendidikan && pendidikan[9]}
            label={"orang"}
            layer={"S3"}
            icon={pelajarIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
        </div>
      </section>
      <section className="topic-container">
        <h2>Golongan Darah</h2>
        <div className="two-column">
          <TopicItem
            topicText={"Golongan Darah A"}
            data={golonganDarah && golonganDarah[0]}
            label={"orang"}
            layer={"Golongan Darah A"}
            icon={goldarIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
          <TopicItem
            topicText={"Golongan Darah B"}
            data={golonganDarah && golonganDarah[1]}
            label={"orang"}
            layer={"Golongan Darah B"}
            icon={goldarIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
          <TopicItem
            topicText={"Golongan Darah AB"}
            data={golonganDarah && golonganDarah[2]}
            label={"orang"}
            layer={"Golongan Darah AB"}
            icon={goldarIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
          <TopicItem
            topicText={"Golongan Darah O"}
            data={golonganDarah && golonganDarah[3]}
            label={"orang"}
            layer={"Golongan Darah O"}
            icon={goldarIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
          <TopicItem
            topicText={"Tidak Diketahui"}
            data={golonganDarah && golonganDarah[4]}
            label={"orang"}
            layer={"Golongan Darah Tidak Diketahui"}
            icon={goldarIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
        </div>
      </section>
      <section className="topic-container">
        <h2>Pekerjaan</h2>
        <div className="two-column">
          <TopicItem
            topicText={"Belum/Tidak Bekerja"}
            data={profesi && profesi[0]}
            label={"orang"}
            layer={"Belum/Tidak Bekerja"}
            icon={tidakBekerjaIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
          <TopicItem
            topicText={"Nelayan"}
            data={profesi && profesi[1]}
            label={"orang"}
            layer={"Nelayan"}
            icon={nelayanIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
          <TopicItem
            topicText={"Pelajar/ Mahasiswa"}
            data={profesi && profesi[2]}
            label={"orang"}
            layer={"Pelajar dan Mahasiswa"}
            icon={pelajarIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
          <TopicItem
            topicText={"Pensiunan"}
            data={profesi && profesi[3]}
            label={"orang"}
            layer={"Pensiunan"}
            icon={pensiunanIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
          <TopicItem
            topicText={"Perdagangan"}
            data={profesi && profesi[4]}
            label={"orang"}
            layer={"Perdagangan"}
            icon={perdaganganIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
          <TopicItem
            topicText={"Rumah Tangga"}
            data={profesi && profesi[5]}
            label={"orang"}
            layer={"Mengurus Rumah Tangga"}
            icon={rumahTanggaIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
          <TopicItem
            topicText={"Wiraswasta"}
            data={profesi && profesi[6]}
            label={"orang"}
            layer={"Wiraswasta"}
            icon={wiraswastaIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
          <TopicItem
            topicText={"Guru"}
            data={profesi && profesi[7]}
            label={"orang"}
            layer={"Guru"}
            icon={guruIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
          <TopicItem
            topicText={"Perawat"}
            data={profesi && profesi[8]}
            label={"orang"}
            layer={"Perawat"}
            icon={perawatIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
          <TopicItem
            topicText={"Pengacara"}
            data={profesi && profesi[9]}
            label={"orang"}
            layer={"Pengacara"}
            icon={pengacaraIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
        </div>
      </section>
    </div>
  );
};

export default KependudukanSection;
