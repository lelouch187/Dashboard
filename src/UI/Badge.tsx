import { FC } from 'react';
// @ts-ignore
import { ReactComponent as Remove } from '../assets/images/icon-remove.svg';

export enum VariantType {
  CLERABLE = 'clearable',
  BASIC = 'basic',
  ROUNDED = 'rounded',
}
export enum ColorSchemeType {
  LIGHT = 'light',
  PRIMARY = 'primary',
  DARK = 'dark',
}

interface IBadge {
  variant?: VariantType;
  colorScheme?: ColorSchemeType;
  children: string;
  onClear?:(e:React.MouseEvent<HTMLDivElement>)=>void;
  onAddBage?:(e:React.MouseEvent<HTMLDivElement>)=>void;
}

const Badge: FC<IBadge> = ({
  variant = VariantType.BASIC,
  colorScheme = ColorSchemeType.LIGHT,
  children,
  onClear,
  onAddBage
}) => (
  <div
    onClick={onAddBage}
    className={`badge badge--${variant} badge--${colorScheme}`}>
    <span>{children}</span>
    {variant === 'clearable' && (
      <div 
      onClick={onClear}
      className="badge-remover">
        <Remove />
      </div>
    )}
  </div>
);

export default Badge;
