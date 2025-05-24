"use client";

import React from 'react';

interface GoogleFormEmbedProps {
  formSrc: string;
  width?: string;
  height?: string;
}

const GoogleFormEmbed: React.FC<GoogleFormEmbedProps> = ({ formSrc, width = "100%", height = "100%" }) => {
  return (
    <iframe
      src={formSrc}
      width={width}
      height={height}
      title="Formulário de Orçamento"
      style={{
        padding: 0,
        border: 'none',
        width: '100%',
        height: '100%',
        minHeight: '600px'
      }}
    >
      Carregando…
    </iframe>
  );
};

export default GoogleFormEmbed; 