import React, { FC, memo } from "react";

type TLayoutProps = {
  modal: React.ReactNode;
  children: React.ReactNode;
}

const Layout:FC<TLayoutProps> = ({modal, children}) => {
  return (
    <>
      {modal}
      {children}
    </>
  )
}

export default memo(Layout);
