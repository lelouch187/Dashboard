import { FC } from 'react';
import { IBadge } from '../@types/types';
import data from '../mock/data.json';
import JobPosition from './JobPosition';

const JobList: FC = () => {
  return (
    <div className="job-list">
      {data.map((item:IBadge) => (
        <JobPosition key={item.id} badge={item} />
      ))}
    </div>
  );
};

export { JobList };
