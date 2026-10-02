import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function initials(name) {
  return name
    .split(/\s+/)
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

function CarrierCard({name, logo, services, guide}) {
  const logoUrl = useBaseUrl(logo || '');
  return (
    <div className={styles.card}>
      <div className={styles.logo}>
        {logo ? (
          <img src={logoUrl} alt="" />
        ) : (
          <span className={styles.monogram} aria-hidden="true">
            {initials(name)}
          </span>
        )}
      </div>
      <div className={styles.name}>{name}</div>
      {services && <div className={styles.services}>{services}</div>}
      {guide && (
        <Link className={styles.guide} to={guide}>
          Setup guide →
        </Link>
      )}
    </div>
  );
}

export default function CarrierGrid({carriers}) {
  return (
    <div className={styles.grid}>
      {carriers.map((carrier) => (
        <CarrierCard key={carrier.name} {...carrier} />
      ))}
    </div>
  );
}
