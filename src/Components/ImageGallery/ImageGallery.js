import { Component } from "react";
import { fetchPictures } from "../../Servise/picturesApi";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import Loader from "../Loader/Loader";

export default class ImageGallery extends Component {
  state = {
    baseApi: "https://pixabay.com/api/",
    myApiKey: "22969021-19f1494240440c9eacf690dfa",
    page: 1,
    pictures: null,
    error: null,
    status: "idle",
  };

  componentDidUpdate(prevProps, prevState) {
    const { baseApi, myApiKey, page } = this.state;
    const prevProp = prevProps.inputValue;
    const nextProp = this.props.inputValue;

    if (prevProp !== nextProp) {
      this.setState({ status: "pending" });

      fetchPictures(nextProp, baseApi, myApiKey, page)
        .then((pictures) => {
          if (pictures.length === 0) {
            return this.setState({ status: "rejected" });
          }
          this.setState({ pictures, status: "resolved" });
        })
        .catch((error) => this.setState({ error, status: "rejected" }));
    }
  }

  render() {
    const { pictures, error, status } = this.state;
    const { inputValue } = this.props;
    if (status === "idle") {
      return <h1 className="title">ps... Looking for some pictures? Bro.</h1>;
    }
    if (status === "pending") {
      return <Loader />;
    }
    if (status === "rejected") {
      return (
        <h1 className="title">
          By searching <span className="rejected-span">{inputValue}</span> you
          will not find pictures on this resource, sorry :()
        </h1>
      );
    }
    if (status === "resolved") {
      return (
        <ul className="ImageGallery">
          {pictures.map((picture) => (
            <ImageGalleryItem picture={picture} />
          ))}
        </ul>
      );
    }
  }
}
