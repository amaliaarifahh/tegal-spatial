import React from "react";
import NavigationBar from "../../components/NavigationBar";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div>
      <NavigationBar />
      <section className="dashboard-page" id="dashboard-page">
        <div className="dashboard-container">
          {/* iframe dari Google Looker Studio*/}
          <iframe
            title="Dashboard Kependudukan"
            width="100%"
            height="100%"
            src="https://lookerstudio.google.com/embed/reporting/725aa366-ae25-4ecb-8831-d80e4e2b8ad0/page/uXtyD"
            frameborder="0"
            style={{
              border: "0",
              borderRadius: "30px",
              boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
            }}
            allowfullscreen
            sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
