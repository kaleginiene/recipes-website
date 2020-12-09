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
    <S.Section background={background}>
      {fullWidth ? (
        children
      ) : (
        <S.Container background={containerBackground} width={width}>
          {children}
        </S.Container>
      )}
    </S.Section>
  );
}

export default Section;
