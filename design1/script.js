function login() {
  const userType = document.getElementById("userType").value;

  if (!userType) {
    alert("Please select Importer or Exporter");
    return;
  }

  alert(`Logged in as ${userType.toUpperCase()}`);
}
