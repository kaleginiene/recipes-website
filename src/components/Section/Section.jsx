import React from "react";
import * as S from "./Section.style";

function Section({
  background,
  fullWidth,
  children,
  width,
  containerBackground,
}) {
  return (
    <>
      {fullWidth ? (
        <S.Section background={background}>{children}</S.Section>
      ) : (
        <S.Container background={containerBackground} width={width}>
          {children}
        </S.Container>
      )}
    </>
  );
}

export default Section;
