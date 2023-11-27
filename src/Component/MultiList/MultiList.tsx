import Article from "./Article";

const MultiList = () => {
  const articleContainer = [
    {
      heading: "First Article",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam officiis id illum quaerat aliquid veniam modi beatae totam, sapiente accusamus.",
    },
    {
      heading: "Second Article",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam officiis id illum quaerat aliquid veniam modi beatae totam, sapiente accusamus.",
    },
    {
      heading: "Thread Article",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam officiis id illum quaerat aliquid veniam modi beatae totam, sapiente accusamus.",
    },
    {
      heading: "Fourth Article",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam officiis id illum quaerat aliquid veniam modi beatae totam, sapiente accusamus.",
    },
    {
      heading: "Firth Article",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam officiis id illum quaerat aliquid veniam modi beatae totam, sapiente accusamus.",
    },
  ];

  return (
    <div>
      {articleContainer.map((item) => (
        <Article
          key={item.heading}
          heading={item.heading}
          detail={item.detail}
        />
      ))}
    </div>
  );
};

export default MultiList;
