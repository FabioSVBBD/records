import classNames from 'classnames';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactFragment;
  type?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  type = 'primary',
}) => {
  const buttonClass = classNames(
    'px-6 py-1 text-sm font-semibold rounded-md border transition-all',
    {
      'bg-slate-50 text-slate-900 border-slate-50 hover:bg-slate-50/80 hover:border-slate-50/80':
        type === 'primary',
      'bg-transparent text-slate-50 border-transparent hover:bg-slate-900/5':
        type === 'secondary',
    }
  );

  return (
    <button onClick={onClick} className={buttonClass}>
      {children}
    </button>
  );
};
