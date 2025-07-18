export interface IMember {
  name: string;
  position: string;
  img: string;
  tasks: {
    title: string;
    date: string;
    desc: string;
  }[];
}

export interface IFromData {
  status: boolean;
  data: { title: string; desc: string; date: string };
}
