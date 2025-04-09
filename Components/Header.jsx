import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <div className='py-5 px-5 md:px-12 lg:px-28'>
            <div className='flex justify-between items-center'>
                <Image src={assets.logo} width={180} alt='' className='w-[130px] sm:w-auto' />
                <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]'>Get started <Image src={assets.arrow} alt='' /></button>
            </div>
            <div className='text-center my-8'>
                <h1 className='text-3xl sm:text-5xl font-medium'>Latest Blogs</h1>
                <p className='mt-10 max-w-[740px] m-auto text-xs sm:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sapiente doloribus, quia laborum cum vitae modi ducimus totam aperiam doloremque quod sequi delectus in perferendis explicabo? Molestias in accusantium distinctio.</p>
                <form className='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]' action="">
                    <input type="email" placeholder='Enter your email' className='pl-4 outline-none' />
                    <button type='submit' className='border-l border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white'>Subscribe</button>
                </form>
            </div>
        </div>
    )
}

export default Header


// "use client"
// import { assets } from '@/Assets/assets'
// import Image from 'next/image'
// import { useRef, useEffect, useState } from 'react'
// import { motion } from 'framer-motion'
// import * as THREE from 'three'

// const Header = () => {
//     const buttonRef = useRef(null);
//     const canvasRef = useRef(null);
//     const [isHovering, setIsHovering] = useState(false);
//     const rendererRef = useRef(null);
//     const sceneRef = useRef(null);
//     const cameraRef = useRef(null);
//     const particlesRef = useRef(null);

//     // Initialize Three.js scene
//     useEffect(() => {
//         if (!buttonRef.current || !canvasRef.current) return;

//         // Setup
//         const scene = new THREE.Scene();
//         sceneRef.current = scene;

//         const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
//         camera.position.z = 5;
//         cameraRef.current = camera;

//         const renderer = new THREE.WebGLRenderer({
//             canvas: canvasRef.current,
//             alpha: true,
//         });
//         renderer.setSize(200, 60);
//         rendererRef.current = renderer;

//         // Create particles
//         const particlesGeometry = new THREE.BufferGeometry();
//         const particlesCount = 100;
//         const posArray = new Float32Array(particlesCount * 3);
        
//         for (let i = 0; i < particlesCount * 3; i++) {
//             posArray[i] = (Math.random() - 0.5) * 5;
//         }
        
//         particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        
//         const particlesMaterial = new THREE.PointsMaterial({
//             size: 0.05,
//             color: 0x000000,
//             transparent: true,
//             opacity: 0.8,
//         });
        
//         const particles = new THREE.Points(particlesGeometry, particlesMaterial);
//         scene.add(particles);
//         particlesRef.current = particles;

//         // Animation function
//         const animate = () => {
//             requestAnimationFrame(animate);
            
//             if (particlesRef.current && isHovering) {
//                 particlesRef.current.rotation.x += 0.001;
//                 particlesRef.current.rotation.y += 0.002;
//             }
            
//             renderer.render(scene, camera);
//         };
        
//         animate();

//         // Cleanup
//         return () => {
//             if (rendererRef.current) {
//                 rendererRef.current.dispose();
//             }
//         };
//     }, [buttonRef, canvasRef]);

//     // Update particle color and animation on hover
//     useEffect(() => {
//         if (!particlesRef.current) return;
        
//         if (isHovering) {
//             particlesRef.current.material.color = new THREE.Color(0x3366ff);
//             particlesRef.current.material.size = 0.08;
//         } else {
//             particlesRef.current.material.color = new THREE.Color(0x000000);
//             particlesRef.current.material.size = 0.05;
//         }
//     }, [isHovering]);

//     // Button animations
//     const buttonVariants = {
//         initial: { 
//             scale: 1,
//             boxShadow: "0px 0px 0px rgba(0, 0, 0, 0.2)"
//         },
//         hover: { 
//             scale: 1.05,
//             boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)"
//         }
//     };

