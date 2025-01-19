import * as S from "./DeleteButton.style";
import * as Icon from "../../components/Icon";
import { useEffect, useRef, useState } from "react";
import Button from "../Button/Button";

interface Props extends Icon.Props {
  conFirmMessage?: string;
  callback?: () => void;
}

export default function DeleteButton({ color, size, conFirmMessage, callback }: Props) {
  const [modalState, setModalState] = useState<boolean>(false);

  const handleModalOpen = () => {
    setModalState(true);
  };

  const handleModalClose = () => {
    setModalState(false);
  };

  const DeleteModal = () => {
    const modalRef = useRef<HTMLDivElement | null>(null);

    const handleClickComfirm = () => {
      callback && callback();
      handleModalClose();
    };

    const handleClickCancel = () => {
      handleModalClose();
    };

    const handleClickModalOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current?.contains(e.target as Node)) {
        handleModalClose();
      }
    };

    useEffect(() => {
      document.addEventListener("mousedown", handleClickModalOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickModalOutside);
      };
    }, []);

    return (
      <>
        <S.Overlay />
        <S.Wrapper ref={modalRef}>
          <S.MessageBox>{conFirmMessage}</S.MessageBox>
          <S.ButtonBox>
            <Button
              display="flex"
              size="medium"
              type="border"
              onClick={handleClickComfirm}
            >
              확인
            </Button>
            <Button display="flex" size="medium" type="fill" onClick={handleClickCancel}>
              취소
            </Button>
          </S.ButtonBox>
        </S.Wrapper>
      </>
    );
  };

  return (
    <>
      {modalState && <DeleteModal />}
      <S.IconWrapper onClick={() => handleModalOpen()}>
        <Icon.Trash size={size} color={color} />
      </S.IconWrapper>
    </>
  );
}
