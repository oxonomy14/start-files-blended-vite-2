import styles from './PhotosGalleryItem.module.css';

const PhotosGalleryItem = ({ src, alt, avg_color, onClick }) => {
  return (
    <div
      className={styles.thumb}
      style={{ backgroundColor: avg_color, borderColor: avg_color }}
      onClick={onClick}
    >
      <img src={src.small} alt={alt} />
    </div>
  );
};
export default PhotosGalleryItem;
