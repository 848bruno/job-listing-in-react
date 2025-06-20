import React from 'react';

import { FilterContext } from '../context/FilterContext';
import type { Job } from '../Types';

const JobCard: React.FC<{ job: Job }> = ({ job }) => {
  const { addFilter } = React.useContext(FilterContext);
  const tags = [job.role, job.level, ...job.languages];

  return (
    <div className="bg-white p-6 shadow-md rounded-md border-l-4 border-cyan-500 flex flex-col md:flex-row justify-between">
      <div className="flex items-center gap-4">
        <img src={job.logo} alt={job.company} className="w-12 h-12" />
        <div>
          <div className="flex gap-2 items-center">
            <span className="text-cyan-700 font-bold">{job.company}</span>
            {job.new && <span className="bg-cyan-700 text-white text-xs px-2 rounded-full">NEW!</span>}
            {job.featured && <span className="bg-black text-white text-xs px-2 rounded-full">FEATURED</span>}
          </div>
          <h3 className="font-bold text-lg">{job.position}</h3>
          <div className="text-gray-500 text-sm">
            {`${job.postedAt} • ${job.contract} • ${job.location}`}
          </div>
        </div>
      </div>
      <div className="flex gap-2 flex-wrap items-center mt-4 md:mt-0">
        {tags.map(tag => (
          <span
            key={tag}
            className="cursor-pointer bg-cyan-100 text-cyan-700 px-2 py-1 rounded hover:bg-cyan-700 hover:text-white"
            onClick={() => addFilter(tag)}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default JobCard;
