let uploadedImage = null;

document
  .getElementById("imageUpload")
  .addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        uploadedImage = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });

function generateQRCode() {
  // Replace with your landing page URL
  const reviewLandingPageUrl = document.getElementById("url").value;
  let qrCode = new QRCodeStyling({
    width: 300,
    height: 300,
    data: reviewLandingPageUrl,
    // Optional: Replace with your logo URL
    image: uploadedImage,
    dotsOptions: {
      color: "#000000",
      type: "rounded",
    },
    backgroundOptions: {
      color: "#ffffff",
    },
    imageOptions: {
      crossOrigin: "anonymous",
      margin: 0,
    },
  });
  console.log(reviewLandingPageUrl);
  // Clear previous QR code if it exists
  document.getElementById("qrcode").innerHTML = "";
  qrCode.append(document.getElementById("qrcode"));
}
