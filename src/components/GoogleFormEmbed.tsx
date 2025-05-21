"use client"; // Marque como Client Component se estiver usando App Router

import React from 'react';

interface GoogleFormEmbedProps {
  formSrc: string;
  width?: string;
  height?: string;
}

const GoogleFormEmbed: React.FC<GoogleFormEmbedProps> = ({ formSrc, width = "100%", height = "100%" }) => {
  return (
    // Removendo o estilo responsivo do container externo para o contexto do modal
    // onde o modal já controla a largura e altura máximas.
    // O iframe ficará dentro do modalBody, que já tem overflow: auto.
    <iframe
      src={formSrc}
      width={width}
      height={height}
      title="Formulário de Orçamento"
      style={{
        padding: 0,
        border: 'none',
        width: '100%', // Para garantir que o iframe ocupe a largura total disponível no modal
        height: '100%', // Para garantir que o iframe ocupe a altura total disponível no modal
        minHeight: '600px' // Um min-height pode ser útil para o formulário
      }}
    >
      Carregando…
    </iframe>
  );
};

export default GoogleFormEmbed; 