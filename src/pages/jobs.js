import { useCallback, useMemo, useState } from 'react';
import Head from 'next/head';
import { subDays, subHours } from 'date-fns';
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import ArrowUpOnSquareIcon from '@heroicons/react/24/solid/ArrowUpOnSquareIcon';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import { Box, Button, Container, Stack, SvgIcon, Typography } from '@mui/material';
import { useSelection } from 'src/hooks/use-selection';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { JobsTable } from 'src/sections/jobs/jobs-table';
import { JobsSearch } from 'src/sections/jobs/jobs-search';
import { applyPagination } from 'src/utils/apply-pagination';

const now = new Date();

const data = [
  {
    id: '5e887ac47eed253091be10cb',
    address: {
      city: 'Cleveland',
      country: 'USA',
      state: 'Ohio',
      street: '2849 Fulton Street'
    },
    avatar: '/assets/avatars/avatar-carson-darrin.png',
    createdAt: subDays(subHours(now, 7), 1).getTime(),
    job_name: 'Data Analyt Intern',
    company_name: 'Goldman Sachs',
    job_type: 'Intern',
    job_link: 'https://www.goldmansachs.com/careers/students/programs/americas/new-analyst-program.html'
  },
  {
    id: '5e887b209c28ac3dd97f6db5',
    address: {
      city: 'Cleveland',
      country: 'USA',
      state: 'Ohio',
      street: '2849 Fulton Street'
    },
    avatar: '/assets/avatars/avatar-carson-darrin.png',
    createdAt: subDays(subHours(now, 7), 1).getTime(),
    job_name: 'Data Analyt Intern',
    company_name: 'Goldman Sachs',
    job_type: 'Intern',
    job_link: 'https://www.goldmansachs.com/careers/students/programs/americas/new-analyst-program.html'
  },
  {
    id: '5e887b7602bdbc4dbb234b27',
    address: {
      city: 'Cleveland',
      country: 'USA',
      state: 'Ohio',
      street: '2849 Fulton Street'
    },
    avatar: '/assets/avatars/avatar-carson-darrin.png',
    createdAt: subDays(subHours(now, 7), 1).getTime(),
    job_name: 'Data Analyt Intern',
    company_name: 'Goldman Sachs',
    job_type: 'Intern',
    job_link: 'https://www.goldmansachs.com/careers/students/programs/americas/new-analyst-program.html'
  },
  {
    id: '5e86809283e28b96d2d38537',
    address: {
      city: 'Cleveland',
      country: 'USA',
      state: 'Ohio',
      street: '2849 Fulton Street'
    },
    avatar: '/assets/avatars/avatar-carson-darrin.png',
    createdAt: subDays(subHours(now, 7), 1).getTime(),
    job_name: 'Data Analyt Intern',
    company_name: 'Goldman Sachs',
    job_type: 'Full Time',
    job_link: 'https://www.goldmansachs.com/careers/students/programs/americas/new-analyst-program.html'
  },
  {
    id: '5e86805e2bafd54f66cc95c3',
    address: {
      city: 'Cleveland',
      country: 'USA',
      state: 'Ohio',
      street: '2849 Fulton Street'
    },
    avatar: '/assets/avatars/avatar-carson-darrin.png',
    createdAt: subDays(subHours(now, 7), 1).getTime(),
    job_name: 'Data Analyt Intern',
    company_name: 'Goldman Sachs',
    job_type: 'Full Time',
    job_link: 'https://www.goldmansachs.com/careers/students/programs/americas/new-analyst-program.html'
  },
  {
    id: '5e887a1fbefd7938eea9c981',
    address: {
      city: 'Cleveland',
      country: 'USA',
      state: 'Ohio',
      street: '2849 Fulton Street'
    },
    avatar: '/assets/avatars/avatar-carson-darrin.png',
    createdAt: subDays(subHours(now, 7), 1).getTime(),
    job_name: 'Data Analyt Intern',
    company_name: 'Goldman Sachs',
    job_type: 'Full Time',
    job_link: 'https://www.goldmansachs.com/careers/students/programs/americas/new-analyst-program.html'
  },
  {
    id: '5e887d0b3d090c1b8f162003',
    address: {
      city: 'Cleveland',
      country: 'USA',
      state: 'Ohio',
      street: '2849 Fulton Street'
    },
    avatar: '/assets/avatars/avatar-carson-darrin.png',
    createdAt: subDays(subHours(now, 7), 1).getTime(),
    job_name: 'Data Analyt Intern',
    company_name: 'Goldman Sachs',
    job_type: 'Contract',
    job_link: 'https://www.goldmansachs.com/careers/students/programs/americas/new-analyst-program.html'
  },
  {
    id: '5e88792be2d4cfb4bf0971d9',
    address: {
      city: 'Cleveland',
      country: 'USA',
      state: 'Ohio',
      street: '2849 Fulton Street'
    },
    avatar: '/assets/avatars/avatar-carson-darrin.png',
    createdAt: subDays(subHours(now, 7), 1).getTime(),
    job_name: 'Data Analyt Intern',
    company_name: 'Goldman Sachs',
    job_type: 'Contract',
    job_link: 'https://www.goldmansachs.com/careers/students/programs/americas/new-analyst-program.html'
  },
  {
    id: '5e8877da9a65442b11551975',
    address: {
      city: 'Cleveland',
      country: 'USA',
      state: 'Ohio',
      street: '2849 Fulton Street'
    },
    avatar: '/assets/avatars/avatar-carson-darrin.png',
    createdAt: subDays(subHours(now, 7), 1).getTime(),
    job_name: 'Data Analyt Intern',
    company_name: 'Goldman Sachs',
    job_type: 'Contract',
    job_link: 'https://www.goldmansachs.com/careers/students/programs/americas/new-analyst-program.html'
  },
  {
    id: '5e8680e60cba5019c5ca6fda',
    address: {
      city: 'Cleveland',
      country: 'USA',
      state: 'Ohio',
      street: '2849 Fulton Street'
    },
    avatar: '/assets/avatars/avatar-carson-darrin.png',
    createdAt: subDays(subHours(now, 7), 1).getTime(),
    job_name: 'Data Analyt Intern',
    company_name: 'Goldman Sachs',
    job_type: 'Contract',
    job_link: 'https://www.goldmansachs.com/careers/students/programs/americas/new-analyst-program.html'
  },
];

