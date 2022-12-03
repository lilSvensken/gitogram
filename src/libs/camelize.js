/** ф-я для преобразования всех ключей объкекта из under_score в camelCase
 * @param { any } entity - любая сущность любого типа данных, внутри которой будет преобразованы все ключи всех объектов
 * */
export function camelizeObjFields(entity) {
  if (Array.isArray(entity)) {
    const newArr = [];
    entity.forEach((item) => {
      newArr.push(camelizeObjFields(item));
    });
    return newArr;
  } else if (entity && typeof entity === "object") {
    const result = {};
    Object.keys(entity).forEach((key) => {
      const camelizeKey = key
        .split("_")
        .map((word, index) =>
          index === 0 ? word : word[0].toUpperCase() + word.slice(1)
        )
        .join("");
      result[camelizeKey] = camelizeObjFields(entity[key]);
    });
    return result;
  } else {
    return entity;
  }
}

// // второй вариант функции
// export function camelizeObjFields2(entity) {
//   Object.keys(entity).forEach((key) => {
//     if (typeof entity[key] == "object" && entity[key] != null) {
//       if (Array.isArray(entity[key]))
//         entity[key].forEach((x) => camelizeObjFields(x));
//       camelizeObjFields(entity[key]);
//     }
//     let newKey = key.replace(/(_[a-z])/g, (x) => x.slice(1).toUpperCase());
//     if (newKey !== key) {
//       entity[newKey] = entity[key];
//       delete entity[key];
//     }
//   });
//   return entity;
// }
