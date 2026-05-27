import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import imagePhone from "../assets/img/phone2.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { FaTelegram, FaInfoCircle } from 'react-icons/fa';
import DownloadApkButtonFapro from './DownloadApkButtonFapro';
//import DownloadApkButtonFapro64 from "./DownloadApkButtonFapro64";

import logoapp from '../assets/img/logozuri.png';


export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "DEPORTIVOS", "de FUTBOL", "EN VIVO" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  


  const [show, setShow] = useState(true);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>{`Disfruta de eventos `} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Asss", "ADMISION", "EXAMEN" ]'><span className="wrap">{text}</span></span></h2>
                  <p>Es la Nueva Actualización denominado FAPRO PLUS OFFICIAL. Para un mejor experiencia de eventos deportivos, caneles premium en vivo.</p>
                  {/*<h1 style={{ color: '#FE2E2E', fontSize: '40px' }}><FaInfoCircle style={{color: 'yellow', fontSize: '40px' }}/> ATENCIÓN <FaInfoCircle style={{color: 'yellow', fontSize: '40px'}}/></h1> 
                  {<h6 style={{ color: '#00ff00', fontSize: '18px' }}>ANTES DE INSTALAR SEGUIR ESTOS PASOS</h6>}
                  {<h6 style={{ color: '#ffd700', fontSize: '18px' }}>1.  - DESINSTALAR LA VERSIÓN ANTERIOR ANTES DE INSTALAR LA NUEVA VERSIÓN DE LA APLICACIÓN</h6>}
                  {<h6 style={{ color: '#ffd700', fontSize: '18px' }}>2.  - INSTALAR DESDE PLAY STORE</h6>}*/}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <h6 style={{ color: '#d79d08', fontSize: '18px', margin: 0 }}>
                      DESINSTALAR LA APLICACIÓN ZURI PLAY antes de instalar la nueva aplicación
                    </h6>

                    <img
                      src={logoapp}
                      alt="Icono"
                      style={{ width: '50px', height: '90px', objectFit: 'contain' }}
                    />
                  </div>
                  <h6 style={{ color: '#ff2301', fontSize: '18px' }}>    (DAR PERMISOS PARA INSTALAR LA APLICACIÓN)</h6>
                  
                  {/*<button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>*/}
                  <DownloadApkButtonFapro />

                {/*<button onClick={() => downloadApk(FILEAPK)} className="tagline">Descargar Ahora</button><br></br>
                <button onClick={() => downloadApk(FILEAPK64)} className="tagline">Descargar (opcion2)</button><br></br>*/}
                {/*<button onClick={() => openInNewTab('https://play.google.com/store/apps/details?id=com.fullmedia.fapromediaplus')} className="tagline">Descargar Ahora</button><br></br>*/}
                <br></br><br></br>
      
                
                {/*<button onClick={() => {setShow(!show)}} className="taglineorange">Generar PIN</button><br></br>
                  {show ? (
                    <div></div>
                  ) : (
                    <div style={{ color: 'red' }}><h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Disponible muy pronto</h6></div>
                  )}*/}

    


                {/*<button onClick={() => openInNewTab('https://webesfm.web.app')} className="tagline">Ir a Demo</button>*/}
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={imagePhone} alt="Header Img"/>
                  {/*<img src={headerImg} alt="Header Img"/>*/}
                </div>}
            </TrackVisibility>
          </Col>
        </Row>


        {/*<Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
          <br></br><br></br>
                {<h6 style={{ color: '#BDBDBD', fontSize: '18px' }}>Si tiene problemas al descargar o instalar</h6>}
                <button onClick={() => openInNewTab('https://t.me/+LMRZmj7XT5ZhYmJh')} className="tagline"><FaTelegram style={{color: 'white', fontSize: '35px' }}/>  UNETE AL GRUPO DE TELEGRAM</button><br></br>
  
             
          </Col>
        </Row>*/}
      </Container>
    </section>
  )
}

const downloadApk = (url) => {
  const fileName=url.split("/").pop();
  const aTag = document.createElement("a");
  aTag.href=url;
  aTag.setAttribute("download",fileName);
  document.body.appendChild(aTag);
  aTag.click();
  aTag.remove();
  /*axios.get(url, {
    responseType: 'blob',
  })
  .then((res) => {
    fileDownload(res.data, filename)
  })*/
}
