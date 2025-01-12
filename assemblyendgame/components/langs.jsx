import languages from "../languages.js";


export default function Langs(props) {
  
  const AllLanguages = languages.map((lang,index) => {
    // console.log(index,"and cnt",props.wrongGuessCounts);
    const isLost = index < props.wrongGuessCounts;
    console.log(isLost);
    return (
      <span
        style={{ backgroundColor: lang.backgroundColor, color: lang.color }}
        key={lang.name}
        className={ `langChip px-2 py-2 ${isLost ? "lost" :""}` }
      >
        {lang.name}
      </span>
    );
  });
  
  return (
    <section className="flex flex-wrap justify-center max-w-md mx-auto gap-1 mt-16">
      {AllLanguages}
    </section>
  );
}
