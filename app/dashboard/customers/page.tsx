import CustomersTable from '@/app/ui/customers/table';
import { fetchFilteredCustomers } from '@/app/lib/data';

export default async function Page(
  props: {
    searchParams?: Promise<{
      query?: string;
    }>;
  }
) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const customers = await fetchFilteredCustomers(query);

  return (
    <div className="w-full">
      <h1 className="text-2xl">Customers</h1>
      <CustomersTable customers={customers} />
    </div>
  );
}