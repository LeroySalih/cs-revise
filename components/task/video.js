const Video = ({task}) => {
  return (
    <div className="videoHolder">
      <div>
          <h2>{task.title}</h2>
          <div>{task.desc}</div>
      </div>
      <div>
        <iframe width="300" height="200" 
          src={`https://www.youtube.com/embed/${task.videoKey}`}
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
          
        </iframe>
      </div>
      <style jsx>{`
        .videoHolder {
          padding: 20px;
          display: grid;
          grid-template-columns: 200px auto;
        }
      `}
      </style>
    </div>
  )
}

export default Video;