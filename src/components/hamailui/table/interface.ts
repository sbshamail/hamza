export interface CustomRenderType {
  row: any; // The entire row item
  index: number; // The index of the row
  data: any[]; // The data array (if needed)
  cell: any; // The value of the cell being rendered
}

export interface ColumnType {
  accessor?: string; // Path to the property in item
  render?: (props: CustomRenderType) => React.ReactNode; // Custom render function
  type?: 'date' | 'currency' | 'chip'; // Types for handling different formats
  currency?: string; // Currency type (if applicable)
  format?: string; // Formatting options for currency
  title?: string; // Title for the column header
  edit?: true;
  className?: React.ComponentProps<'div'>['className'];
}
