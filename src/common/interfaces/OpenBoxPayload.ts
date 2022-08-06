export interface OpenBoxPayload {
  boxOpenings: {
    id: string;
    itemVariant: {
      id: string;
      name: string;
      value: number;
    };
  };
}
