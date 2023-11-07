
const images = [
    // "https://images.unsplash.com/photo-1636537511494-c3e558e0702b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    "https://plus.unsplash.com/premium_photo-1661904509551-6570836702e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    "https://media.istockphoto.com/id/1268998403/photo/murdeshwar-temple-early-morning-view-from-low-angle-image.jpg?s=2048x2048&w=is&k=20&c=1oYogCbLSFfvKdU6QvfhboBO2nJo1UUGv_5Cx4_6egQ=",
    "https://media.istockphoto.com/id/515855602/photo/kedarnath-in-india.jpg?s=2048x2048&w=is&k=20&c=trUB4d4A12CEL12nNhBdjQhXtZzAs2e3KQ9o-6-HDVU=",
    "https://media.istockphoto.com/id/508628776/photo/sunset-over-kandariya-mahadeva-temple.jpg?s=2048x2048&w=is&k=20&c=bfVX4nRr169bamT8x2VrPgjQYzS6y3D4Y9kGvoLiAS0=",
    ];
    
    const texts = [
    ["India", "\"Take a greatest journey on your life\""],
    ["Murdeshwar", "\"We take photos as a return ticket to a moment otherwise gone\""],
    ["kedarnath", "\"Traveling – it leaves you speechless, then turns you into a storyteller\""],
    ["Kandariya Mahadeva ", "\"Once a year, go someplace you’ve never been before\""]
    ];
    
    rgbKineticSlider = new rgbKineticSlider({
    slideImages: images,
    itemsTitles: texts,
    
    backgroundDisplacementSprite: "https://i.ibb.co/N246LxD/map-9.jpg",
    cursorDisplacementSprite: "https://i.ibb.co/KrVr51f/displace-circle.png",
    cursorImgEffect: true,
    cursorTextEffect: true,
    cursorScaleIntensity: 0.65,
    cursorMomentum: 0.14,
    
    swipe: true,
    swipeDistance: window.innerWidth * 0.4,
    swipeScaleIntensity: 2,
    
    slideTransitionDuration: 1, // transition duration
    transitionScaleIntensity: 30, // scale intensity during transition
    transitionScaleAmplitude: 160, // scale amplitude during transition
    
    
    nav: true, // enable navigation
    navElement: ".main-nav", // set nav class
    
    
    imagesRgbEffect: true,
    imagesRgbIntensity: 0.9,
    navImagesRgbIntensity: 80,
    
    textsDisplay: true,
    textsSubTitleDisplay: true,
    textsTiltEffect: true,
    googleFonts: ["Playfair Display:700", "Roboto:400"],
    buttonMode: false,
    textsRgbEffect: true,
    textsRgbIntensity: 0.03,
    navTextsRgbIntensity: 15,
    
    textTitleColor: "white",
    textTitleSize: 125,
    mobileTextTitleSize: 80,
    textSubTitleColor: "white",
    textSubTitleSize: 21,
    mobileTextSubTitleSize: 16,
    textSubTitleLetterspacing: 2,
    textSubTitleOffsetTop: 90,
    mobileTextSubTitleOffsetTop: 90
    });  