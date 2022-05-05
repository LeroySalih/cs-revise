const Video = ({task}) => {
  return (
    <div>
      
     
     
    <div className="video-container">
      <iframe width="640px" height="385px"
        src={`https://www.youtube.com/embed/${task.videoKey}`}
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
      </iframe>
      </div>
    
    <style jsx>{`

        .video-container {
          display: flex;
          align-content: center;
          justify-content: center;
          align-items: center;
          margin-top: 2rem;
          margin-bottom 2rem;
        }

        .video-task-title {
          margin-left: 10px;
          margin-right: 10px;
          padding: 10px;
          border: 1px solid silver;
        }

        .video-desc {
          text-align: justify;
          font-size: 0.8rem;
        }

        .logo {
          margin-right: 2rem; 
        }

        
      `}
      </style>
    </div>
  )
}

export default Video;