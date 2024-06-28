interface IMarriedDetails<T> {
  name: string;
  husband: T;
}

const Shanto: IMarriedDetails<string> = {
  name: "Sanjida Tanjir",
  husband: "Shanto",
};

type MarriedInfoTuple<T, S> = [T, S];
type WifeDetailes<W> = {
  wife: W;
};

const relation: MarriedInfoTuple<IMarriedDetails<string>, WifeDetailes<string>> = [
  {
    name: "Sanjida Tanjir",
    husband: "Shanto",
  },
  {
    wife: "Shanto Islam",
  },
];
