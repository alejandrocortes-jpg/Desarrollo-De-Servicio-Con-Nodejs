exports.getInicioData = () => {
  return {
    mensaje: 'Bienvenido desde el Service 🚀',
    fecha: new Date().toLocaleString()
  };
};

exports.getMenu = () => {
  return [
    { nombre: 'Tacos al pastor', precio: 30 },
    { nombre: 'Enchiladas', precio: 45 },
    { nombre: 'Pozole', precio: 60 },
    { nombre: 'Agua fresca', precio: 15 }
  ];
};
