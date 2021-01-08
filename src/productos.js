const productos = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        nombre: "Termale43",
        precio: 25000,
        id: "TML43",
        compania: "INTEL",
        categoria: "Procesador",
        descripcion: "bla bla bla bla",
      },
      {
        nombre: "Termale433",
        precio: 22000,
        id: "TML44",
        compania: "INTEL",
        categoria: "Procesador",
        descripcion: "bla bla bla bla",
      },
      {
        nombre: "Telko43",
        precio: 20000,
        id: "TML45",
        compania: "AMD",
        categoria: "Procesador",
        descripcion: "bla bla bla bla",
      },
      {
        nombre: "Tko43",
        precio: 21000,
        id: "TML46",
        compania: "AMD",
        categoria: "Procesador",
        descripcion: "bla bla bla bla",
      },
    ]);
  }, 2000);
});

export default productos;
