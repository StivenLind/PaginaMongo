db.carros.insertMany([
  { id: 1, marca: 'Chevrolet', modelo: 'Onix', año: 2022, precio: 55000000, consumo: 40, color: 'Rojo', capacidad: 5, transmision: 'Manual', potencia: 100, seguridad: 'Airbags ABS' },
  { id: 2, marca: 'Renault', modelo: 'Duster', año: 2023, precio: 80000000, consumo: 30, color: 'Blanco', capacidad: 5, transmision: 'Automática', potencia: 145, seguridad: 'AirbagsControl de estabilidad' },
  { id: 3, marca: 'Mazda', modelo: 'CX-5', año: 2023, precio: 120000000, consumo: 35, color: 'Negro', capacidad: 5, transmision: 'Automática', potencia: 187, seguridad: 'Airbags ABSControl de tracción' },
  { id: 4, marca: 'Kia', modelo: 'Picanto', año: 2021, precio: 40000000, cconsumo: 45, color: 'Azul', capacidad: 5, transmision: 'Manual', potencia: 67, seguridad: 'Airbags Frenos ABS' },
  { id: 5, marca: 'Toyota', modelo: 'Corolla', año: 2024, precio: 95000000, consumo: 50, color: 'Gris', capacidad: 5, transmision: 'CVT', potencia: 132, seguridad: 'Airbags Control de estabilidad ABS' },
  { id: 6, marca: 'Ford', modelo: 'Escape', año: 2024, precio: 130000000, consumo: 25, color: 'Blanco', capacidad: 5, transmision: 'Automática', potencia: 245, seguridad: 'Airbags Control de tracción ABS' },
  { id: 7, marca: 'Nissan', modelo: 'March', año: 2022, precio: 45000000, consumo: 42, color: 'Plateado', capacidad: 5, transmision: 'Manual', potencia: 106, seguridad: 'Airbags ABS' },
  { id: 8, marca: 'Honda', modelo: 'Civic', año: 2023, precio: 110000000, consumo: 35, color: 'Rojo', capacidad: 5, transmision: 'Automática', potencia: 174, seguridad: 'Airbags Control de estabilidad ABS' },
  { id: 9, marca: 'Hyundai', modelo: 'Tucson', año: 2022, precio: 95000000, consumo: 32, color: 'Verde', capacidad: 5, transmision: 'Automática', potencia: 181, seguridad: 'Airbags Control de tracción ABS' },
  { id: 10, marca: 'Volkswagen', modelo: 'Jetta', año: 2023, precio: 100000000, consumo: 38, color: 'Negro', capacidad: 5, transmision: 'Automática', potencia: 147, seguridad: 'Airbags ABS Control de estabilidad' },
  { id: 11, marca: 'Chevrolet', modelo: 'Spark GT', año: 2021, precio: 38000000, consumo: 50, color: 'Amarillo', capacidad: 5, transmision: 'Manual', potencia: 66, seguridad: 'Airbags ABS' },
  { id: 12, marca: 'Renault', modelo: 'Koleos', año: 2024, precio: 120000000, consumo: 28, color: 'Gris', capacidad: 5, transmision: 'Automática', potencia: 170, seguridad: 'Airbags Control de estabilidad' },
  { id: 13, marca: 'Mazda', modelo: '3', año: 2022, precio: 85000000, consumo: 40, color: 'Rojo', capacidad: 5, transmision: 'Automática', potencia: 153, seguridad: 'Airbags ABS Control de tracción' },
  { id: 14, marca: 'Kia', modelo: 'Sportage', año: 2023, precio: 110000000, consumo: 30, color: 'Blanco', capacidad: 5, transmision: 'Automática', potencia: 181, seguridad: 'Airbags Control de tracción ABS' },
  { id: 15, marca: 'Toyota', modelo: 'Yaris', año: 2021, precio: 60000000, consumo: 45, color: 'Azul', capacidad: 5, transmision: 'Manual', potencia: 106, seguridad: 'Airbags ABS' },
  { id: 16, marca: 'Ford', modelo: 'Ranger', año: 2024, precio: 140000000, consumo: 25, color: 'Negro', capacidad: 5, transmision: 'Automática', potencia: 270, seguridad: 'Airbags Control de tracción ABS' },
  { id: 17, marca: 'Nissan', modelo: 'Versa', año: 2022, precio: 70000000, consumo: 40, color: 'Gris', capacidad: 5, transmision: 'Automática', potencia: 118, seguridad: 'Airbags ABS' },
  { id: 18, marca: 'Honda', modelo: 'HR-V', año: 2023, precio: 130000000, consumo: 35, color: 'Blanco', capacidad: 5, transmision: 'Automática', potencia: 141, seguridad: 'Airbags Control de estabilidad ABS' },
  { id: 19, marca: 'Hyundai', modelo: 'i10', año: 2021, precio: 45000000, consumo: 45, color: 'Naranja', capacidad: 5, transmision: 'Manual', potencia: 85, seguridad: 'Airbags ABS' },
  { id: 20, marca: 'Volkswagen', modelo: 'Tiguan', año: 2023, precio: 150000000, consumo: 30, color: 'Verde', capacidad: 7, transmision: 'Automática', potencia: 184, seguridad: 'Airbags Control de tracción ABS' },
  { id: 21, marca: 'Chevrolet', modelo: 'Tracker', año: 2023, precio: 90000000, consumo: 35, color: 'Azul', capacidad: 5, transmision: 'Automática', potencia: 155, seguridad: 'Airbags Control de estabilidad' },
  { id: 22, marca: 'Renault', modelo: 'Logan', año: 2021, precio: 45000000, consumo: 50, color: 'Rojo', capacidad: 5, transmision: 'Manual', potencia: 85, seguridad: 'Airbags ABS' },
  { id: 23, marca: 'Mazda', modelo: 'CX-30', año: 2023, precio: 120000000, consumo: 33, color: 'Negro', capacidad: 5, transmision: 'Automática', potencia: 186, seguridad: 'Airbags Control de estabilidad ABS' },
  { id: 24, marca: 'Kia', modelo: 'Seltos', año: 2023, precio: 110000000, consumo: 30, color: 'Gris', capacidad: 5, transmision: 'Automática', potencia: 175, seguridad: 'Airbags Control de tracción ABS' },
  { id: 25, marca: 'Toyota', modelo: 'Prado', año: 2023, precio: 280000000, consumo: 20, color: 'Negro', capacidad: 7, transmision: 'Automática', potencia: 275, seguridad: 'Airbags Control de estabilidad ABS' },
  { id: 26, marca: 'Ford', modelo: 'Edge', año: 2022, precio: 130000000, consumo: 30, color: 'Rojo', capacidad: 5, transmision: 'Automática', potencia: 250, seguridad: 'Airbags Control de tracción ABS' },
  { id: 27, marca: 'Nissan', modelo: 'Kicks', año: 2023, precio: 85000000, consumo: 35, color: 'Blanco', capacidad: 5, transmision: 'Automática', potencia: 122, seguridad: 'Airbags Control de estabilidad ABS' },
  { id: 28, marca: 'Honda', modelo: 'Accord', año: 2023, precio: 130000000, consumo: 32, color: 'Gris', capacidad: 5, transmision: 'Automática', potencia: 192, seguridad: 'Airbags Control de estabilidad ABS' },
  { id: 29, marca: 'Hyundai', modelo: 'Santa Fe', año: 2022, precio: 150000000, consumo: 28, color: 'Negro', capacidad: 7, transmision: 'Automática', potencia: 191, seguridad: 'Airbag Cosntrol de tracción ABS' },
  { id: 30, marca: 'Volkswagen', modelo: 'Polo', año: 2023, precio: 80000000, consumo: 40, color: 'Amarillo', capacidad: 5, transmision: 'Manual', potencia: 115, seguridad: 'Airbags ABS' },
  { id: 31, marca: 'Chevrolet', modelo: 'Camaro', año: 2024, precio: 250000000, consumo: 15, color: 'Rojo', capacidad: 4, transmision: 'Automática', potencia: 455, seguridad: 'Airbags Control de tracción ABS' },
  { id: 32, marca: 'Renault', modelo: 'Sandero', año: 2021, precio: 50000000, consumo: 50, color: 'Azul', capacidad: 5, transmision: 'Manual', potencia: 85, seguridad: 'Airbags ABS' },
  { id: 33, marca: 'Mazda', modelo: '6', año: 2023, precio: 130000000, consumo: 33, color: 'Negro', capacidad: 5, transmision: 'Automática', potencia: 187, seguridad: 'Airbags Control de tracción ABS' },
  { id: 34, marca: 'Kia', modelo: 'Rio', año: 2022, precio: 55000000, consumo: 40, color: 'Rojo', capacidad: 5, transmision: 'Manual', potencia: 99, seguridad: 'Airbags ABS' },
  { id: 35, marca: 'Toyota', modelo: 'RAV4', año: 2024, precio: 150000000, consumo: 25, color: 'Gris', capacidad: 5, transmision: 'Automática', potencia: 203, seguridad: 'Airbags Control de estabilidad ABS' },
  { id: 36, marca: 'Ford', modelo: 'Explorer', año: 2023, precio: 160000000, consumo: 20, color: 'Blanco', capacidad: 7, transmision: 'Automática', potencia: 365, seguridad: 'Airbags Control de tracción ABS' },
  { id: 37, marca: 'Nissan', modelo: 'X-Trail', año: 2024, precio: 140000000, consumo: 27, color: 'Negro', capacidad: 7, transmision: 'Automática', potencia: 169, seguridad: 'Airbags Control de tracción ABS' },
  { id: 38, marca: 'Honda', modelo: 'Pilot', año: 2024, precio: 180000000, consumo: 25, color: 'Gris', capacidad: 8, transmision: 'Automática', potencia: 280, seguridad: 'Airbags Control de estabilidad ABS' },
  { id: 39, marca: 'Hyundai', modelo: 'Venue', año: 2023, precio: 85000000, consumo: 35, color: 'Azul', capacidad: 5, transmision: 'Automática', potencia: 121, seguridad: 'Airbags ABS' },
  { id: 40, marca: 'Volkswagen', modelo: 'Passat', año: 2023, precio: 130000000, consumo: 32, color: 'Blanco', capacidad: 5, transmision: 'Automática', potencia: 174, seguridad: 'Airbags Control de estabilidad ABS' }
]);
//db.carros.find({ año: 2023 });

