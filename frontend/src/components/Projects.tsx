export const projects = [
    {
        "title": "Computer Vision Racing AI",
        "thumbnail": "/sptk.gif",
        "description": "Neural network model that utilizes imitation learning to drive a kart in the video game SuperTuxKart.",
        "tools": "Python, Pytorch",
        "fullDesc":"This neural network was a project to apply my knowledge of computer vision to the test by seeing if I could create a driving agent that could make its way through a racetrack in a videogame called SuperTuxKart. The network employed imitation learning to best pinpoint where the center of the road was relative to the kart. With this information, the model could then decide whether to turn, how sharp to turn, and even if drifting was necessary. Several model adjustments were made to optimize the network as best as it could such as adding batch normalizations and up-convolutions to the model.",
        "demo": null,
        "github": null
    },
    {
        "title": "Austin Apartment Worth Neural Network",
        "thumbnail": "/apartment.jpg",
        "description": "A lightweight web application that uses a neural network model to predict the worth of an apartment based on its features.",
        "tools": "NextJS, Flask, Docker, Pytorch",
        "fullDesc": "This application was an effort to help some of my peers who reside in Austin, Texas in their search for an apartment. The network itself is a nonlinear model that uses a number of features such as distances from notable locations in Austin and the existence of certain amenities to predict a number for the monthly rent of that apartment. Data for the model was manually collected in order to acquire fresh data to avoid having to convert for inflation, but because of that the dataset was relatively small, amounting to about 13,000 apartments. Even with these constraints, the model was capable of predicting the rent of the apartment within a margin of error of 186. Thus, when using this model to determine the worth of an apartment, if the actual rent is above the predicted rent plus a padding of 186, then the apartment is determined to be overpriced.",
        "demo": '/apartments',
        "github": "https://github.com/chrischen88/apartment-worth-app"
    },
    {
        "title": "Ray-Tracing Graphics Engine",
        "thumbnail": "/menger1.png",
        "description": "Graphics program that generated ray-traced images of complex scenes.",
        "fullDesc":"Graphics program that generated ray-traced images of complex scenes.",
        "tools": "C++, GLSL",
        "demo": null,
        "github": null
    },
    {
        "title": "Online College Search Web Application",
        "thumbnail": '/college.jpg',
        "description": "An internet database designed to provide ample information to students about colleges they are interested in applying to.",
        "fullDesc": "An internet database designed to provide ample information to students about colleges they are interested in applying to.",
        "tools": "ReactJS, Flask, Docker, AWS",
        "demo": null,
        "github": "https://gitlab.com/Zebo616/cs373-group-10"
    },
]

// Developed with Pytorch, it uses batch normalizations and up convolutions to better learn how to drive
// , using different tools to convey it such as Google Maps, Recharts, and Algolia
//  using an implementation of the Phong illumination model and ray-triangle intersections