import { FC } from 'react';

interface IstackProps {
  children: React.ReactNode;
  pos?: string;
}

const Stack: FC<IstackProps> = ({ children, pos }) => (
  <div
    className="stack"
    style={{
      justifyContent: pos === 'center' ? 'center' : `flex-${pos}`,
    }}>
    {children}
  </div>
);

export default Stack;
