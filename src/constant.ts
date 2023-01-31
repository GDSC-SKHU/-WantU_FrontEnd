interface Props {
  imgSrc: string;
  name: string;
}

interface List {
  id: number;
  link: string[];
  name: string;
  price: string[];
}

interface ListArray {
  Store: List[];
}

export type { Props, ListArray, List };
