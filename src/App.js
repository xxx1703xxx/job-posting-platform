import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import JobList from './components/JobList/JobList';
import JobDetails from './components/JobDetails/ JobDetails';
import JobForm from './components/JobForm';


const { Header, Content, Footer } = Layout;

const App = () => {
    const [jobs, setJobs] = useState([]);

    const handleAddJob = (job) => {
        setJobs([...jobs, { ...job, id: Date.now() }]);
    };

    return (
        <Router>
            <Layout>
                <Header>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Link to="/">Home</Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/add">Post Job</Link>
                        </Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '20px' }}>
                    <Routes>
                        <Route
                            path="/"
                            element={<JobList jobs={jobs} />}
                        />
                        <Route
                            path="/add"
                            element={<JobForm onSubmit={handleAddJob} />}
                        />
                        <Route
                            path="/details/:id"
                            element={<JobDetails jobs={jobs} />}
                        />
                    </Routes>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Job Posting Platform ©2025</Footer>
            </Layout>
        </Router>
    );
};

export default App;

