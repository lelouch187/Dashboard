import { FC } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../redux';
import { clearAll, removeBadge, selectBadge } from '../redux/slice/badgeSlise';
import Badge, { VariantType } from '../UI/Badge';
import Card from '../UI/Card';
import Stack from '../UI/Stack';

const FilterPanel: FC = () => {
  const badges = useSelector(selectBadge);
  const dispatch = useAppDispatch();
  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {badges.map((badge) => {
            return (
              <Badge key={badge}
                onClear={()=>dispatch(removeBadge(badge))}
                variant={VariantType.CLERABLE}>
                {badge}
              </Badge>
            );
          })}
        </Stack>
        <button onClick={() => dispatch(clearAll())} className="link">
          Clear
        </button>
      </div>
    </Card>
  );
};

export default FilterPanel;
