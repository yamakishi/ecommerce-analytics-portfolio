'use client';

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { Order } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface RecentOrdersTableProps {
  data: Order[];
}

const columnHelper = createColumnHelper<Order>();

const columns = [
  columnHelper.accessor('id', { header: 'ID do Pedido' }),
  columnHelper.accessor('customerName', { header: 'Cliente' }),
  columnHelper.accessor('totalAmount', {
    header: 'Total',
    cell: (info) => `R$ ${info.getValue().toFixed(2)}`,
  }),
  columnHelper.accessor('status', {
    header: 'Status',
    cell: (info) => (
      <span className="bg-primary/10 text-primary rounded-full px-2 py-1 text-xs">
        {info.getValue()}
      </span>
    ),
  }),
];

export function RecentOrdersTable({ data }: RecentOrdersTableProps) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Pedidos Recentes</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto rounded-md border">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead key={header.id}>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
