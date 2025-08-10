export default function Icon({ name }) {
  return (
    <span className={`svg-icon svg-icon-${name}`}>
      <svg aria-hidden="true">
        <use xlinkHref={`#icon-${name}`} />
      </svg>
    </span>
  );
}