//     // Text animations
//     const textVariants = {
//         initial: { y: 0 },
//         hover: { y: -2 }
//     };

//     // Arrow animations
//     const arrowVariants = {
//         initial: { x: 0 },
//         hover: { x: 5 }
//     };

//     return (
//         <div className='py-5 px-5 md:px-12 lg:px-28'>
//             <div className='flex justify-between items-center'>
//                 <Image src={assets.logo} width={180} alt='Logo' className='w-[130px] sm:w-auto' />
                
//                 <div className="relative">
//                     <motion.button 
//                         ref={buttonRef}
//                         className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black bg-white relative z-10 overflow-hidden'
//                         variants={buttonVariants}
//                         initial="initial"
//                         whileHover="hover"
//                         transition={{ type: "spring", stiffness: 400, damping: 10 }}
//                         onHoverStart={() => setIsHovering(true)}
//                         onHoverEnd={() => setIsHovering(false)}
//                     >
//                         <motion.span 
//                             variants={textVariants}
//                             transition={{ type: "spring", stiffness: 500 }}
//                         >
//                             Get started
//                         </motion.span>
                        
//                         <motion.div
//                             variants={arrowVariants}
//                             transition={{ type: "spring", stiffness: 500 }}
//                         >
//                             <Image src={assets.arrow} alt='Arrow' />
//                         </motion.div>
//                     </motion.button>
                    
//                     <canvas
//                         ref={canvasRef}
//                         className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
//                         style={{ 
//                             opacity: isHovering ? 1 : 0,
//                             transition: 'opacity 0.3s ease'
//                         }}
//                     />
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Header


// "use client"

// import { assets } from '@/Assets/assets'
// import Image from 'next/image'
// import React, { useRef, useEffect, useState } from 'react'
// import { motion } from 'framer-motion'
// import * as THREE from 'three'

// const Header = () => {
//     const buttonRef = useRef(null);
//     const canvasRef = useRef(null);
//     const fullScreenCanvasRef = useRef(null);
//     const [isHovering, setIsHovering] = useState(false);
//     const [fireActive, setFireActive] = useState(false);
//     const rendererRef = useRef(null);
//     const fullScreenRendererRef = useRef(null);
//     const sceneRef = useRef(null);
//     const fullScreenSceneRef = useRef(null);
//     const cameraRef = useRef(null);
//     const fullScreenCameraRef = useRef(null);
//     const particlesRef = useRef(null);
//     const fireParticlesRef = useRef(null);
//     const animationFrameRef = useRef(null);
//     const fullScreenAnimationFrameRef = useRef(null);

//     // Initialize Three.js scene for button hover effect
//     useEffect(() => {
//         if (!buttonRef.current || !canvasRef.current) return;

//         // Setup
//         const scene = new THREE.Scene();
//         sceneRef.current = scene;

//         const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
//         camera.position.z = 5;
//         cameraRef.current = camera;

//         const renderer = new THREE.WebGLRenderer({
//             canvas: canvasRef.current,
//             alpha: true,
//         });
//         renderer.setSize(200, 60);
//         rendererRef.current = renderer;

//         // Create particles
//         const particlesGeometry = new THREE.BufferGeometry();
//         const particlesCount = 100;
//         const posArray = new Float32Array(particlesCount * 3);
        
//         for (let i = 0; i < particlesCount * 3; i++) {
//             posArray[i] = (Math.random() - 0.5) * 5;
//         }
        
//         particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        
//         const particlesMaterial = new THREE.PointsMaterial({
//             size: 0.05,
//             color: 0x000000,
//             transparent: true,
//             opacity: 0.8,
//         });
        
//         const particles = new THREE.Points(particlesGeometry, particlesMaterial);
//         scene.add(particles);
//         particlesRef.current = particles;

//         // Animation function
//         const animate = () => {
//             animationFrameRef.current = requestAnimationFrame(animate);
            
//             if (particlesRef.current && isHovering) {
//                 particlesRef.current.rotation.x += 0.001;
//                 particlesRef.current.rotation.y += 0.002;
//             }
            
