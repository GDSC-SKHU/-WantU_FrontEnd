import { List } from '../constant';

export default function UseUniqueArray({ listobject }: { listobject: object }) {
  if (typeof listobject === 'undefined') {
    return;
  }
  if (listobject === null) {
    return;
  }
  const mappingNametoLink = new Map();
  const mappingNametoPrice = new Map();
  const listarr = Object.entries(listobject);
  const uniqueArray: List[] = [];
  function getUniqueArray() {
    listarr.forEach((list, index) => {
      if (index % 4 == 0) {
        uniqueArray.push(list[1]);
        mappingNametoLink.set(list[1].name, Array(list[1].link));
        mappingNametoPrice.set(list[1].name, Array(String(list[1].price)));
      } else {
        const getPrice: string[] = mappingNametoPrice.get(list[1].name);
        const getLink: string[] = mappingNametoLink.get(list[1].name);
        getLink.push(list[1].link);
        getPrice.push(String(list[1].price));
        mappingNametoLink.set(list[1].name, getLink);
        mappingNametoPrice.set(list[1].name, getPrice);
      }
    });
  }

  getUniqueArray();
  uniqueArray.forEach((eachdata) => {
    eachdata.link = mappingNametoLink.get(eachdata.name);
    eachdata.price = mappingNametoPrice.get(eachdata.name);
  });

  return uniqueArray;
}
