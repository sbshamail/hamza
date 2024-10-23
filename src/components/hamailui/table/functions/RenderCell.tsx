import React from 'react';
import { currencyFormatter, dateFormat } from './utility';

interface CustomRenderType {
  row: any; // The entire row item
  index: number; // The index of the row
  data: any[]; // The data array (if needed)
  cell: any; // The value of the cell being rendered
}

interface ColumnType {
  accessor?: string; // Path to the property in item
  render?: (props: CustomRenderType) => React.ReactNode; // Custom render function
  type?: 'date' | 'currency' | 'chip'; // Types for handling different formats
  currency?: string; // Currency type (if applicable)
  format?: string; // Formatting options for currency
}
interface RowData {
  [key: string]: string | number | object | null; // Adjust as needed
}
export const renderCell = (
  item: RowData, // The entire row item
  column: ColumnType, // Column definition
  index: number, // Index of the row
  data: Record<string, any>[] // Array of all data items
) => {
  // Access nested properties using a function
  const accessors = column?.accessor?.split('.');
  let value: string | number | Record<string, any> | null = item;

  accessors?.forEach((accessor) => {
    if (value && typeof value === 'object' && value.hasOwnProperty(accessor)) {
      value = value[accessor];
    } else {
      value = null;
    }
  });
  // Check if the final value is still an object, which should be handled specially
  if (
    typeof value === 'object' &&
    value !== null &&
    !Array.isArray(value) &&
    !React.isValidElement(value)
  ) {
    // If it's an object and not handled by column.render, format it as a JSON string or handle otherwise
    value = `${JSON.stringify(value)}`;
    // Optionally, customize this to render specific properties or provide a more user-friendly display
  }

  // Check if the column has a render function
  if (column?.render && typeof column.render === 'function') {
    const renderResult = column?.render({
      row: item,
      index,
      data,
      cell: value,
    });

    // Ensure renderResult is a valid React node
    if (React.isValidElement(renderResult)) {
      return renderResult;
    }

    // Handle common render function return types
    if (typeof renderResult === 'string' || typeof renderResult === 'number') {
      return renderResult;
    }

    return <span className="text-orange-400">Invalid Render Result</span>;
  }
  if (Array.isArray(value)) {
    // Skip rendering this cell if the value is an array
    return null;
  }

  if (value === null || value === undefined) {
    return <span>‎ </span>;
  }
  if (typeof value === 'string' || typeof value === 'number') {
    switch (column.type) {
      case 'date':
        // If value is a string, ensure it's treated as a string for date formatting
        return dateFormat(value as string);
      case 'currency':
        // If value is a number, safely cast it; if it's a string, try parsing it
        const numericValue =
          typeof value === 'number' ? value : parseFloat(value);

        // Ensure the parsed value is a valid number before passing to currencyFormatter
        if (!isNaN(numericValue)) {
          return currencyFormatter(
            numericValue,
            column.currency || undefined,
            column.format
          );
        }

        return <span>Invalid Currency Value</span>; // Handle invalid number case
      default:
        return value; // Return the raw value for other cases
    }
  }
};
