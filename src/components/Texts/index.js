import React from "react";

import * as S from "./styles";

const Text = ({ textType, children }) => {
    const renderTextWithType = (type) => {
        if (type === "h1") {
            return <S.H1>{children}</S.H1>;
        }
        if (type === "h2") {
            return <S.H2>{children}</S.H2>;
        }
        if (type === "h3") {
            return <S.H3>{children}</S.H3>;
        }
        if (type === "h4") {
            return <S.H4>{children}</S.H4>;
        }
        if (type === "p") {
            return <S.P>{children}</S.P>;
        }
    };

    return <>{renderTextWithType(textType)}</>;
};
export default Text;
