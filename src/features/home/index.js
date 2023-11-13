import { DataTable } from "mantine-datatable";
import { useQueryProdutcts } from "./service";
import { useState } from "react";
import { ActionIcon, Group, Text } from "@mantine/core";
import { IconEye } from "@tabler/icons-react";
 
const HomeFeature = () => {
  const [page, setPage] = useState(1);
  const [skip, setSkip] = useState(0);
 
  const onHandleChangePage = (page) => {
    const from = (page - 1) * 10;
    setPage(page)
    setSkip(from)
  }
 
  const { data, isFetching } = useQueryProdutcts(skip);
 
  return (
    <main>
      <h1>Halaman Home</h1>
      <section>
        <DataTable
          withBorder
          minHeight={180}
          columns={[
            {
              accessor: 'title',
              title: 'Title',
              width: 160,
            },
            {
              accessor: 'category',
              title: 'Category',
              width: 160,
            },
            {
              accessor: 'description',
              title: 'Description',
              width: 160,
            },
            {
              accessor: 'actions',
              title: <Text>Aksi</Text>,
              textAlignment: 'center',
              width: 80,
              render: (data) => (
                <Group spacing={4} position="center" noWrap>
                  <ActionIcon color="blue" onClick={() => console.log(true, data)}>
                    <IconEye size={16} />
                  </ActionIcon>
                </Group>
              ),
            },
          ]}
          records={data?.data?.products}
          fetching={isFetching}
          totalRecords={data?.data?.totalData}
          recordsPerPage={10}
          page={page}
          onPageChange={(p) => onHandleChangePage(p)}
        />
      </section>
    </main>
  )
}
 
export default HomeFeature;