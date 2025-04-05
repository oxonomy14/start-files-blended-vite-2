import Button from '../Button/Button';
import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';
import PhotosGalleryItem from '../PhotosGalleryItem/PhotosGalleryItem';

const PhotosGallery = ({ images, onLoadMore, page }) => {
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
            />
          </GridItem>
        ))}
      </Grid>
      {page > 0 && (
        <Button onClick={onLoadMore} type="button">
          Load More
        </Button>
      )}
    </>
  );
};
export default PhotosGallery;
