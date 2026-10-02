import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const CARD_W = 380;
const MAIN_X = 60;
const SIDE_X = 480;
const SIDE_W = 260;
const ROW_H = 24;

function Bolt({x, y}) {
  return (
    <path
      className={styles.bolt}
      transform={`translate(${x} ${y})`}
      d="M7 0 L0 8 H5 L4 14 L11 5 H6 Z"
    />
  );
}

// A trigger: badge + WHEN / IF / THEN rows. Each row is [label, text lines].
function TriggerCard({n, x, y, w, rows, href}) {
  const lineCount = rows.reduce((sum, [, lines]) => sum + lines.length, 0);
  const h = 52 + lineCount * ROW_H;
  let lineY = y + 66;
  return (
    <a href={href} className={styles.cardLink}>
      <rect className={styles.card} x={x} y={y} width={w} height={h} rx="10" />
      <rect className={styles.badge} x={x + 14} y={y + 12} width="104" height="24" rx="12" />
      <Bolt x={x + 24} y={y + 17} />
      <text className={styles.badgeText} x={x + 42} y={y + 29}>
        TRIGGER {n}
      </text>
      {rows.map(([label, lines]) => {
        const labelY = lineY;
        const texts = lines.map((line, i) => (
          <text key={i} className={styles.value} x={x + 70} y={labelY + i * ROW_H}>
            {line}
          </text>
        ));
        lineY += lines.length * ROW_H;
        return (
          <g key={label}>
            <text className={styles.label} x={x + 16} y={labelY}>
              {label}
            </text>
            {texts}
          </g>
        );
      })}
    </a>
  );
}

// A step in your own process, not a trigger.
function Step({cx, y, w, text}) {
  return (
    <g>
      <rect className={styles.step} x={cx - w / 2} y={y} width={w} height="36" rx="18" />
      <text className={styles.stepText} x={cx} y={y + 23} textAnchor="middle">
        {text}
      </text>
    </g>
  );
}

function Arrow({d, dashed, label, lx, ly, anchor = 'start'}) {
  return (
    <g>
      <path
        className={dashed ? styles.arrowDashed : styles.arrow}
        d={d}
        markerEnd="url(#trigger-flow-arrow)"
      />
      {label && (
        <text className={styles.arrowLabel} x={lx} y={ly} textAnchor={anchor}>
          {label}
        </text>
      )}
    </g>
  );
}

// examplesUrl: page with the trigger setups. Leave empty when the diagram is on that page.
export default function TriggerFlow({examplesUrl = ''}) {
  const cx = MAIN_X + CARD_W / 2;
  const examplesBase = useBaseUrl(examplesUrl || '/');
  const link = (anchor) => (examplesUrl ? `${examplesBase}#${anchor}` : `#${anchor}`);
  return (
    <figure className={styles.figure}>
      <div className={styles.legend}>
        <span className={styles.legendItem}>
          <span className={styles.legendBadge}>⚡ TRIGGER</span>
          Runs automatically in ShopCtrl. Click a trigger to see its setup.
        </span>
        <span className={styles.legendItem}>
          <span className={styles.legendStep} />
          Step in your order process
        </span>
      </div>
      <div className={styles.scroll}>
        <svg
          className={styles.svg}
          viewBox="0 0 760 664"
          role="img"
          aria-labelledby="trigger-flow-title trigger-flow-desc">
          <title id="trigger-flow-title">Typical order flow with triggers</title>
          <desc id="trigger-flow-desc">
            The customer pays, trigger 1 allocates stock. If all order rows are in stock,
            trigger 2 creates the shipment. If not, trigger 3 creates a backorder alert,
            and trigger 2 creates the shipment once the stock arrives. After the warehouse
            ships the order, trigger 4 creates the invoice and emails it.
          </desc>
          <defs>
            <marker
              id="trigger-flow-arrow"
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="7"
              markerHeight="7"
              orient="auto-start-reverse">
              <path className={styles.arrowHead} d="M0 0 L10 5 L0 10 Z" />
            </marker>
          </defs>

          <Step cx={cx} y={10} w={220} text="Customer pays the order" />
          <Arrow d={`M${cx} 46 V68`} />

          <TriggerCard
            n={1}
            x={MAIN_X}
            y={72}
            w={CARD_W}
            href={link("allocate-stock-after-payment")}
            rows={[
              ['WHEN', ['Order payments done']],
              ['THEN', ['Allocate stock']],
            ]}
          />
          <Arrow d={`M${cx} 172 V196`} />

          <path className={styles.decision} d={`M${cx} 200 L${cx + 120} 242 L${cx} 284 L${cx - 120} 242 Z`} />
          <text className={styles.decisionText} x={cx} y={238} textAnchor="middle">
            All order rows
          </text>
          <text className={styles.decisionText} x={cx} y={256} textAnchor="middle">
            in stock?
          </text>

          <Arrow d={`M${cx + 120} 242 H${SIDE_X - 4}`} label="No" lx={cx + 150} ly={234} />
          <TriggerCard
            n={3}
            x={SIDE_X}
            y={180}
            w={SIDE_W}
            href={link("create-an-alert-for-backorders")}
            rows={[
              ['WHEN', ['Order has one or more', 'order rows not in stock']],
              ['THEN', ['Create alert']],
            ]}
          />

          <Arrow d={`M${cx} 284 V312`} label="Yes" lx={cx + 10} ly={302} />
          <TriggerCard
            n={2}
            x={MAIN_X}
            y={316}
            w={CARD_W}
            href={link("create-a-shipment-when-stock-is-fully-allocated")}
            rows={[
              ['WHEN', ['Order stock status changed']],
              ['IF', ['Base status is Finished']],
              ['THEN', ['Create shipment']],
            ]}
          />
          <Arrow
            dashed
            d={`M${SIDE_X + SIDE_W / 2} 304 V376 H${MAIN_X + CARD_W + 4}`}
            label="Stock arrives"
            lx={SIDE_X + SIDE_W / 2 + 10}
            ly={346}
          />

          <Arrow d={`M${cx} 440 V464`} />
          <Step cx={cx} y={468} w={280} text="Warehouse picks, packs and ships" />
          <Arrow d={`M${cx} 504 V526`} />

          <TriggerCard
            n={4}
            x={MAIN_X}
            y={530}
            w={CARD_W}
            href={link("create-an-invoice-when-an-order-is-shipped")}
            rows={[
              ['WHEN', ['Shipment shipped']],
              ['THEN', ['1. Create invoice for shipped items', '2. Send email with the invoice']],
            ]}
          />
        </svg>
      </div>
    </figure>
  );
}
