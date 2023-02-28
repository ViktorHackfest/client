type BreadcrumbProps = {
  path: string[];
};

export const Breadcrumb = ({ path }: BreadcrumbProps) => {
  return (
    <div>
      {path.map((p: string, id: number) => (
        <div key={id}>
          <span>{p}</span>
        </div>
      ))}
    </div>
  );
};
