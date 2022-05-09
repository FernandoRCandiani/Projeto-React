import React from 'react'
import FeedModal from './FeedModal';
import FeedPhoto from './FeedPhoto';

const Feed = () => {
  const [modalPhoto, setModalPhoto] = React.useState(null);

  return (
    <div>
      {modalPhoto && <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />}
      <FeedPhoto setModalPhoto={setModalPhoto} />
    </div>
  )
}

export default Feed;