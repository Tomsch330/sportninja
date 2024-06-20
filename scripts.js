// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const videoContainer = document.getElementById('video-container');
    const videos = [
        'https://www.youtube.com/embed/p6tVOMGuQMw?si=vadqQilyroeYFIHx',
        'https://www.youtube.com/embed/p6tVOMGuQMw?si=vadqQilyroeYFIHx',
        'https://www.youtube.com/embed/p6tVOMGuQMw?si=vadqQilyroeYFIHx'
    ];
    videos.forEach(videoUrl => {
        const iframe = document.createElement('iframe');
        iframe.src = videoUrl;
        iframe.width = '560';
        iframe.height = '315';
        iframe.frameBorder = '0';
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.allowFullscreen = true;
        videoContainer.appendChild(iframe);
    });
});
