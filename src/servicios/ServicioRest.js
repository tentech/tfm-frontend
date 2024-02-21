export async function validateCredencial(user, pass) {
  try {
    /*const response = await fetch(
      "http://localhost:8762/ms-isfe/validate" + user + pass
    );
    const jsonData = await response.json();*/
    const jsonData = { resp: "true" };
    return jsonData;
  } catch (error) {
    console.error("Error al obtener los datos:", error);
  }
}

export async function validateCert(cert, pass) {
  try {
    /*const response = await fetch(
        "http://localhost:8762/ms-isfe/validate" + cert + pass
      );
      const jsonData = await response.json();*/
    const jsonData = { resp: "true" };
    return jsonData;
  } catch (error) {
    console.error("Error al obtener los datos:", error);
  }
}
