import dynamic from 'next/dynamic';
import CounterModal from '../CounterModal/CounterModal';
import MemoModal from '../MemoModal/MemoModal';

type ModalType = 
    | null
    | { type:"memo";
        initialText?: string;
        onSave?: (text: string) => void; }
    | { type:"counter";
};

interface ModalManagerProps {
    modal: ModalType;
    onClose: () => void;
}

const ModalManager = ({modal, onClose}:ModalManagerProps) => {
    if (!modal) return null;

    switch (modal.type) {
        case "memo":
            return (
                <MemoModal 
                    onClose={onClose}
                    onSave={(text) => {modal.onSave?.(text); onClose();}}
                    initialText={modal.initialText || ""} />
            );
        case "counter":
            return <CounterModal onClose={onClose} />;
        default:
            return null;
    }
};

export default ModalManager;