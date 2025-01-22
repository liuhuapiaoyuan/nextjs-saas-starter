
import { DataTable } from "@/components/ui/data-table"
import { columns } from "./_components/columns"
import { list } from "./action"

export default async function ProductPage() {
  const data = await list({})
  return <DataTable
    columns={columns}
    dataSource={data}
    searchableColumns={["title"]}
    rowKey="id"
  />
}
