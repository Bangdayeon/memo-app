import styles from "./MemoCard.module.css";

interface MemoCardProps {
  contents: string;
  isListView: boolean;
  onDelete: () => void;
  onClick: () => void;
}

const MemoCard = ({
  contents,
  isListView,
  onDelete,
  onClick,
}: MemoCardProps) => {
  return (
    <div
      className={isListView ? styles.listView : styles.cardView}
      onClick={onClick}
    >
      <p className={styles.contents}>{contents}</p>
      <div className={styles.buttonContainer}>
        <button
          className={styles.button}
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
        >
          🗑️
        </button>
      </div>
    </div>
  );
};

export default MemoCard;