//             renderer.render(scene, camera);
//         };
        
//         animate();

//         // Cleanup
//         return () => {
//             if (animationFrameRef.current) {
//                 cancelAnimationFrame(animationFrameRef.current);
//             }
//             if (rendererRef.current) {
//                 rendererRef.current.dispose();
//             }
//         };
//     }, [buttonRef, canvasRef, isHovering]);

//     // Update particle color and animation on hover
//     useEffect(() => {
//         if (!particlesRef.current) return;
        
//         if (isHovering) {
//             particlesRef.current.material.color = new THREE.Color(0xff5500);
//             particlesRef.current.material.size = 0.08;
//         } else {
//             particlesRef.current.material.color = new THREE.Color(0x000000);
//             particlesRef.current.material.size = 0.05;
//         }
//     }, [isHovering]);

//     // Initialize full-screen fire effect
//     useEffect(() => {
//         if (!fullScreenCanvasRef.current || !fireActive) return;

//         // Make the canvas fill the screen
//         const canvas = fullScreenCanvasRef.current;
//         canvas.style.position = 'fixed';
//         canvas.style.top = '0';
//         canvas.style.left = '0';
//         canvas.style.width = '100vw';
//         canvas.style.height = '100vh';
//         canvas.style.zIndex = '999';
//         canvas.style.pointerEvents = 'none';

//         // Setup Three.js scene
//         const scene = new THREE.Scene();
//         fullScreenSceneRef.current = scene;

//         const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//         camera.position.z = 20;
//         fullScreenCameraRef.current = camera;

//         const renderer = new THREE.WebGLRenderer({
//             canvas: canvas,
//             alpha: true,
//         });
//         renderer.setSize(window.innerWidth, window.innerHeight);
//         fullScreenRendererRef.current = renderer;

//         // Handle window resize
//         const handleResize = () => {
//             camera.aspect = window.innerWidth / window.innerHeight;
//             camera.updateProjectionMatrix();
//             renderer.setSize(window.innerWidth, window.innerHeight);
//         };

//         window.addEventListener('resize', handleResize);

//         // Create fire particles
//         const fireParticlesGeometry = new THREE.BufferGeometry();
//         const fireParticlesCount = 5000;
//         const firePositions = new Float32Array(fireParticlesCount * 3);
//         const fireSizes = new Float32Array(fireParticlesCount);
//         const fireColors = new Float32Array(fireParticlesCount * 3);
        
//         for (let i = 0; i < fireParticlesCount; i++) {
//             // Position
//             const i3 = i * 3;
//             firePositions[i3] = (Math.random() - 0.5) * 50;
//             firePositions[i3 + 1] = -10 + Math.random() * 5;
//             firePositions[i3 + 2] = (Math.random() - 0.5) * 50;
            
//             // Size
//             fireSizes[i] = Math.random() * 0.5 + 0.1;
            
//             // Color (from red to yellow)
//             fireColors[i3] = Math.random() * 0.5 + 0.5; // R
//             fireColors[i3 + 1] = Math.random() * 0.3; // G
//             fireColors[i3 + 2] = 0; // B
//         }
        
//         fireParticlesGeometry.setAttribute('position', new THREE.BufferAttribute(firePositions, 3));
//         fireParticlesGeometry.setAttribute('size', new THREE.BufferAttribute(fireSizes, 1));
//         fireParticlesGeometry.setAttribute('color', new THREE.BufferAttribute(fireColors, 3));
        
//         // Create shader material for fire particles
//         const fireParticlesMaterial = new THREE.ShaderMaterial({
//             uniforms: {
//                 time: { value: 0 },
//             },
//             vertexShader: `
//                 attribute float size;
//                 attribute vec3 color;
//                 varying vec3 vColor;
//                 uniform float time;
                
//                 void main() {
//                     vColor = color;
//                     vec3 pos = position;
                    
