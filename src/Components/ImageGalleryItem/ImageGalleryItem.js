export default function ImageGalleryItem({ picture }) {
  const { id, webformatURL } = picture;
  return (
    <li className="ImageGalleryItem">
      <img
        id={id}
        src={webformatURL}
        alt=""
        className="ImageGalleryItem-image"
      />
    </li>
  );
}
