// Simple Maintenance Mode for Sleman Mart
(function () {
  "use strict";

  // Configuration
  const MAINTENANCE_KEY = "slemanmart_maintenance";
  const MAINTENANCE_PAGE = "./maintenance-simple.html";

  // Check if maintenance mode is enabled
  function isMaintenanceMode() {
    return localStorage.getItem(MAINTENANCE_KEY) === "true";
  }

  // Enable maintenance mode
  function enableMaintenance() {
    localStorage.setItem(MAINTENANCE_KEY, "true");
    window.location.href = MAINTENANCE_PAGE;
  }

  // Disable maintenance mode
  function disableMaintenance() {
    localStorage.setItem(MAINTENANCE_KEY, "false");
    window.location.href = "./index.html";
  }

  // Initialize
  function init() {
    // Skip if already on maintenance page
    if (window.location.pathname.includes("maintenance")) {
      return;
    }

    // Redirect to maintenance if enabled
    if (isMaintenanceMode()) {
      window.location.href = MAINTENANCE_PAGE;
      return;
    }

    // Add admin shortcut (Ctrl + Shift + M)
    document.addEventListener("keydown", function (e) {
      if (e.ctrlKey && e.shiftKey && e.key === "M") {
        const action = confirm("Aktifkan maintenance mode?");
        if (action) {
          enableMaintenance();
        }
      }
    });
  }

  // Export functions to global scope for manual control
  window.maintenanceMode = {
    enable: enableMaintenance,
    disable: disableMaintenance,
    isActive: isMaintenanceMode,
  };

  // Initialize when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
