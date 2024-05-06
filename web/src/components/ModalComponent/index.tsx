import {
  Button,
  Modal,
  ModalContent,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { FC, PropsWithChildren } from "react";

interface ModalComponentProps extends PropsWithChildren {
  primaryButtonLabel: string;
  secondaryButtonLabel: string;
  onPrimaryButtonPress: () => void;
  onSecondaryButtonPress: () => void;
}

export const ModalComponent: FC<ModalComponentProps> = ({
  children,
  onPrimaryButtonPress,
  onSecondaryButtonPress,
  primaryButtonLabel,
  secondaryButtonLabel,
}): JSX.Element => {
  const { isOpen, onOpenChange } = useDisclosure();
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            {children}
            <ModalFooter>
              <Button
                color="danger"
                variant="flat"
                onPress={() => {
                  onSecondaryButtonPress();
                  onClose();
                }}
              >
                {secondaryButtonLabel}
              </Button>
              <Button
                color="primary"
                onPress={() => {
                  onPrimaryButtonPress();
                  onClose();
                }}
              >
                {primaryButtonLabel}
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
