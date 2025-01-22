import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    jobs: [],
};

const jobSlice = createSlice({
    name: 'jobs',
    initialState,
    reducers: {
        addJob: (state, action) => {
            state.jobs.push({ ...action.payload, id: Date.now() });
        },
        deleteJob: (state, action) => {
            state.jobs = state.jobs.filter((job) => job.id !== action.payload);
        },
    },
});

export const { addJob, deleteJob } = jobSlice.actions;
export default jobSlice.reducer;
