import { FC } from 'react';

interface ICard {
  children: React.ReactNode;
  isFeatured?: boolean;
  className?: string;
}

const Card: FC<ICard> = ({ children, isFeatured, className }) => {
  return (
    <div
      className={`card${isFeatured ? ' card--featured' : ''}${
        className ? ' ' + className : ''
      }`}>
      {children}
    </div>
  );
};

export default Card;
