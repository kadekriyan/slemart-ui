// Maintenance Mode Controller for Sleman Mart
class MaintenanceMode {
  constructor() {
    this.isMaintenanceMode = this.checkMaintenanceStatus();
    this.init();
  }

  // Check if maintenance mode is active
  checkMaintenanceStatus() {
    // Check localStorage first
    const localStatus = localStorage.getItem("slemanmart_maintenance");
    if (localStatus !== null) {
      return localStatus === "true";
    }

    // Check if maintenance.json exists (for server-side control)
    return this.checkServerMaintenance();
  }

  // Check server maintenance status
  async checkServerMaintenance() {
    try {
      const response = await fetch("./maintenance.json");
      if (response.ok) {
        const data = await response.json();
        return data.maintenance === true;
      }
    } catch (error) {
      console.log("No server maintenance config found");
    }
    return false;
  }

  // Initialize maintenance mode
  init() {
    if (this.isMaintenanceMode) {
      this.redirectToMaintenance();
    }

    // Add maintenance toggle for admin (hidden feature)
    this.addAdminControls();
  }

  // Redirect to maintenance page
  redirectToMaintenance() {
    // Don't redirect if already on maintenance page
    if (window.location.pathname.includes("maintenance.html")) {
      return;
    }

    // Store current page for redirect after maintenance
    sessionStorage.setItem("slemanmart_return_url", window.location.href);

    // Redirect to maintenance page
    window.location.href = "./maintenance.html";
  }

  // Enable maintenance mode
  enableMaintenance() {
    localStorage.setItem("slemanmart_maintenance", "true");
    this.isMaintenanceMode = true;
    this.redirectToMaintenance();
  }

  // Disable maintenance mode
  disableMaintenance() {
    localStorage.setItem("slemanmart_maintenance", "false");
    this.isMaintenanceMode = false;

    // Redirect back to original page if available
    const returnUrl = sessionStorage.getItem("slemanmart_return_url");
    if (returnUrl) {
      sessionStorage.removeItem("slemanmart_return_url");
      window.location.href = returnUrl;
    } else {
      window.location.href = "./index.html";
    }
  }

  // Add admin controls (hidden feature)
  addAdminControls() {
    // Add keyboard shortcut: Ctrl + Shift + M
    document.addEventListener("keydown", (e) => {
      if (e.ctrlKey && e.shiftKey && e.key === "M") {
        this.showAdminPanel();
      }
    });

    // Add URL parameter control: ?admin=maintenance
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("admin") === "maintenance") {
      this.showAdminPanel();
    }
  }

  // Show admin control panel
  showAdminPanel() {
    const panel = document.createElement("div");
    panel.id = "maintenanceAdminPanel";
    panel.innerHTML = `
            <div style="
                position: fixed;
                top: 20px;
                right: 20px;
                background: white;
                border: 2px solid #E57F39;
                border-radius: 10px;
                padding: 20px;
                box-shadow: 0 10px 25px rgba(0,0,0,0.2);
                z-index: 10000;
                font-family: Arial, sans-serif;
                min-width: 250px;
            ">
                <h3 style="margin: 0 0 15px 0; color: #E57F39; font-size: 16px;">
                    🔧 Maintenance Control
                </h3>
                <p style="margin: 0 0 15px 0; font-size: 14px; color: #666;">
                    Status: <strong style="color: ${
                      this.isMaintenanceMode ? "#dc3545" : "#28a745"
                    }">
                        ${this.isMaintenanceMode ? "MAINTENANCE" : "ACTIVE"}
                    </strong>
                </p>
                <div style="display: flex; gap: 10px; margin-bottom: 15px;">
                    <button id="enableMaintenance" style="
                        background: #dc3545;
                        color: white;
                        border: none;
                        padding: 8px 12px;
                        border-radius: 5px;
                        cursor: pointer;
                        font-size: 12px;
                    ">Enable</button>
                    <button id="disableMaintenance" style="
                        background: #28a745;
                        color: white;
                        border: none;
                        padding: 8px 12px;
                        border-radius: 5px;
                        cursor: pointer;
                        font-size: 12px;
                    ">Disable</button>
                </div>
                <button id="closeAdminPanel" style="
                    background: #6c757d;
                    color: white;
                    border: none;
                    padding: 8px 12px;
                    border-radius: 5px;
                    cursor: pointer;
                    width: 100%;
                    font-size: 12px;
                ">Close</button>
            </div>
        `;

    document.body.appendChild(panel);

    // Add event listeners
    document.getElementById("enableMaintenance").onclick = () => {
      this.enableMaintenance();
    };

    document.getElementById("disableMaintenance").onclick = () => {
      this.disableMaintenance();
    };

    document.getElementById("closeAdminPanel").onclick = () => {
      document.body.removeChild(panel);
    };

    // Auto close after 10 seconds
    setTimeout(() => {
      if (document.getElementById("maintenanceAdminPanel")) {
        document.body.removeChild(panel);
      }
    }, 10000);
  }

  // Check maintenance status periodically
  startPeriodicCheck() {
    setInterval(async () => {
      const serverStatus = await this.checkServerMaintenance();
      if (serverStatus !== this.isMaintenanceMode) {
        this.isMaintenanceMode = serverStatus;
        if (this.isMaintenanceMode) {
          this.redirectToMaintenance();
        }
      }
    }, 30000); // Check every 30 seconds
  }
}

// Initialize maintenance mode when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  window.maintenanceMode = new MaintenanceMode();
  window.maintenanceMode.startPeriodicCheck();
});

// Export for use in other scripts
if (typeof module !== "undefined" && module.exports) {
  module.exports = MaintenanceMode;
}
