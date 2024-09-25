db.Restaurante_Padilla.insertMany([
   { _id: 1, nombre: 'Ramen de Mario', tipo: 'Ramen', precio: 15000, unidades: 10, descripcion: 'Ramen picante con hongos y huevo de Yoshi', peso: 500, disponibilidad: 'Disponible', calificacion: 5, calorias: 600 },
  { _id: 2, nombre: 'Hamburguesa de Sonic', tipo: 'Hamburguesa', precio: 12000, unidades: 15, descripcion: 'Hamburguesa clásica con queso y anillos de cebolla', peso: 300, disponibilidad: 'Disponible', calificacion: 4, calorias: 450 },
  { _id: 3, nombre: 'Pizza de Zelda', tipo: 'Pizza', precio: 18000, unidades: 8, descripcion: 'Pizza con pepperoni y Trifuerza de queso', peso: 800, disponibilidad: 'Pocas unidades', calificacion: 4, calorias: 900 },
  { _id: 4, nombre: 'Alitas de Samus', tipo: 'Alitas', precio: 16000, unidades: 12, descripcion: 'Alitas de pollo con salsa de Metroid', peso: 400, disponibilidad: 'Disponible', calificacion: 5, calorias: 500 },
  { _id: 5, nombre: 'Salchipapa de Pac-Man', tipo: 'Papas Fritas', precio: 8000, unidades: 20, descripcion: 'Salchipapa con cubierta de queso y salsa hecha de fantasma .', peso: 250, disponibilidad: 'Disponible', calificacion: 3, calorias: 300 },
  { _id: 6, nombre: 'Sándwich de Kratos', tipo: 'Sándwich', precio: 13000, unidades: 14, descripcion: 'Sándwich de jamón, pollo, queso y furia espartana.', peso: 350, disponibilidad: 'Disponible', calificacion: 4, calorias: 400 },
  { _id: 7, nombre: 'Nuggets de Lara Croft', tipo: 'Nuggets', precio: 10000, unidades: 18, descripcion: 'Nuggets de pollo con salsa secreta', peso: 200, disponibilidad: 'Disponible', calificacion: 4, calorias: 300 },
  { _id: 8, nombre: 'Tacos de Jefe Maestro', tipo: 'Tacos', precio: 12000, unidades: 16, descripcion: 'Tacos de carne con guacamole y plasma', peso: 300, disponibilidad: 'Disponible', calificacion: 5, calorias: 350 },
  { _id: 9, nombre: 'Burrito de Link', tipo: 'Burrito', precio: 14000, unidades: 10, descripcion: 'Burrito grande con frijoles y carne de Hyrule', peso: 350, disponibilidad: 'Pocas unidades', calificacion: 4, calorias: 550 },
  { _id: 10, nombre: 'Perro Caliente de Donkey Kong', tipo: 'Perro Caliente', precio: 9000, unidades: 22, descripcion: 'Perro caliente con plátano y salsa especial', peso: 250, disponibilidad: 'Disponible', calificacion: 3, calorias: 350 },
  { _id: 11, nombre: 'Rollos de Sushi de Sam Fisher', tipo: 'Sushi', precio: 20000, unidades: 9, descripcion: 'Rollos de sushi de salmón en sigilo', peso: 200, disponibilidad: 'Disponible', calificacion: 5, calorias: 300 },
  { _id: 12, nombre: 'Tempura de Chun-Li', tipo: 'Tempura', precio: 17000, unidades: 11, descripcion: 'Tempura de camarones con golpes rápidos', peso: 250, disponibilidad: 'Disponible', calificacion: 4, calorias: 350 },
  { _id: 13, nombre: 'Wrap de Geralt', tipo: 'Wrap', precio: 11000, unidades: 13, descripcion: 'Wrap de pollo con hierbas del brujo', peso: 300, disponibilidad: 'Disponible', calificacion: 3, calorias: 400 },
  { _id: 14, nombre: 'Cheeseburger de Ryu', tipo: 'Hamburguesa', precio: 12000, unidades: 12, descripcion: 'Cheeseburger con queso extra Hadoken', peso: 350, disponibilidad: 'Disponible', calificacion: 4, calorias: 500 },
  { _id: 15, nombre: 'Chili Dog de Sonic', tipo: 'Perro Caliente', precio: 9500, unidades: 17, descripcion: 'Perro caliente con chili rápido como Sonic', peso: 300, disponibilidad: 'Disponible', calificacion: 4, calorias: 450 },
  { _id: 16, nombre: 'Kebab de Ezio', tipo: 'Kebab', precio: 16000, unidades: 10, descripcion: 'Kebab de carne con salsa de sigilo', peso: 400, disponibilidad: 'Pocas unidades', calificacion: 5, calorias: 600 },
  { _id: 17, nombre: 'Quesadilla de Ellie', tipo: 'Quesadilla', precio: 14000, unidades: 15, descripcion: 'Quesadilla de queso y jalapeños con toque post-apocalíptico', peso: 250, disponibilidad: 'Disponible', calificacion: 4, calorias: 400 },
  { _id: 18, nombre: 'Pollo Popcorn de Nathan Drake', tipo: 'Pollo', precio: 10000, unidades: 18, descripcion: 'Popcorn de pollo con tesoros de salsa BBQ', peso: 200, disponibilidad: 'Disponible', calificacion: 4, calorias: 350 },
  { _id: 19, nombre: 'Costillas BBQ de Scorpion', tipo: 'BBQ', precio: 21000, unidades: 7, descripcion: 'Costillas BBQ con salsa picante infernal', peso: 500, disponibilidad: 'Pocas unidades', calificacion: 5, calorias: 700 },
  { _id: 20, nombre: 'Tiras de Pollo de Cloud', tipo: 'Pollo', precio: 12000, unidades: 14, descripcion: 'Tiras de pollo con mostaza y espadas', peso: 300, disponibilidad: 'Disponible', calificacion: 4, calorias: 400 },
  { _id: 21, nombre: 'Sándwich de Bistec de Solid Snake', tipo: 'Sándwich', precio: 18000, unidades: 9, descripcion: 'Sándwich de bistec con cebolla de infiltración', peso: 400, disponibilidad: 'Pocas unidades', calificacion: 5, calorias: 600 },
  { _id: 22, nombre: 'Papas con Queso de Mario Kart', tipo: 'Papas Fritas', precio: 8000, unidades: 19, descripcion: 'Papas fritas con queso derretido y turbo', peso: 300, disponibilidad: 'Disponible', calificacion: 4, calorias: 400 },
  { _id: 23, nombre: 'Hamburguesa de Pollo de Lara Croft', tipo: 'Hamburguesa', precio: 13000, unidades: 13, descripcion: 'Hamburguesa de pollo empanizado con toque aventurero', peso: 350, disponibilidad: 'Disponible', calificacion: 4, calorias: 500 },
  { _id: 24, nombre: 'Tacos de Pescado de Samus', tipo: 'Tacos', precio: 15000, unidades: 11, descripcion: 'Tacos de pescado con salsa de Metroid', peso: 300, disponibilidad: 'Pocas unidades', calificacion: 5, calorias: 350 },
  { _id: 25, nombre: 'Tempura Udon de Luigi', tipo: 'Tempura', precio: 19000, unidades: 8, descripcion: 'Tempura de vegetales y camarones con udon y hongos', peso: 450, disponibilidad: 'Pocas unidades', calificacion: 5, calorias: 550 },
  { _id: 26, nombre: 'Rollos de Pizza de Bowser', tipo: 'Pizza', precio: 17000, unidades: 10, descripcion: 'Rollos de pizza con lava de queso', peso: 350, disponibilidad: 'Disponible', calificacion: 4, calorias: 450 },
  { _id: 27, nombre: 'Shawarma de Shepard', tipo: 'Shawarma', precio: 14000, unidades: 12, descripcion: 'Shawarma de pollo con toque galáctico', peso: 350, disponibilidad: 'Disponible', calificacion: 4, calorias: 450 },
  { _id: 28, nombre: 'Alitas de Pollo de Peach', tipo: 'Alitas', precio: 16000, unidades: 14, descripcion: 'Alitas con salsa dulce y rosa', peso: 300, disponibilidad: 'Disponible', calificacion: 5, calorias: 400 },
  { _id: 29, nombre: 'Ensalada César de Zelda', tipo: 'Ensalada', precio: 9000, unidades: 20, descripcion: 'Ensalada césar con aderezo legendario', peso: 200, disponibilidad: 'Disponible', calificacion: 4, calorias: 200 },
  { _id: 30, nombre: 'Burrito de Vegetales de Ellie', tipo: 'Burrito', precio: 11000, unidades: 17, descripcion: 'Burrito vegetariano con sabor post-apocalíptico', peso: 300, disponibilidad: 'Disponible', calificacion: 3, calorias: 350 },
  { _id: 31, nombre: 'Pizza Cuatro Quesos de Kratos', tipo: 'Pizza', precio: 18000, unidades: 9, descripcion: 'Pizza cuatro quesos con furia espartana', peso: 450, disponibilidad: 'Pocas unidades', calificacion: 5, calorias: 600 },
  { _id: 32, nombre: 'Wrap de Vegetales de Chun-Li', tipo: 'Wrap', precio: 10000, unidades: 15, descripcion: 'Wrap de vegetales con energía de combate', peso: 250, disponibilidad: 'Disponible', calificacion: 3, calorias: 250 },
  { _id: 33, nombre: 'Rollos Primavera de Snake', tipo: 'Rollos', precio: 13000, unidades: 11, descripcion: 'Rollos primavera con salsa secreta de infiltración', peso: 300, disponibilidad: 'Disponible', calificacion: 4, calorias: 400 },
  { _id: 34, nombre: 'Fajitas de Res de Ezio', tipo: 'Fajitas', precio: 16000, unidades: 13, descripcion: 'Fajitas de res con aderezo de asesino', peso: 350, disponibilidad: 'Disponible', calificacion: 5, calorias: 450 },
  { _id: 35, nombre: 'Torta de Milanesa de Nathan Drake', tipo: 'Torta', precio: 15000, unidades: 10, descripcion: 'Torta de milanesa con aventura en cada bocado', peso: 400, disponibilidad: 'Pocas unidades', calificacion: 5, calorias: 500 },
  { _id: 36, nombre: 'Ceviche de Geralt', tipo: 'Ceviche', precio: 20000, unidades: 9, descripcion: 'Ceviche con pescado fresco y hierbas del brujo', peso: 250, disponibilidad: 'Pocas unidades', calificacion: 5, calorias: 300 },
  { _id: 37, nombre: 'Tostadas de Atún de Aloy', tipo: 'Tostadas', precio: 15000, unidades: 12, descripcion: 'Tostadas de atún con frescura de Horizon', peso: 200, disponibilidad: 'Disponible', calificacion: 4, calorias: 250 },
  { _id: 38, nombre: 'Sopa Miso de Ryu', tipo: 'Sopa', precio: 9000, unidades: 20, descripcion: 'Sopa miso con tofu y golpes de energía', peso: 300, disponibilidad: 'Disponible', calificacion: 4, calorias: 200 },
  { _id: 39, nombre: 'Ensalada de Pollo de Zelda', tipo: 'Ensalada', precio: 11000, unidades: 18, descripcion: 'Ensalada de pollo con toque de la Trifuerza', peso: 350, disponibilidad: 'Disponible', calificacion: 4, calorias: 350 },
  { _id: 40, nombre: 'Sushi de Atún de Cloud', tipo: 'Sushi', precio: 19000, unidades: 10, descripcion: 'Sushi de atún con espadas de nori', peso: 250, disponibilidad: 'Pocas unidades', calificacion: 5, calorias: 300 },
  { _id: 41, nombre: 'Empanadas de Kratos', tipo: 'Empanadas', precio: 14000, unidades: 14, descripcion: 'Empanadas de carne con salsa espartana', peso: 300, disponibilidad: 'Disponible', calificacion: 5, calorias: 400 },
  { _id: 42, nombre: 'Sándwich de Atún de Geralt', tipo: 'Sándwich', precio: 12000, unidades: 12, descripcion: 'Sándwich de atún con hierbas del brujo', peso: 250, disponibilidad: 'Disponible', calificacion: 4, calorias: 350 },
  { _id: 43, nombre: 'Tempura de Langostino de Chun-Li', tipo: 'Tempura', precio: 17000, unidades: 9, descripcion: 'Tempura de langostino con energía de combate', peso: 300, disponibilidad: 'Pocas unidades', calificacion: 4, calorias: 450 },
  { _id: 44, nombre: 'Waffles de Peach', tipo: 'Waffles', precio: 10000, unidades: 15, descripcion: 'Waffles con fresas y toque rosa', peso: 200, disponibilidad: 'Disponible', calificacion: 4, calorias: 350 },
  { _id: 45, nombre: 'Croquetas de Pollo de Samus', tipo: 'Croquetas', precio: 11000, unidades: 18, descripcion: 'Croquetas de pollo con salsa espacial', peso: 250, disponibilidad: 'Disponible', calificacion: 4, calorias: 300 },
  { _id: 46, nombre: 'Bowl de Arroz de Ryu', tipo: 'Bowl', precio: 13000, unidades: 14, descripcion: 'Bowl de arroz con pollo y energía Hadoken', peso: 400, disponibilidad: 'Disponible', calificacion: 4, calorias: 450 },
  { _id: 47, nombre: 'Ensalada de Frutas de Sonic', tipo: 'Ensalada', precio: 9000, unidades: 20, descripcion: 'Ensalada de frutas rápida y refrescante', peso: 300, disponibilidad: 'Disponible', calificacion: 3, calorias: 200 },
  { _id: 48, nombre: 'Pollo Asado de Ezio', tipo: 'Pollo', precio: 16000, unidades: 12, descripcion: 'Pollo asado con especias secretas de asesino', peso: 450, disponibilidad: 'Disponible', calificacion: 5, calorias: 500 },
  { _id: 49, nombre: 'Sopa de Mariscos de Master Chief', tipo: 'Sopa', precio: 20000, unidades: 9, descripcion: 'Sopa de mariscos con ingredientes del espacio', peso: 400, disponibilidad: 'Pocas unidades', calificacion: 5, calorias: 600 },
  { _id: 50, nombre: 'Pizza de Vegetales de Zelda', tipo: 'Pizza', precio: 18000, unidades: 8, descripcion: 'Pizza de vegetales con toque legendario', peso: 500, disponibilidad: 'Pocas unidades', calificacion: 4, calorias: 500 }
]);

