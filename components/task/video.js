const Video = ({task}) => {
  return (
    <div>
     <h3 className="video-task-title"> 
      <img className="logo" src="/images/youtube.png" width="20px" />
      {task.title}
    </h3>
     <div className="videoHolder">
      <div className="video-desc">{task.desc}</div>
      <div>
        <iframe width="300" height="200" 
          src={`https://www.youtube.com/embed/${task.videoKey}`}
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
          
        </iframe>
      </div>
      
    </div>
    <style jsx>{`

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

        .videoHolder {
          padding: 20px;
          display: grid;
          grid-template-columns: 200px auto;
          grid-gap: 20px;
        }
      `}
      </style>
    </div>
  )
}

export default Video;