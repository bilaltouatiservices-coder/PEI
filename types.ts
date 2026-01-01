
export interface Module {
  id: string;
  code: string;
  title: string;
  description: string;
}

export interface Section {
  id: string;
  title: string;
  titleFr: string;
  commonModules: Module[];
  firstYearModules: Module[];
}
