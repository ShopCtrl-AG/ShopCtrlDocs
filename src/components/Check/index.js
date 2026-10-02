import styles from './styles.module.css';

export default function Check({label = 'Supported'}) {
  return (
    <svg
      className={styles.check}
      viewBox="0 0 16 16"
      role="img"
      aria-label={label}>
      <title>{label}</title>
      <path
        d="M3 8.5l3.2 3.2L13 4.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
