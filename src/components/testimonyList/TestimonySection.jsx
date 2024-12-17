import TestimonyList from "./TestimonyList";

export default function TestimonySection({
  title,
  divStyles,
  titleStyles,
  listStyles,
  listItemStyles,
  listItemTitleStyles,
  descriptionStyles,
}) {
  return (
    <div className={divStyles}>
      <h1 className={titleStyles}>{title}</h1>
      <TestimonyList
        listStyles={listStyles}
        listItemStyles={listItemStyles}
        titleStyles={listItemTitleStyles}
        descriptionStyles={descriptionStyles}
      />
    </div>
  );
}
