import { StTableHeader } from '../';


export interface StDynamicTableHeader extends StTableHeader {
   fk?: StDynamicTableFk;
   group?: string;
   type?: Array<{ field: string; type: string }>;
   clickable?: boolean;
}

export interface StDynamicTableClickCellEvent {
   value: any;
   header: StDynamicTableHeader;
}

export interface StDynamicTableUISpecification {
   sortable?: boolean;
   styles?: {
      [key: string]: string;
   };
   fk?: StDynamicTableFk;
   group_field?: {
      view: string;
      fkTable: string;
   };
   templateRef?: string;
   visible?: boolean;
   dateFormat?: string;
   clickable?: boolean;
}


export interface StDynamicTableUserInterface {
   [key: string]: StDynamicTableUISpecification;
}

export interface StDynamicTableFk {
   table: string;
   field: string;
}