//db.carros.find({ color: { $eq: "Rojo" } });    //1// Busca los carros que tienen el color Rojo
//db.carros.find({ año: { $gt: 2023 } });  //2// Busca los carros cuyo año de fabricación sea mayor a 2023
//db.carros.find({ precio: { $gte: 200000000 } });  //3// Busca los carros cuyo precio sea mayor o igual a 200,000,000
//db.carros.find({ capacidad: { $lt: 5 } }); //4// Busca los carros con capacidad menor a 5 pasajeros
//db.carros.find({ potencia: { $lte: 150 } });//5// Busca los carros con potencia de motor menor o igual a 150 caballos de fuerza
//db.carros.find({ marca: { $ne: "Toyota" } });//6// Busca los carros cuya marca sea difeente de Toyota
//db.carros.find({ color: { $in: ["Rojo", "Blanco"] } });//7// Busca los carros que esten en el rango de color Rojo y Blanco
//db.carros.find({ modelo: { $nin: ["Onix", "Duster", "CX-5"] } });//8// busca los carros cuyo modelo no sea Onix, Duster o CX-5
//db.carros.find({$and: [{ año: { $gt: 2021 } },{ color: "Azul" }]}); //9//  busca todos los carros que tienen un año de fabricación mayor a 2021 y que son de color azul

//db.carros.deleteOne({ id: 10 }); //10//elimina el carro con id igual a 10 
//db.carros.find({ id: {$lt:15} });