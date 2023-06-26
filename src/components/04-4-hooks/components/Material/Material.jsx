import { useModal } from '../../hooks';
import { Button, Section } from 'styles/ui';

const EditMaterialModal = ({ onClose, onEdit }) => {
  return (
    <Section title="Modal to edit material">
      <Button
        type="button"
        onClick={() => {
          onEdit();
          onClose();
        }}
      >
        Comfirm your edit/delete
      </Button>
      <Button type="button" onClick={onClose}>
        Close
      </Button>
    </Section>
  );
};

export const Material = ({ item, onUpdate, onDelete }) => {
  const { isModalOpen, closeModal, openModal } = useModal();
  // Кастомный хук useModal закрывает в себе такую логику
  // Ее можно было писать тут вручную вот так
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const openModal = () => setIsModalOpen(true);
  // const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <p>
        <b>Description:</b> {item.title}
      </p>
      <p>
        <b>Link:</b> {item.link}
      </p>
      <Button type="button" onClick={() => onDelete(item.id)}>
        Delete
      </Button>
      <Button type="button" onClick={openModal}>
        Edit
      </Button>
      {isModalOpen && (
        <EditMaterialModal
          onClose={closeModal}
          onEdit={() => onUpdate({ id: item.id, title: Date.now() })}
        />
      )}
    </div>
  );
};
