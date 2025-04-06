import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';
import PhotosGalleryItem from '../PhotosGalleryItem/PhotosGalleryItem';

const PhotosGallery = ({ images, onImageClick }) => {
  return (
    <>
      <h3>PhotosGallery</h3>
      <Grid>
        {images.map(item => (
          <GridItem key={item.id}>
            <PhotosGalleryItem
              src={item.src}
              alt={item.alt}
              avg_color={item.avg_color}
              onClick={() => onImageClick(item)}
              style={{ cursor: 'pointer' }}
            />
          </GridItem>
        ))}
      </Grid>
    </>
  );
};
export default PhotosGallery;
