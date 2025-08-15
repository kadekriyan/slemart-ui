// Sample data initialization for Sleman Mart profile system
// This script can be run in the browser console to populate sample data

// Sample user data
const sampleUserData = {
  name: "Ahmad Santoso",
  email: "ahmad.santoso@email.com",
  phone: "+62 812-3456-7890",
  birthDate: "1990-01-15",
  gender: "male",
  photo: "https://via.placeholder.com/120x120/E57F39/FFFFFF?text=AS",
};

// Sample addresses
const sampleAddresses = [
  {
    id: "addr_001",
    recipientName: "Ahmad Santoso",
    phone: "+62 812-3456-7890",
    fullAddress: "Jl. Kaliurang KM 14.5, RT 02/RW 05, Ngaglik, Sleman, DIY",
    postalCode: "55581",
    label: "Rumah",
    isDefault: true,
  },
  {
    id: "addr_002",
    recipientName: "Ahmad Santoso",
    phone: "+62 812-3456-7890",
    fullAddress: "Jl. Malioboro No. 123, RT 01/RW 02, Yogyakarta",
    postalCode: "55271",
    label: "Kantor",
    isDefault: false,
  },
  {
    id: "addr_003",
    recipientName: "Siti Nurhaliza",
    phone: "+62 856-7890-1234",
    fullAddress: "Jl. Godean KM 5, RT 03/RW 07, Gamping, Sleman, DIY",
    postalCode: "55293",
    label: "Rumah Orang Tua",
    isDefault: false,
  },
];

// Initialize data function
function initializeProfileData() {
  // Store user data
  localStorage.setItem("userData", JSON.stringify(sampleUserData));

  // Store addresses
  localStorage.setItem("userAddresses", JSON.stringify(sampleAddresses));

  console.log("✅ Sample profile data initialized successfully!");
  console.log("📝 User data:", sampleUserData);
  console.log("📍 Addresses:", sampleAddresses.length + " addresses loaded");
}

// Auto-initialize if running in browser
if (typeof window !== "undefined" && window.localStorage) {
  // Only initialize if no existing data
  const existingData = localStorage.getItem("userData");
  if (!existingData) {
    initializeProfileData();
  } else {
    console.log(
      "ℹ️ Profile data already exists. Run initializeProfileData() to reset."
    );
  }
}

// Export for manual use
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    sampleUserData,
    sampleAddresses,
    initializeProfileData,
  };
}
