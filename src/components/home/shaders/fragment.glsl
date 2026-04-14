#pragma glslify: snoise = require('glsl-noise/simplex/3d')

uniform float uTime;
uniform vec2 uPointer;
uniform vec3 uColors[5];
varying vec2 vUv;
varying float vDisplacement;

void main() {
    vec2 uv = vUv;
    vec2 pointer = uPointer * .2; // assume 0–1 range

    // Domain Warping technique for fluid, marble-like liquid
    vec2 q = vec2(0.0);
    q.x = snoise(vec3(uv * 2.0 + pointer, uTime * 0.1));
    q.y = snoise(vec3(uv * 2.0 + 1.0, uTime * 0.05));

    vec2 r = vec2(0.0);
    r.x = snoise(vec3(uv * 4.0 + q, uTime * 0.15));
    r.y = snoise(vec3(uv * 4.0 + q + pointer, uTime * 0.1));

    float f = snoise(vec3(uv.x * 3.0 + r.x + pointer.y, uv.y * 3.0 + r.y + pointer.x, uTime * 0.1));

    // Smoothly mix the 5 colors based on the warped noise layers
    vec3 color = uColors[0];
    color = mix(color, uColors[1], smoothstep(-1.0, 1.0, f));
    color = mix(color, uColors[2], smoothstep(-0.5, 0.5, r.x));
    color = mix(color, uColors[3], smoothstep(-0.8, 0.8, q.y));
    color = mix(color, uColors[4], smoothstep(-0.2, 1.0, f + r.y));

    // Add a slight highlight based on the vertex physical wave
    color += (vDisplacement * 0.2);
    color *= 1.5;

    gl_FragColor = vec4(color, 1.0);
}
