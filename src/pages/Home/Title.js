import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import mapboxgl from "mapbox-gl";

const Title = () => {
  useEffect(() => {
    // Initialize map
    mapboxgl.accessToken =
      "pk.eyJ1IjoiYW1hbGlhYXJpZmFoaCIsImEiOiJjbDNsOTlrcXYwaWQxM2lxYWt2ZmU4eGUyIn0.n3MrJgj9gN8li-IiQJOluA";
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/amaliaarifahh/cludkr11n00ge01r5e97n1h3x",
      center: [109.1972, -6.9999], //-7.000699868676796, 109.18485103626864
      zoom: 9.5,
    });

    return () => map.remove();
  }, []);

  return (
    <div>
      <section className="title">
        <div id="map"></div>
        <div id="hero-section">
          <h1>
            Jelajahi Informasi Spasial
            <br /> Kabupaten Tegal
          </h1>
          <p>
            Membaca data demografi dan kependudukan Kabupaten Tegal
            <br />
            melalui visualisasi 3D interaktif berbasis WebGIS{" "}
          </p>
          <div id="button-cta">
            <Button className="button-mulai" href="#Story">
              Mulai
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Title;
