varying vec3 vColor;
varying vec2 vUv;

vec3 adjustSaturation(vec3 color, float saturation) {
    // Convert to grayscale using luminance weights
    float gray = dot(color, vec3(0.299, 0.587, 0.114));
    
    // Mix between grayscale and original color
    return mix(vec3(gray), color, saturation);
}

void main() {
    vec3 c = vec3(vUv, 0.0);

    c = vec3(vColor);
    c = adjustSaturation(c, 3.);

    gl_FragColor = vec4(c, 1.0);
}