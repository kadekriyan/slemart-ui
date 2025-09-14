// Basic Maintenance Mode - No Animation, Pure Simple
var MaintenanceMode = {
  // Settings
  storageKey: "slemanmart_maintenance",
  maintenancePage: "./maintenance-basic.html",

  // Check if maintenance is active
  isActive: function () {
    return localStorage.getItem(this.storageKey) === "true";
  },

  // Turn on maintenance mode
  enable: function () {
    localStorage.setItem(this.storageKey, "true");
    this.redirect();
  },

  // Turn off maintenance mode
  disable: function () {
    localStorage.setItem(this.storageKey, "false");
    window.location.href = "./index.html";
  },

  // Redirect to maintenance page
  redirect: function () {
    if (!window.location.pathname.includes("maintenance")) {
      window.location.href = this.maintenancePage;
    }
  },

  // Initialize
  init: function () {
    // Skip if on maintenance page
    if (window.location.pathname.includes("maintenance")) {
      return;
    }

    // Check and redirect if needed
    if (this.isActive()) {
      this.redirect();
      return;
    }

    // Add keyboard shortcut for admin
    var self = this;
    document.addEventListener("keydown", function (event) {
      // Ctrl + Shift + M
      if (event.ctrlKey && event.shiftKey && event.key === "M") {
        if (confirm("Aktifkan maintenance mode?")) {
          self.enable();
        }
      }
    });
  },
};

// Start when page loads
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function () {
    MaintenanceMode.init();
  });
} else {
  MaintenanceMode.init();
}

// Make available globally
window.MaintenanceMode = MaintenanceMode;