//                     // Make particles rise up
//                     pos.y += time * (0.5 + size);
                    
//                     // Add some movement
//                     pos.x += sin(time * 2.0 + position.z) * 0.3;
//                     pos.z += cos(time * 2.0 + position.x) * 0.3;
                    
//                     // Make particles fade as they rise
//                     if (pos.y > 15.0) {
//                         vColor.r *= (25.0 - pos.y) / 10.0;
//                         vColor.g *= (25.0 - pos.y) / 10.0;
//                     }
                    
//                     gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
//                     gl_PointSize = size * (20.0 / length(gl_Position.xyz));
//                 }
//             `,
//             fragmentShader: `
//                 varying vec3 vColor;
                
//                 void main() {
//                     // Make circular particles with soft edges
//                     float r = length(gl_PointCoord - vec2(0.5, 0.5));
//                     if (r > 0.5) discard;
                    
//                     float alpha = 1.0 - r * 2.0;
//                     gl_FragColor = vec4(vColor, alpha);
//                 }
//             `,
//             transparent: true,
//             blending: THREE.AdditiveBlending,
//             depthWrite: false,
//         });
        
//         const fireParticles = new THREE.Points(fireParticlesGeometry, fireParticlesMaterial);
//         scene.add(fireParticles);
//         fireParticlesRef.current = fireParticles;

//         // Animation function for fire effect
//         let time = 0;
//         const animateFire = () => {
//             fullScreenAnimationFrameRef.current = requestAnimationFrame(animateFire);
//             time += 0.05;
            
//             if (fireParticlesRef.current) {
//                 fireParticlesMaterial.uniforms.time.value = time;
                
//                 // Regenerate particles that have risen too high
//                 const positions = fireParticlesRef.current.geometry.attributes.position.array;
//                 const colors = fireParticlesRef.current.geometry.attributes.color.array;
//                 const sizes = fireParticlesRef.current.geometry.attributes.size.array;
                
//                 for (let i = 0; i < fireParticlesCount; i++) {
//                     const i3 = i * 3;
//                     const y = positions[i3 + 1];
                    
//                     if (y > 25) {
//                         // Reset particle
//                         positions[i3] = (Math.random() - 0.5) * 50;
//                         positions[i3 + 1] = -10 + Math.random() * 5;
//                         positions[i3 + 2] = (Math.random() - 0.5) * 50;
                        
//                         // Randomize color
//                         colors[i3] = Math.random() * 0.5 + 0.5; // More red
//                         colors[i3 + 1] = Math.random() * 0.3; // Less green
//                         colors[i3 + 2] = 0; // No blue
                        
//                         // Randomize size
//                         sizes[i] = Math.random() * 0.5 + 0.1;
//                     }
//                 }
                
//                 fireParticlesRef.current.geometry.attributes.position.needsUpdate = true;
//                 fireParticlesRef.current.geometry.attributes.color.needsUpdate = true;
//                 fireParticlesRef.current.geometry.attributes.size.needsUpdate = true;
//             }
            
//             renderer.render(scene, camera);
//         };
        
//         animateFire();

//         // Add fire sound effect
//         if (typeof window !== 'undefined') {
//             const audio = new Audio('/fire-sound.mp3');
//             audio.volume = 0.4;
//             audio.loop = true;
//             try {
//                 audio.play().catch(e => console.log('Audio play failed:', e));
//             } catch (e) {
//                 console.log('Audio error:', e);
//             }
//         }

//         // Add page elements burning effect
//         const burnElements = () => {
//             const elements = document.querySelectorAll('div, p, h1, h2, h3, h4, h5, span');
            
//             elements.forEach((el, index) => {
//                 if (el !== canvas && !el.classList.contains('fire-button')) {
//                     // Add burning animation with delay based on position
//                     setTimeout(() => {
//                         el.style.transition = 'all 2s ease-in-out';
//                         el.style.color = '#ff3d00';
//                         el.style.textShadow = '0 0 5px #ff9900, 0 0 10px #ff5500, 0 0 15px #ff3300';
                        
