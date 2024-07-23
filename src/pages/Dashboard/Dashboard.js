import React, { useState, useEffect } from "react";
import NavigationBar from "../../components/NavigationBar";
import "./Dashboard.css";

const Dashboard = () => {
  const [iframeSrc, setIframeSrc] = useState("");

  const updateIframeSrc = () => {
    if (window.matchMedia("(max-width: 480px)").matches) {
      setIframeSrc(
        "https://lookerstudio.google.com/embed/reporting/a11b3e6b-e4d1-4555-910c-6bd403b83ac1/page/uXtyD"
      );
    } else if (window.matchMedia("(max-width: 768px)").matches) {
      setIframeSrc(
        "https://lookerstudio.google.com/embed/reporting/a11b3e6b-e4d1-4555-910c-6bd403b83ac1/page/uXtyD"
      );
    } else {
      setIframeSrc(
        "https://lookerstudio.google.com/embed/reporting/725aa366-ae25-4ecb-8831-d80e4e2b8ad0/page/uXtyD"
      );
    }
  };

  useEffect(() => {
    updateIframeSrc();
    window.addEventListener("resize", updateIframeSrc);

    return () => {
      window.removeEventListener("resize", updateIframeSrc);
    };
  }, []);

  return (
    <div>
      <NavigationBar />
      <section className="dashboard-page" id="dashboard-page">
        <div className="dashboard-container">
          <iframe
            title="Dashboard Kependudukan"
            className="dashboard-iframe"
            src={iframeSrc}
            frameborder="0"
            allowfullscreen
            sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
