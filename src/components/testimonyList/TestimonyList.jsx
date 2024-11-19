export default function TestimonyList({
  testimonies,
  listStyles,
  listItemStyles,
  titleStyles,
  descriptionStyles,
}) {
  return (
    <ul className={listStyles}>
      {testimonies.map((testimony) => (
        <li key={testimony.id} className={listItemStyles}>
          <h2 className={titleStyles}>{testimony.author}</h2>
          <p className={descriptionStyles}>{testimony.testimony}</p>
        </li>
      ))}
    </ul>
  );
}
