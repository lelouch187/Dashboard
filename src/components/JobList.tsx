import { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectCard } from '../redux/slice/cardSlice';
import JobPosition from './JobPosition';

const JobList: FC = () => {
  const data = useSelector(selectCard)
  return (
    <div className="job-list">
      {data.map((item) => (
        <JobPosition key={item.id} badge={item} />
      ))}
    </div>
  );
};

export default JobList;
