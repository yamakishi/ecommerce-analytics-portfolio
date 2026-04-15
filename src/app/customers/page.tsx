import { CustomerList } from '@/components/features/CustomerList';

export default function CustomersPage() {
  return (
    <>
      <div className="mb-6 flex flex-col gap-2">
        <h2 className="text-3xl font-bold tracking-tight">
          Gestão de Clientes
        </h2>
        <p className="text-muted-foreground">
          Visualize o histórico de compras e pesquise clientes na sua base de
          dados.
        </p>
      </div>

      <CustomerList />
    </>
  );
}
