import React, { useCallback, useEffect, useState, useRef } from "react";
import { Col } from "react-bootstrap";
import NavigationBar from "../../components/NavigationBar";
import MapboxSection from "./MapboxSection";
import GraphSection from "./GraphSection";
import Shepherd from "shepherd.js";
import "shepherd.js/dist/css/shepherd.css";

import "./Map.css";

// || DATA
import demografi from "../../data/demografi-tegal2.geojson";

const Map = () => {
  const [demografiData, setDemografiData] = useState(null);
  const [activeLayer, setActiveLayer] = useState("Jumlah Penduduk");
  const [activeCounty, setActiveCounty] = useState("Slawi");
  const [inTransition, setInTransition] = useState(false);

  const mapboxSectionRef = useRef(null);
  const graphSectionRef = useRef(null);

  // Fetch Demografi
  useEffect(() => {
    const fetchData = async () => {
      try {
        const demo_response = await fetch(demografi);
        const demo_data = await demo_response.json();
        setDemografiData(demo_data);
        // console.log("data demografi:", demo_data);
        const initialCounty = demo_data.features[104].properties["WADMKC"];
        setActiveCounty(initialCounty);
      } catch (error) {
        console.error("Gagal mengambil data Demografi GeoJSON :", error);
      }
    };
    fetchData();
  }, []);

  // Shepherd Tour
  useEffect(() => {
    const tour = new Shepherd.Tour({
      defaultStepOptions: {
        classes: "shepherd-theme-custom",
        scrollTo: { behavior: "smooth", block: "center" },
        useModalOverlay: true,
      },
    });

    tour.addStep({
      id: "step1",
      text: "ini adalah dropdown untuk memilih kecamatan yang ingin ditampilkan dalam section informasi data",
      attachTo: {
        element: graphSectionRef.current,
        on: "bottom",
      },
      buttons: [
        {
          text: "Next",
          action: tour.next,
        },
      ],
    });

    tour.addStep({
      id: "step2",
      text: "ini adalah section informasi data kependudukan. Anda dapat menekan ikon layer untuk menampilkan data 3D",
      attachTo: {
        element: graphSectionRef.current,
        on: "center",
      },
      buttons: [
        {
          text: "Next",
          action: tour.next,
        },
      ],
    });

    tour.addStep({
      id: "step3",
      text: "ini adalah bagian peta 3D berdasarkan layer data yang dipilih. Anda dapat melakukan interaksi dengan fitur zoom, dimensi 2D/3D, ganti basemap, dan tampilan label kecamatan.",
      attachTo: {
        element: mapboxSectionRef.current,
        on: "center",
      },
      buttons: [
        {
          text: "Finish",
          action: tour.complete,
        },
      ],
    });

    setTimeout(() => {
      tour.start();
    }, 500); // Delay to ensure elements are in the DOM

    return () => {
      tour.cancel();
    };
  }, []);

  // Fungsi Pergantian Field Layer
  const onChangeLayer = useCallback(
    (selectedLayer) => {
      setInTransition(true);
      setTimeout(() => {
        setActiveLayer(selectedLayer);
      }, 500);
      setTimeout(() => {
        setInTransition(false);
      }, 500);
    },
    [setInTransition, setActiveLayer]
  );

  // Fungsi untuk Memperbaharui Poligon Kelurahan Aktif
  const onChangeCounty = useCallback(
    (selectedCounty) => {
      setActiveCounty(selectedCounty);
    },
    [setActiveCounty]
  );

  return (
    <div>
      <NavigationBar id="navigation-bar" />
      <section className="map-page" id="map-page">
        <Col xs={12} lg={8} id="mapbox-section" ref={mapboxSectionRef}>
          <div>
            <MapboxSection
              demografiData={demografiData}
              activeLayer={activeLayer}
              activeCounty={activeCounty}
              onChangeCounty={onChangeCounty}
              onChangeLayer={onChangeLayer}
              inTransition={inTransition}
              selectedCounty={activeCounty}
            />
          </div>
        </Col>
        <Col xs={12} lg={8} id="graph-section" ref={graphSectionRef}>
          <div>
            <GraphSection
              demografiData={demografiData}
              activeCounty={activeCounty}
              activeLayer={activeLayer}
              onChangeLayer={onChangeLayer}
              onChangeCounty={onChangeCounty}
            />
          </div>
        </Col>
      </section>
    </div>
  );
};

export default Map;