//db.Restaurante_Padilla.find({}).limit(8);

//db.Restaurante_Padilla.find({ precio: { $gt: 9000 } }); // mostrar los productos con precio mayor a 9000
//db.Restaurante_Padilla.find({ precio: { $gt: 15000 } }); //mostrar los productos con precio mayor a 15000
//db.Restaurante_Padilla.find({ peso: { $eq: 200 } }); //muestra los productos con peso igual a 200 gamos 
//db.Restaurante_Padilla.find({ calificacion: { $eq: 5 } }); //muestra los productos con calificacion de 5 puntos
//db.Restaurante_Padilla.find({ unidades: { $gte: 12 } }); // muestra los productos que tengas igual o mas de 12 unidades
//db.Restaurante_Padilla.find({ calorias: { $gte: 600 } }); // muestra los productos que tengan 600 o mas calorias 
//db.Restaurante_Padilla.find({ calorias: { $lt: 500 } }); // muestra los productos con calorias menores a 500
//db.Restaurante_Padilla.find({ precio: { $lte: 12000 } }); // muestra los productos cuyo precio es menor a 12000
//db.Restaurante_Padilla.find({ calificacion: { $ne: 5 } }); //muestra los productos con calificacion diferente de 5 
//db.Restaurante_Padilla.find({precio: { $in: [8000,11000] }}); //muestra los productos cuyo precio esta en el rango entre 8000 y 11000
//db.Restaurante_Padilla.find({$or: [{ precio: { $lt: 20000 } },{ unidades: { $eq: 12 } }]}); //muestra los productos cuyo precio sea menor a 20000 o las unidades sean igual a 12
//db.Restaurante_Padilla.find({$and: [{ precio: { $lt: 15000 } },{ unidades: { $eq: 10 } }]});// muetsra los productos cuyo precio sea menor a 15000 y sus unidades sean 10
//db.Restaurante_Padilla.find({ calificacion: { $gte: 4 } }); //Muestra los productos con calificación de 4 o más
//db.Restaurante_Padilla.find({ $and: [{ precio: { $gte: 9000 } }, { precio: { $lte: 15000 } }] }); //Muestra los productos con un precio entre 9000 y 15000
//db.Restaurante_Padilla.find({ unidades: { $gte: 10, $lte: 20 } });//Muestra los productos con unidades entre 10 y 20
//db.Restaurante_Padilla.find({ peso: { $gte: 300 } });//Muestra los productos con peso mayor o igual a 300 gramos
//db.Restaurante_Padilla.find({ $or: [{ calorias: { $lt: 400 } }, { calificacion: { $eq: 5 } }] });//Muestra los productos con calorías menores a 400 o calificación de 5
//db.Restaurante_Padilla.find({ $and: [{ precio: { $gt: 10000 } }, { precio: { $lt: 20000 } }] });//Muestra los productos cuyo precio es mayor a 10000 y menor a 20000
//db.Restaurante_Padilla.find({ $and: [{ peso: { $lt: 350 } }, { unidades: { $gt: 12 } }] });//Muestra los productos cuyo peso es menor a 350 gramos y tienen más de 12 unidades
//db.Restaurante_Padilla.find({ $and: [{ calorias: { $gt: 450 } }, { precio: { $lt: 17000 } }] });//Muestra los productos con calorías mayores a 450 y precio menor a 17000