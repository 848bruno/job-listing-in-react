

import React, { useEffect, useState, useContext } from 'react';
import { FilterProvider, FilterContext } from './context/FilterContext';
import JobCard from './components/JobCard';
import FilterBar from './components/FilterBar';
import jobsData from './data/jobs.json';
import type { Job } from './Types';

const JobList: React.FC<{ jobs: Job[] }> = ({ jobs }) => {
  const { filters } = useContext(FilterContext);

  const filterJob = (job: Job) => {
    const tags = [job.role, job.level, ...job.languages];
    return filters.every(filter => tags.includes(filter));
  };

  return (
    <div className="mt-6 space-y-6">
      {jobs.filter(filterJob).map(job => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

const App: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    setJobs(jobsData);
  }, []);

  return (
    <FilterProvider>
      <div className="bg-cyan-50 min-h-screen p-6 font-sans">
        <FilterBar />
        <JobList jobs={jobs} />
      </div>
    </FilterProvider>
  );
};

export default App;

