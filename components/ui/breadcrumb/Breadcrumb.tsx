import { BsChevronRight } from 'react-icons/bs';

type BreadcrumbProps = {
  path: string[];
};

export const Breadcrumb = ({ path }: BreadcrumbProps) => {
  const HOME = ['Home'];
  path = HOME.concat(path);
  return (
    <div className="flex gap-3 items-center p-8">
      {path.map((p: string, id: number) => (
        <div key={id} className="flex gap-3 items-center">
          {id == 0 ? (
            <span className="text-red-500 font-bold">{p}</span>
          ) : (
            <span>{p}</span>
          )}
          {id !== path.length - 1 && <BsChevronRight className="h-3 w-3" />}
        </div>
      ))}
    </div>
  );
};
