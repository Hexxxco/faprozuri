import React, { useState } from 'react';
import styled from 'styled-components';

// Estilos del botón de descarga
const DownloadButton = styled.button`
  background-color: #2ab78c;
  border: none;
  color: white;
  padding: 10px 23px;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:hover {
    background-color: #49a410;
  }

  &:disabled {
    background-color: #8c8c8c;
    cursor: not-allowed;
  }
`;

// Spinner de carga
const Spinner = styled.div`
  border: 4px solid #dcebd4;
  border-top: 4px solid #39a108;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const downloadApk = (url) => {
  const fileName=url.split("/").pop();
  const aTag = document.createElement("a");
  aTag.href=url;
  aTag.setAttribute("download",fileName);
  document.body.appendChild(aTag);
  aTag.click();
  aTag.remove();
}

const DownloadApkButtonFapro = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = () => {
    setIsLoading(true);

    const apkUrl = 'https://faproplus.netlify.app/faproplus.apk'; // Reemplaza con la URL real de tu APK
      const fileName=apkUrl.split("/").pop();
      const link = document.createElement('a');
      link.href = apkUrl;
      link.setAttribute("download",fileName);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);


    // Simular una descarga para demostración, en un entorno real usarías fetch o similar
    setTimeout(() => {
      
      setIsLoading(false);
    }, 18000); // Simula un retraso de 3 segundos para la descarga
  };

  return (
    <DownloadButton onClick={handleDownload} disabled={isLoading}>
      {isLoading ? <Spinner /> : 'Descargar APK'}
      {isLoading && 'Descargando...'}
    </DownloadButton>
  );
};

export default DownloadApkButtonFapro;


