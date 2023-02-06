import { FC } from 'react';
import { IBadge } from '../@types/types';
import { useAppDispatch } from '../redux';
import { addBadge } from '../redux/slice/badgeSlise';
import Badge, { ColorSchemeType, VariantType } from '../UI/Badge';
import Card from '../UI/Card';
import Stack from '../UI/Stack';

interface IJobPositionProps {
  badge: IBadge;
}

const JobPosition: FC<IJobPositionProps> = ({ badge }) => {
  const badgesArr = ([] as string[]).concat(
    badge.role,
    badge.level,
    ...badge.languages,
    ...badge.tools,
  );
  const dispatch = useAppDispatch()

  return (
    <Card isFeatured={badge.featured}>
      <div className="job-position">
        <div className="job-position-info">
          <img
            className="job-position-avatar"
            src={badge.logo}
            alt={badge.company}
          />
          <div className="job-position-body">
            <div className="job-postion-company">
              <h3>{badge.company}</h3>
              {(badge.new || badge.featured) && (
                <Stack>
                  {badge.new && (
                    <Badge
                      variant={VariantType.ROUNDED}
                      colorScheme={ColorSchemeType.PRIMARY}>
                      NEW!
                    </Badge>
                  )}
                  {badge.featured && (
                    <Badge
                      variant={VariantType.ROUNDED}
                      colorScheme={ColorSchemeType.DARK}>
                      FEATURED
                    </Badge>
                  )}
                </Stack>
              )}
            </div>
            <h2 className="job-position-title">{badge.position}</h2>
            <Stack>
              <div className="job-position-meta">{badge.postedAt}</div>
              <div className="job-position-meta">{badge.contract}</div>
              <div className="job-position-meta">{badge.location}</div>
            </Stack>
          </div>
        </div>
        <Stack>
          {badgesArr.map((item) => (
            <Badge 
              onAddBage={()=>dispatch(addBadge(item))}
              key={item}>
              {item}
            </Badge>
          ))}
        </Stack>
      </div>
    </Card>
  );
};

export default JobPosition;
