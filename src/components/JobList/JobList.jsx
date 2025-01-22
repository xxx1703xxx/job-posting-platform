import React from 'react';
import { List, Button } from 'antd';
import { Link } from 'react-router-dom';

const JobList = ({ jobs }) => {
    return (
        <div>
            <h2>Job Openings</h2>
            <List
                bordered
                dataSource={jobs}
                renderItem={(job) => (
                    <List.Item>
                        <div>
                            <h3>{job.title}</h3>
                            <p>{job.description}</p>
                            <Link to={`/details/${job.id}`}>
                                <Button type="link">View Details</Button>
                            </Link>
                        </div>
                    </List.Item>
                )}
            />
        </div>
    );
};

export default JobList;
