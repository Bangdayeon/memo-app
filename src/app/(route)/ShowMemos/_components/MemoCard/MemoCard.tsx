import styles from "./MemoCard.module.css";

interface MemoCardProps {
  contents: string;
  isListView: boolean;
  onDelete: () => void;
  openModal: () => void;
}

const MemoCard = ({
  contents,
  isListView,
  onDelete,
  openModal,
}: MemoCardProps) => {
  return (
    <div
      className={isListView ? styles.listView : styles.cardView}
      onClick={openModal}
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
