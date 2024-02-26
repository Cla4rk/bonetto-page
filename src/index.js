import React from "react";
import ReactDOM from "react-dom";
import SPA from "./components/SPA/SPA.jsx";
import ShadertoyReact from "shadertoy-react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cumple from "./components/CumpleAños/Cumple.jsx";

import "./index.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const fragmentShader = `
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
    fragColor = vec4((light * light_color + noise * 0.04), 1.0);
}
`;

function App() {
  return (
    <BrowserRouter>
      <div className="pepe">
        <ShadertoyReact fs={fragmentShader} />
      </div>
      <Routes>
        <Route path="/" element={<SPA />} />
        <Route path="/Cumple" element={<Cumple />} />
      </Routes>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
