const RULES = [
  'Ask your guide about the culture of the locals',
  "Be respectful and don't litter",
  "It'd be nice if you could learn local's language!",
];

export const LocalRulesContainer = () => {
  return (
    <div className="my-20 px-8">
      <div className="text-xl font-bold my-2">General Rules</div>
      <div>
        {RULES.map((rule: any, id_rule: number) => (
          <div key={id_rule} className="my-10">
            <span className="bg-white border-[1px] border-red-500 rounded-full py-3 px-4">
              {id_rule + 1}
            </span>
            &nbsp;
            <span className="bg-white border-[1px] border-red-500 py-2 px-2 rounded-2xl">
              {rule}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