//                         // Add smoking effect
//                         const smoke = document.createElement('div');
//                         smoke.style.position = 'absolute';
//                         smoke.style.width = '100%';
//                         smoke.style.height = '100%';
//                         smoke.style.top = '0';
//                         smoke.style.left = '0';
//                         smoke.style.background = 'radial-gradient(rgba(50, 50, 50, 0), rgba(50, 50, 50, 0.2))';
//                         smoke.style.pointerEvents = 'none';
//                         smoke.style.zIndex = '9999';
                        
//                         el.style.position = 'relative';
//                         el.appendChild(smoke);
//                     }, index * 100);
//                 }
//             });
//         };
        
//         burnElements();

//         // Cleanup
//         return () => {
//             if (fullScreenAnimationFrameRef.current) {
//                 cancelAnimationFrame(fullScreenAnimationFrameRef.current);
//             }
//             if (fullScreenRendererRef.current) {
//                 fullScreenRendererRef.current.dispose();
//             }
//             window.removeEventListener('resize', handleResize);
//         };
//     }, [fireActive]);

//     // Button animations
//     const buttonVariants = {
//         initial: { 
//             scale: 1,
//             boxShadow: "0px 0px 0px rgba(0, 0, 0, 0.2)"
//         },
//         hover: { 
//             scale: 1.05,
//             boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)"
//         },
//         fire: {
//             scale: 1.1,
//             boxShadow: "0px 0px 30px rgba(255, 0, 0, 0.8), 0px 0px 60px rgba(255, 120, 0, 0.5)",
//             backgroundColor: "#ff3d00",
//             color: "#ffffff",
//             border: "2px solid #ff5500"
//         }
//     };

//     // Text animations
//     const textVariants = {
//         initial: { y: 0 },
//         hover: { y: -2 }
//     };

//     // Arrow animations
//     const arrowVariants = {
//         initial: { x: 0 },
//         hover: { x: 5 }
//     };

//     // Handle button click
//     const handleFireClick = () => {
//         setFireActive(true);
        
//         // Change the body background to create a dark atmosphere
//         if (typeof document !== 'undefined') {
//             document.body.style.transition = 'background-color 2s ease';
//             document.body.style.backgroundColor = '#1a0500';
//         }
//     };

//     return (
//         <div className='py-5 px-5 md:px-12 lg:px-28'>
//             <div className='flex justify-between items-center'>
//                 <Image src={assets.logo} width={180} alt='Logo' className='w-[130px] sm:w-auto' />
                
//                 <div className="relative">
//                 <motion.button
//     ref={buttonRef}
//     className={`flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black bg-white relative z-10 overflow-hidden fire-button ${fireActive ? 'fire-active' : ''}`}
//     variants={buttonVariants}
//     initial="initial"
//     whileHover={fireActive ? "fire" : "hover"}
//     animate={fireActive ? "fire" : "initial"}
//     transition={{ type: "spring", stiffness: 400, damping: 10 }}
//     onHoverStart={() => setIsHovering(true)}
//     onHoverEnd={() => setIsHovering(false)}
//     onClick={handleFireClick}
// >

//                         <motion.span 
//                             variants={textVariants}
//                             transition={{ type: "spring", stiffness: 500 }}
//                         >
//                             {fireActive ? "BURN!" : "Get started"}
//                         </motion.span>
                        
//                         <motion.div
//                             variants={arrowVariants}
//                             transition={{ type: "spring", stiffness: 500 }}
//                         >
//                             <Image src={assets.arrow} alt='Arrow' />
//                         </motion.div>
//                     </motion.button>
                    
//                     <canvas
//                         ref={canvasRef}
//                         className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
//                         style={{ 
//                             opacity: isHovering && !fireActive ? 1 : 0,
//                             transition: 'opacity 0.3s ease'
//                         }}
//                     />
//                 </div>
//             </div>
            
