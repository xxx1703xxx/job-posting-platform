import React from 'react';
import { useParams } from 'react-router-dom';

const JobDetails = ({ jobs }) => {
    const { id } = useParams();
    const job = jobs.find((job) => job.id === Number(id));

    if (!job) {
        return <h2>Job not found!</h2>;
    }

    return (
        <div>
            <h2>{job.title}</h2>
            <p>{job.description}</p>
        </div>
    );
};

export default JobDetails;
