import React, { useEffect, useState, useRef } from "react";
import { Col } from "react-bootstrap";
import NavigationBar from "../../components/NavigationBar";
import MapboxSection from "./CMapboxSection";
import GraphSection from "./CGraphSection";
import Shepherd from "shepherd.js";
import "shepherd.js/dist/css/shepherd.css";

import "./MapClustering.css";

// DATA
import demografi from "../../data/clustering-tegal.geojson";

const MapClustering = () => {
  const [demografiData, setDemografiData] = useState(null);
  const [selectedLayer, setSelectedLayer] = useState("education");
  const [activeCounty, setActiveCounty] = useState("Slawi");

  const mapboxSectionRef = useRef(null);
  const graphSectionRef = useRef(null);

  // Fetch Demografi
  useEffect(() => {
    const fetchData = async () => {
      try {
        const demo_response = await fetch(demografi);
        if (!demo_response.ok) {
          throw new Error("Gagal mengambil data Demografi GeoJSON");
        }
        const demo_data = await demo_response.json();
        setDemografiData(demo_data);
        console.log("data demografi:", demo_data);

        // Pastikan demo_data.features memiliki indeks yang cukup
        const initialCounty =
          demo_data.features && demo_data.features[104]?.properties?.WADMKC;
        if (initialCounty) {
          setActiveCounty(initialCounty);
        } else {
          throw new Error("Data Demografi tidak lengkap atau tidak valid");
        }
      } catch (error) {
        console.error("Gagal mengambil data Demografi GeoJSON:", error);
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
      text: "ini adalah pilihan tema titik fasilitas yang dapat ditampilkan dalam bentuk clustering",
      attachTo: {
        element: graphSectionRef.current,
        on: "top",
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
      id: "step3",
      text: "ini adalah bagian peta clustering fasilitas di Kabupaten Tegal. Anda dapat berinteraksi dengan melakukan zoom in/zoom out untuk melihat persebaran titik.",
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
    }, 500);

    return () => {
      tour.cancel();
    };
  }, []);

  const handleToggle = (layer) => {
    setSelectedLayer(layer);
  };

  return (
    <div>
      <NavigationBar />
      <section className="map-page" id="map-page">
        <Col xs={12} lg={8} id="mapbox-section" ref={mapboxSectionRef}>
          <div>
            <MapboxSection selectedLayer={selectedLayer} />
          </div>
        </Col>
        <Col xs={12} lg={4} id="graph-section" ref={graphSectionRef}>
          <div>
            <GraphSection
              demografiData={demografiData}
              selectedLayer={selectedLayer}
              activeCounty={activeCounty}
              onToggle={handleToggle}
            />
          </div>
        </Col>
      </section>
    </div>
  );
};

export default MapClustering;
