import React, { forwardRef } from "react";
//@ts-ignore
const Overlay = forwardRef(({ caption, scroll }, ref) => (
  <div
    //@ts-ignore
    ref={ref}
    onScroll={(e) => {
      scroll.current =
        //@ts-ignore
        e.target.scrollTop / (e.target.scrollHeight - window.innerHeight);
      caption.current.innerText = scroll.current.toFixed(2);
    }}
    className="scroll"
  >
    <div style={{ height: "400vh" }}>
      <div className="dot">
        <h1>VR</h1>
        Virtual reality (VR) O que significa VR Oculus? Os óculos VR, ou de
        realidade virtual, são um acessório que você coloca no rosto e prender
        na cabeça..
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>Headset</h1>
        Headset, também conhecido como fone operador, fone de cabeça, headfone
        ou handsfree é um conjunto formado por um fone de ouvido com controle...
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>Foguete</h1>Os foguetes são usados para levar astronautas e
        equipamentos para a órbita da Terra ou além.
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>Turbina</h1>As turbinas são acessórios para aumento de performance
        de motores. Basicamente, sua função é restringir a ação do gás de escape
        do motor em uma área da seção transversal de vazão e, a partir daí,
        obtêm-se uma queda da pressão e de temperatura...
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>tablete</h1>A palavra tablet (pronuncia-se táblet) penetrou no
        português brasileiro há apenas dois ou três anos, vinda do inglês.
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>Notebook</h1>A definição de notebook ou laptop é simples: um
        computador portátil, que pode ser usado com bateria ou na tomada,
        desenvolvido para fácil transporte e conveniência.
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>zeppelin</h1>rande dirigível rígido de construção alemã, com carcaça
        metálica, usado para travessias do Atlântico na década de 1930.
      </div>
    </div>
    <span className="caption" ref={caption}>
      0.00
    </span>
  </div>
));

export default Overlay;
