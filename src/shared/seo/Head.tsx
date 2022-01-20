import React from "react";
import NextHead from "next/head";

const Head: React.FC = () => {
  return (
    <NextHead>
      <link rel="icon" href="/logo.png" />
      <meta name="theme-color" content="#000000" />
      <meta
        name="description"
        content="Web site created using create-react-app"
      />

      <title>Ice Cream Soft</title>
      <meta name="og:type" content="website" />
      <meta property="og:site_name" content="Ice Cream Soft" />
      <meta property="og:url" content="https://icecreamsoft.online/loja" />
      <meta
        property="og:description"
        content="Ice Cream Soft - Sorvete na Pedra"
      />
      <meta name="description" content="Ice Cream Soft - Sorvete na Pedra" />
      <meta
        property="og:image"
        content="https://icecreamsoft.online/uploads/images/2021/11/whatsapp-image-2021-11-05-at-10-58-43.jpeg"
      />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@200;300;400;500;600;700&family=Roboto+Slab:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      ></link>
    </NextHead>
  );
};

export default Head;