const useCustomers = (page, rowsPerPage) => {
  return useMemo(
    () => {
      return applyPagination(data, page, rowsPerPage);
    },
    [page, rowsPerPage]
  );
};

const useCustomerIds = (customers) => {
  return useMemo(
    () => {
      return customers.map((customer) => customer.id);
    },
    [customers]
  );
};

const Page = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const customers = useCustomers(page, rowsPerPage);
  const customersIds = useCustomerIds(customers);
  const customersSelection = useSelection(customersIds);

  const handlePageChange = useCallback(
    (event, value) => {
      setPage(value);
    },
    []
  );

  const handleRowsPerPageChange = useCallback(
    (event) => {
      setRowsPerPage(event.target.value);
    },
    []
  );

  return (
    <>
      <Head>
        <title>
          Career | Job Positions
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <Stack
              direction="row"
              justifyContent="space-between"
              spacing={4}
            >
              <Stack spacing={1}>
                <Typography variant="h4">
                  Job Positions
                </Typography>
                <Stack
                  alignItems="center"
                  direction="row"
                  spacing={1}
                >
                  <Button
                    color="inherit"
                    startIcon={(
                      <SvgIcon fontSize="small">
                        <ArrowUpOnSquareIcon />
                      </SvgIcon>
                    )}
                  >
                    Import
                  </Button>
                  <Button
                    color="inherit"
                    startIcon={(
                      <SvgIcon fontSize="small">
                        <ArrowDownOnSquareIcon />
                      </SvgIcon>
                    )}
                  >
                    Export
                  </Button>
                </Stack>
              </Stack>
              <div>
                <Button
                  startIcon={(
                    <SvgIcon fontSize="small">
                      <PlusIcon />
                    </SvgIcon>
                  )}
                  variant="contained"
                >
                  Add
                </Button>
              </div>
            </Stack>
            <JobsSearch />
            <JobsTable
              count={data.length}
              items={customers}
              onDeselectAll={customersSelection.handleDeselectAll}
              onDeselectOne={customersSelection.handleDeselectOne}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleRowsPerPageChange}
              onSelectAll={customersSelection.handleSelectAll}
              onSelectOne={customersSelection.handleSelectOne}
              page={page}
              rowsPerPage={rowsPerPage}
              selected={customersSelection.selected}
            />
          </Stack>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