//             {/* Full screen fire canvas */}
//             <canvas
//                 ref={fullScreenCanvasRef}
//                 className="fullscreen-fire"
//                 style={{
//                     position: 'fixed',
//                     top: 0,
//                     left: 0,
//                     width: '100vw',
//                     height: '100vh',
//                     pointerEvents: 'none',
//                     opacity: fireActive ? 1 : 0,
//                     transition: 'opacity 1s ease',
//                     zIndex: 999,
//                 }}
//             />
//         </div>
//     )
// }

// export default Header


// "use client"
// import { assets } from '@/Assets/assets'
// import Image from 'next/image'
// import React, { useRef, useEffect, useState } from 'react'
// import { motion } from 'framer-motion'
// import * as THREE from 'three'

// const Header = () => {
//     const buttonRef = useRef(null);
//     const buttonCanvasRef = useRef(null);
//     const [isButtonHovering, setIsButtonHovering] = useState(false);
//     const buttonRendererRef = useRef(null);
//     const buttonSceneRef = useRef(null);
//     const buttonCameraRef = useRef(null);
//     const buttonParticlesRef = useRef(null);

//     // Initialize Three.js scene for the button
//     useEffect(() => {
//         if (!buttonRef.current || !buttonCanvasRef.current) return;

//         // Setup
//         const scene = new THREE.Scene();
//         buttonSceneRef.current = scene;

//         const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
//         camera.position.z = 5;
//         buttonCameraRef.current = camera;

//         const renderer = new THREE.WebGLRenderer({
//             canvas: buttonCanvasRef.current,
//             alpha: true,
//         });
//         renderer.setSize(200, 60);
//         buttonRendererRef.current = renderer;

//         // Create particles
//         const particlesGeometry = new THREE.BufferGeometry();
//         const particlesCount = 100;
//         const posArray = new Float32Array(particlesCount * 3);
        
//         for (let i = 0; i < particlesCount * 3; i++) {
//             posArray[i] = (Math.random() - 0.5) * 5;
//         }
        
//         particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        
//         const particlesMaterial = new THREE.PointsMaterial({
//             size: 0.05,
//             color: 0x000000,
//             transparent: true,
//             opacity: 0.8,
//         });
        
//         const particles = new THREE.Points(particlesGeometry, particlesMaterial);
//         scene.add(particles);
//         buttonParticlesRef.current = particles;

//         // Animation function
//         const animate = () => {
//             requestAnimationFrame(animate);
            
//             if (buttonParticlesRef.current && isButtonHovering) {
//                 buttonParticlesRef.current.rotation.x += 0.001;
//                 buttonParticlesRef.current.rotation.y += 0.002;
//             }
            
//             renderer.render(scene, camera);
//         };
        
//         animate();

//         // Cleanup
//         return () => {
//             if (buttonRendererRef.current) {
//                 buttonRendererRef.current.dispose();
//             }
//         };
//     }, [buttonRef, buttonCanvasRef]);

//     // Update button particle color and animation on hover
//     useEffect(() => {
//         if (!buttonParticlesRef.current) return;
        
//         if (isButtonHovering) {
//             buttonParticlesRef.current.material.color = new THREE.Color(0x3366ff);
//             buttonParticlesRef.current.material.size = 0.08;
//         } else {
//             buttonParticlesRef.current.material.color = new THREE.Color(0x000000);
//             buttonParticlesRef.current.material.size = 0.05;
//         }
//     }, [isButtonHovering]);

//     // Button animations
//     const buttonVariants = {
//         initial: { 
//             scale: 1,
//             boxShadow: "0px 0px 0px rgba(0, 0, 0, 0.2)"
//         },
//         hover: { 
//             scale: 1.05,
//             boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)"
//         }
//     };

//     // Text animations
//     const textVariants = {
//         initial: { y: 0 },
//         hover: { y: -2 }
//     };

//     // Arrow animations
//     const arrowVariants = {
//         initial: { x: 0 },
//         hover: { x: 5 }
//     };

