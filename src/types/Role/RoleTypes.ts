export interface RolesPayloadDataType {
  id?: string;
  name: string;
  permissions: string[];
}

export interface RolesEditPayloadDataType {
  id: string;
  name: string;
  permissions: string[];
}
