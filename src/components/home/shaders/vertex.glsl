#pragma glslify: snoise = require('glsl-noise/simplex/3d')

uniform float uTime;
varying vec2 vUv;
varying float vDisplacement;

void main() {
    vUv = uv;
    vec3 pos = position;

    float noise = snoise(vec3(pos.x * 0.4, pos.y * 0.4, uTime * 0.5));
    pos.z += noise * 0.3;

    vDisplacement = noise;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