//     // Characters animation variants
//     const characterVariants = {
//         initial: { 
//             y: 0,
//             color: "#000000",
//             textShadow: "0px 0px 0px rgba(0, 0, 0, 0)"
//         },
//         hover: i => ({
//             y: [0, -15, 0],
//             color: ["#000000", "#5c20cf", "#9f3aff"],
//             textShadow: ["0px 0px 0px rgba(0, 0, 0, 0)", "0px 0px 8px rgba(138, 43, 226, 0.6)", "0px 0px 4px rgba(138, 43, 226, 0.4)"],
//             transition: {
//                 y: {
//                     duration: 0.5,
//                     times: [0, 0.5, 1],
//                     ease: "easeInOut",
//                     // Staggered delay for each character
//                     delay: i * 0.06
//                 },
//                 color: {
//                     duration: 0.4,
//                     times: [0, 0.7, 1],
//                     ease: "easeOut",
//                     delay: i * 0.06
//                 },
//                 textShadow: {
//                     duration: 0.4,
//                     times: [0, 0.7, 1],
//                     ease: "easeOut",
//                     delay: i * 0.06
//                 }
//             }
//         })
//     };

//     // Container animation for the text
//     const containerVariants = {
//         initial: {},
//         hover: {
//             transition: {
//                 staggerChildren: 0.06
//             }
//         }
//     };

//     return (
//         <div className='py-5 px-5 md:px-12 lg:px-28'>
//             <div className='flex justify-between items-center'>
//                 <motion.div 
//                     className="relative cursor-pointer"
//                     initial="initial"
//                     whileHover="hover"
//                     variants={containerVariants}
//                 >
//                     <div className="flex text-4xl font-bold z-10 relative">
//                         {/* Split text into individual characters for animation */}
//                         {Array.from("Blooger").map((char, index) => (
//                             <motion.span
//                                 key={index}
//                                 custom={index}
//                                 variants={characterVariants}
//                                 className="inline-block"
//                                 style={{ 
//                                     transformOrigin: "bottom center",
//                                     display: "inline-block",
//                                     filter: "drop-shadow(0px 0px 0px rgba(0,0,0,0))" // For smooth shadow transition
//                                 }}
//                             >
//                                 {char}
//                             </motion.span>
//                         ))}
//                     </div>

//                     {/* Subtle 3D background effect using a gradient overlay */}
//                     <motion.div 
//                         className="absolute inset-0 w-full h-full bg-gradient-to-br rounded-lg z-0"
//                         initial={{ opacity: 0, scale: 0.9 }}
//                         whileHover={{ 
//                             opacity: 0.1, 
//                             scale: 1.1,
//                             background: "linear-gradient(120deg, #9f3aff 0%, #5c20cf 100%)"
//                         }}
//                         transition={{ duration: 0.3 }}
//                     />
//                 </motion.div>
                
//                 <div className="relative">
//                     <motion.button 
//                         ref={buttonRef}
//                         className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black bg-white relative z-10 overflow-hidden'
//                         variants={buttonVariants}
//                         initial="initial"
//                         whileHover="hover"
//                         transition={{ type: "spring", stiffness: 400, damping: 10 }}
//                         onHoverStart={() => setIsButtonHovering(true)}
//                         onHoverEnd={() => setIsButtonHovering(false)}
//                     >
//                         <motion.span 
//                             variants={textVariants}
//                             transition={{ type: "spring", stiffness: 500 }}
//                         >
//                             Get started
//                         </motion.span>
                        
//                         <motion.div
//                             variants={arrowVariants}
//                             transition={{ type: "spring", stiffness: 500 }}
//                         >
//                             <Image src={assets.arrow} alt='Arrow' />
//                         </motion.div>
//                     </motion.button>
                    
//                     <canvas
//                         ref={buttonCanvasRef}
//                         className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
//                         style={{ 
//                             opacity: isButtonHovering ? 1 : 0,
//                             transition: 'opacity 0.3s ease'
//                         }}
//                     />
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Header