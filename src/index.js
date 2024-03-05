import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import SPA from "./components/SPA/SPA.jsx";
import ShadertoyReact from "shadertoy-react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Faena from "./components/FaenaArtCenter/Faena.jsx";
import "./index.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import ScrollToTop from "./components/ScrollToTop.js";

// Definir los fragment shaders
const fragmentShaderDefault = `
#define NOISE_TEX_SIZE 1024.0

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec2 uv = 0.7 * (2.0 * fragCoord.xy - iResolution.xy) / iResolution.y;
    vec2 mouse = 0.5 * (2.0 * iMouse.xy - iResolution.xy) / iResolution.y;
    vec2 offset = vec2(cos(iTime/2.0) * mouse.x, sin(iTime/2.0) * mouse.y);

    vec3 light_color = vec3(0.1, 0.8, 2);

    // Verificar la posición del mouse y establecer el color de la luz en consecuencia
    float t = smoothstep(-0.1, 0.1, mouse.x);
    light_color = mix(vec3(0.1, 0.8, 2.0), vec3(0.1, 0.8, 2.0), t);
  
    float light = 0.1 / distance(normalize(uv), uv);

    if (length(uv) < 9.0) {
        light *= 0.06 / distance(normalize(uv-offset), uv-offset);
    }
  
    // Agregar el filtro granulado
    vec3 noise = vec3(0.0);
    vec2 pos = vec2(floor(uv.x * NOISE_TEX_SIZE), floor(uv.y * NOISE_TEX_SIZE));
    float rand = fract(sin(dot(pos, vec2(12.9898, 78.233))) * 43758.5453);
    noise = vec3(rand);

    // Reducir la intensidad de la luz y el efecto del ruido
    // Ajusta estos valores para controlar la reducción de la intensidad
    float lightIntensityFactor = 0.3; // Reduce la intensidad de la luz
    float noiseIntensityFactor = 0.04; // Reduce la intensidad del ruido

    fragColor = vec4((light * light_color * lightIntensityFactor + noise * noiseIntensityFactor), 1.0);
}
`;

const fragmentShaderFaena = `
#define NOISE_TEX_SIZE 1024.0

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec2 uv = 0.7 * (2.0 * fragCoord.xy - iResolution.xy) / iResolution.y;
    vec2 mouse = 0.5 * (2.0 * iMouse.xy - iResolution.xy) / iResolution.y;
    vec2 offset = vec2(cos(iTime/2.0) * mouse.x, sin(iTime/2.0) * mouse.y);

    // Cambiar el color de la luz a dorado
    vec3 light_color = vec3(1.0, 0.71, 0.29); // Tonos dorados

    // Verificar la posición del mouse y establecer el color de la luz en consecuencia
    float t = smoothstep(-0.1, 0.1, mouse.x);
    light_color = mix(vec3(1.0, 0.71, 0.29), vec3(1.0, 0.71, 0.29), t);
  
    float light = 0.1 / distance(normalize(uv), uv);

    if (length(uv) < 9.0) {
        light *= 0.06 / distance(normalize(uv-offset), uv-offset);
    }
  
    // Agregar el filtro granulado
    vec3 noise = vec3(0.0);
    vec2 pos = vec2(floor(uv.x * NOISE_TEX_SIZE), floor(uv.y * NOISE_TEX_SIZE));
    float rand = fract(sin(dot(pos, vec2(12.9898, 78.233))) * 43758.5453);
    noise = vec3(rand);

    // Reducir la intensidad de la luz y el efecto del ruido
    // Ajusta estos valores para controlar la reducción de la intensidad
    float lightIntensityFactor = 0.3; // Reduce la intensidad de la luz
    float noiseIntensityFactor = 0.04; // Reduce la intensidad del ruido

    fragColor = vec4((light * light_color * lightIntensityFactor + noise * noiseIntensityFactor), 1.0);
}

`;

// Función para determinar qué fragment shader usar según la ruta
function getFragmentShader(location) {
  if (location.pathname === "/Cumple") {
    return fragmentShaderFaena;
  } else {
    return fragmentShaderDefault;
  }
}

// Componente ShaderWrapper que renderiza el ShadertoyReact con el fragment shader correspondiente
function ShaderWrapper() {
  const location = useLocation();
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey((prevKey) => prevKey + 1);
  }, [location]);

  const fragmentShader = getFragmentShader(location);

  return <ShadertoyReact key={key} fs={fragmentShader} />;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="pepe">
        <ShaderWrapper />
      </div>
      <Routes>
        <Route path="/" element={<SPA />} />
        <Route path="/Cumple" element={<Faena />} />
      </Routes>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
