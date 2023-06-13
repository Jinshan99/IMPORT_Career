import Head from 'next/head';
import ArrowUpOnSquareIcon from '@heroicons/react/24/solid/ArrowUpOnSquareIcon';
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import {
    Box,
    Button,
    Container,
    Pagination,
    Stack,
    SvgIcon,
    Typography,
    Unstable_Grid2 as Grid
} from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { ResumeCard } from 'src/sections/resume/resume-card';
import { ResumesSearch } from 'src/sections/resume/resume-search';

const resumes = [
    {
        id: '2569ce0d517a7f06d3ea1f24',
        createdAt: '27/03/2019',
        description: 'Use our professional online resume builder to craft a resume that gets you hired. Take the guesswork out of your resume. Create a modern, professional resume in 12 minutes',
        logo: '/assets/logos/beamjobs.png',
        title: 'Beamjobs',
        link: 'https://www.beamjobs.com/',
        downloads: 'Application'
    },
    {
        id: 'ed2b900870ceba72d203ec15',
        createdAt: '31/03/2019',
        description: 'Use our professional online resume builder to craft a resume that gets you hired. Take the guesswork out of your resume. Create a modern, professional resume in 12 minutes',
        logo: '/assets/logos/beamjobs.png',
        title: 'Beamjobs',
        link: 'https://www.beamjobs.com/',
        downloads: 'Application'
    },
    {
        id: 'a033e38768c82fca90df3db7',
        createdAt: '03/04/2019',
        description: 'Use our professional online resume builder to craft a resume that gets you hired. Take the guesswork out of your resume. Create a modern, professional resume in 12 minutes',
        logo: '/assets/logos/beamjobs.png',
        title: 'Beamjobs',
        link: 'https://www.beamjobs.com/',
        downloads: 'Application'
    },
    {
        id: '1efecb2bf6a51def9869ab0f',
        createdAt: '04/04/2019',
        description: 'Use our professional online resume builder to craft a resume that gets you hired. Take the guesswork out of your resume. Create a modern, professional resume in 12 minutes',
        logo: '/assets/logos/beamjobs.png',
        title: 'Beamjobs',
        link: 'https://www.beamjobs.com/',
        downloads: 'Application'
    },
    {
        id: '1ed68149f65fbc6089b5fd07',
        createdAt: '04/04/2019',
        description: 'Use our professional online resume builder to craft a resume that gets you hired. Take the guesswork out of your resume. Create a modern, professional resume in 12 minutes',
        logo: '/assets/logos/beamjobs.png',
        title: 'Beamjobs',
        link: 'https://www.beamjobs.com/',
        downloads: 'Application'
    },
    {
        id: '5dab321376eff6177407e887',
        createdAt: '04/04/2019',
        description: 'Use our professional online resume builder to craft a resume that gets you hired. Take the guesswork out of your resume. Create a modern, professional resume in 12 minutes',
        logo: '/assets/logos/beamjobs.png',
        title: 'Beamjobs',
        link: 'https://www.beamjobs.com/',
        downloads: 'Application'
    }
];

const Page = () => (
    <>
        <Head>
            <title>
                Companies | Devias Kit
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
                                Resumes
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
                    <ResumesSearch />
                    <Grid
                        container
                        spacing={3}
                    >
                        {resumes.map((resume) => (
                            <Grid
                                xs={12}
                                md={6}
                                lg={4}
                                key={resume.id}
                            >
                                <a href={resume.link} target="_blank" style={{ textDecoration: 'none' }}><ResumeCard resume={resume} /></a>
                            </Grid>
                        ))}
                    </Grid>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                        <Pagination
                            count={3}
                            size="small"
                        />
                    </Box>
                </Stack>
            </Container>
        </Box>
    </>
);

Page.getLayout = (page) => (
    <DashboardLayout>
        {page}
    </DashboardLayout>
);

export default Page;
